function fetch_my_comments(page) {

    var total_pages = '';
    var user_id = '';

    $.ajax({
        url: 'session/get_session.php',
        type: 'GET',
        success: function(session) {
            user_id = session;
        },
        complete: function() {

            $.ajax({
                url: 'other/check_total_pages.php',
                type: 'GET',
                data: { user_id: user_id },
                success: function(pages) {
                    total_pages = pages;
                },
                complete: function() {
                    fetch_my_comments2();
                }
            })

        }
    })


    function fetch_my_comments2() {
        $.ajax({
            url: 'comment/fetch_my_comments.php',
            type: 'GET',
            data: { page: page },
            success: function(comments) {

                if (comments !== null) {

                    const list_my_comments = document.querySelector('#my-comments');
                    let output = '';

                    comments.forEach(function(comment) {

                        output += `
                    <li class="media" id="comment-card">
                    <div class="media-body" id="comment-card">
                        <span class="text-muted pull-right">
                            <small class="text-muted">${comment.date_created}</small>
                        </span>
                     
                        <p> Το σχόλιο σας για την πόλη <a href="#city.php?id=${comment.city_id}"> <strong class="text-success">${comment.name_p} </strong> : </a></p>
                        <p>
                        ${comment.comment_text} 
                        </p>  
                    </div>
                </li>
            `

                        list_my_comments.innerHTML = output;

                    })
                    let output3 = '';
                    for (let i = 1; i <= total_pages; i++) {
                        output3 += `
                   <li class="pagination page-item mt-2" aria-current="page" id="${i}">
                   <span style="font-size:1.2rem;cursor:pointer" class="page-link">${i}</span>
                   </li>
                  `
                        document.querySelector('#pagination1').innerHTML = output3;

                    }
                }
            }
        })
    }
}


$(document).on('click', '.page-item', function() {
    var page = $(this).attr('id');
    fetch_my_comments(page);
})


$(document).ready(function() {
    fetch_my_comments('1')
})




$(document).ready(function() {
    let output = '';
    $.ajax({
        url: 'profile/fetch_my_profile.php',
        type: 'GET',
        success: function(profile) {
            const container = document.querySelector("#my-profile");

            output += `
            <div class="card-body">
                <form class="form" role="form" autocomplete="off">
                    <div class="form-group col">
                        <label class="row-lg-3 row-form-label form-control-label">Όνομα χρήστη</label>
                        <div class="row-lg-9">
                        <input class="form-control" type="text" placeholder="${profile[0].nickname}" readonly>
                        </div>
                    </div>
                    <div class="form-group col">
                        <label class="row-lg-3 row-form-label form-control-label">Όνομα</label>
                        <div class="row-lg-9">
                        <input class="form-control" type="text" placeholder="${profile[0].name}" readonly>
                        </div>
                    </div>
                    <div class="form-group col">
                        <label class="row-lg-3 row-form-label form-control-label">Επίθετο</label>
                        <div class="row-lg-9">
                        <input class="form-control" type="text" placeholder="${profile[0].surname}" readonly>
                        </div>
                    </div>
                    <div class="form-group col">
                        <label class="row-lg-3 row-form-label form-control-label">Email</label>
                        <div class="row-lg-9">
                        <input class="form-control" type="text" placeholder="${profile[0].email}" readonly>
                        </div>
                    </div>
                    <div class="form-group col">
                        <label class="row-lg-3 row-form-label form-control-label">Ηλικία</label>
                        <div class="row-lg-9">
                        <input class="form-control" type="text" placeholder="${profile[0].age}" readonly>
                        </div>
                    </div>
                    <div class="form-group col">
                        <label class="row-lg-3 row-form-label form-control-label">Φύλο</label>
                        <div class="row-lg-9">
                        <input class="form-control" type="text" placeholder="${profile[0].gender}" readonly>
                        </div>
                    </div>
                </form>
            </div>
           `

            container.innerHTML = output;

        }
    })
})