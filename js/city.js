$(document).ready(function() {
    var path = window.location.hash.substr(13);
    $.ajax({
        url: 'city/fetch_city_profile.php',
        type: 'GET',
        data: { id: path },
        success: function(city) {

            const profile = document.querySelector('#city_profile');
            var output = '';

            output += `
            <div id="carouselExampleIndicators" class="carousel slide card-img-top" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner" style="height:500px;">
              <div class="carousel-item active">
              <img src="${city[0].city_image_url}.jpg" class="d-block w-100" id="cardimg" alt="...">
              </div>
              <div class="carousel-item">
                <img src="${city[0].city_image_url}1.jpg" class="d-block w-100" id="cardimg" alt="...">
              </div>
              <div class="carousel-item">
              <img src="${city[0].city_image_url}2.jpg" class="d-block w-100" id="cardimg" alt="...">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>   
               
               <h5 style=""text-align:center;" class="card-title" style="padding-left:5px;">${city[0].name_p}</h5>
               <p class="card-text" style="padding-left:5px;">Νομός: ${city[0].nomos}</p>
               <p class="card-text" style="padding-left:5px;">${city[0].description}</p>
             `

            profile.innerHTML = output;

        }
    })

})

function fetch_comments(page) {

    var session = '';
    var total_pages = '';
    var path = window.location.hash.substr(13);

    $.ajax({
        url: 'session/get_session.php',
        type: 'GET',
        success: function(data) {
            session = data;
        }
    })

    $.ajax({
        url: 'other/check_total_pages.php',
        type: 'GET',
        data: { city_id: path },
        success: function(pages) {
            total_pages = pages;
        }
    })

    $.ajax({
                url: 'comment/fetch_comments.php',
                type: 'GET',
                data: { id: path, page: page },
                success: function(comments) {

                        if (comments !== null) {

                            const list_comments = document.querySelector('#comments');
                            let output = '';

                            comments.forEach(function(comment) {


                                        output += `
                                        <li class="media" id="comment-card">
                                        <a href="#" class="pull-left pr-2">
                                        ${comment.gender=='male' ? `<img src="images/user_male.jpg" alt="" class="img-circle">`
                                        : `<img src="images/user_female.jpg" alt="" class="img-circle">`}    
                                        </a>
                                        <div class="media-body" id="comment-card">
                                            <span class="text-muted pull-right">
                                                <small class="text-muted">${comment.date_created}</small>
                                            </span>
                                            ${comment.user_id===session ? `<a href="#my_comments.php"?id=${comment.user_id}"> <strong class="text-success">${comment.nickname}</strong></a> σχολίασε :</p>`
                                            : 
                                            `<p> Ο χρήστης <a href="#user_comments.php?id=${comment.id}"> <strong class="text-success">${comment.nickname}</strong></a> σχολίασε :</p>`
                                            }
                                            <p>
                                            ${comment.comment_text} 
                                            </p>
                                            <div >
                                            ${ session == comment.id ? `<button id=${comment.comment_id} class='btn btn-outline-secondary  float-right delete'>Διαγραφή</button>` : ''}
                                            </div>
                                            
                                        </div>
                                    </li>

                       
                            
                                `
                       
                    list_comments.innerHTML = output;


                })

                let output2 = '';
                 for(let i=1;i<=total_pages;i++){
                    output2 += `
                    <li class="page-item" aria-current="page" id="${i}">
                    <span style="font-size:1.2rem;cursor:pointer" class="page-link">${i}</span>
                    </li>
                   `
                    document.querySelector('#pagination').innerHTML = output2;
                
                }
            }
        },
        complete: function(){
           
                  $('.delete').on('click',function(e){
                   if(confirm('Είσαι σίγουρος;')){
                    const id = e.target.id;
                       var path = window.location.hash.substr(13);
                       $.ajax({
                           url: "comment/delete_comment.php",
                           type: "GET",
                           data: {comment_id:id,city_id:path},
                           success: function(){
                               e.target.parentElement.parentElement.parentElement.remove();
                           }
                       })
                    }
                  })
                       
        }
    })
}

$(document).on('click','.page-item',function(){
    var page = $(this).attr('id'); // pairnoume to dynamiko id tou button 
    fetch_comments(page);
})

$(document).ready(function(){
   fetch_comments('1');
  
})
    


// Check if liked or unliked 
$(document).ready(function() {
    let button_like = document.querySelector('#button-like');
    var path = window.location.hash.substr(13);
    console.log(path)

    $.ajax({
        url: "../like/check_like.php",
        type: "GET",
        data: { id: path },
        dataType: 'json',
        success: function() {
            button_like.textContent = 'Unlike';
            button_like.className = 'btn btn-danger';

        },
        error: function() {
            button_like.textContent = 'Like';
            button_like.className = 'btn btn-info';

        },

        complete:function(){

            $('#button-like').on('click', function() {

                let button_like = document.querySelector('#button-like');
                var path = window.location.hash.substr(13);
        
                $.ajax({
                    url: 'like/like.php',
                    type: 'POST',
                    data: { id: path, value: button_like.textContent },
        
                })
        
                if (button_like.textContent == 'Like') {
                    button_like.textContent = 'Unlike';
                    button_like.className = 'btn btn-danger';
                } else if (button_like.textContent == 'Unlike') {
                    button_like.textContent = 'Like';
                    button_like.className = 'btn btn-info';
                }
        
                
        
            })

        }
    })
})




// Add comment
$('#button-comment').click(function() {
    let comment = document.querySelector("#comment");
    var path = window.location.hash.substr(13);

    if(comment.value!=''){
    $.ajax({
        url: "comment/add_comment.php",
        type: "POST",
        data: { comment: comment.value, city_id: path }
    })

    showAlert('Το σχόλιο προστέθηκε!','alert alert-success mt-2');
     

   } else {

    showAlert('Γράψτε κάτι!','alert alert-danger mt-2');
  }

  comment.value='';
  fetch_comments('1');
})


// Emfanizei to mhnyma gia to sxolio
function showAlert(message,classname){
    const comment = document.querySelector("#comment");
    const container = document.querySelector('#comment-container');
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(message));
    div.className = classname;
    
    container.insertBefore(div,comment);
    setTimeout(clearAlert,3000);
}

function clearAlert(){
    const alert = document.querySelector('.alert')
    if(alert){
        alert.remove();
    }
}