function fetch_user_comments(page) {
    var path = window.location.hash.substr(22);
    var total_pages = '';

    $.ajax({
        url: 'other/check_total_pages.php',
        type: 'GET',
        data: { user_id: path },
        success: function(pages) {
            total_pages = pages;
        }
    })


    $.ajax({
        url: 'comment/fetch_user_comments.php',
        type: 'GET',
        data: { id: path, page: page },
        success: function(comments) {

            const container = document.querySelector('#user-comments');
            const headername = document.querySelector('#headername');
            let output = '';
            let output2 = '';
            var count = 1;
            comments.forEach(function(comment) {
                if (count == 1) {
                    output2 += `<p>Τα Σχόλια του χρήστη ${comment.nickname}</p>`
                    headername.innerHTML = output2;
                    count++;
                }

                output +=
                    `
                    <li class="media" id="comment-card">
                    <div class="media-body" id="comment-card">
                        <span class="text-muted pull-right">
                            <small class="text-muted">${comment.date_created}</small>
                        </span>
                        <p> Ο χρήστης  <strong class="text-success">${comment.nickname}</strong> σχολίασε για την πόλη <a href="#city.php?id=${comment.city_id}"> <strong class="text-success">${comment.name_p} </strong> : </a></p>
                        <p>
                        ${comment.comment_text} 
                        </p>
                       
                    </div>
                    
                </li>
                `

                container.innerHTML = output;

            })

            let output3 = '';
            for (let i = 1; i <= total_pages; i++) {
                output3 += `
               <li class="pagination page-item mt-2" aria-current="page" id="${i}">
               <span style="font-size:1.2rem;cursor:pointer" class=" page-link">${i}</span>
               </li>
              `
                document.querySelector('#pagination').innerHTML = output3;

            }



        }
    })
}

$(document).on('click', '.page-item', function(e) {
    var page = $(this).attr('id'); // pairnoume to dynamiko id tou button 
    fetch_user_comments(page);
})


$(document).ready(function() {
    fetch_user_comments('1')
})