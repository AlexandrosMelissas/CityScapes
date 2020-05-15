$(document).ready(function() {

    $.ajax({
        url: 'city/fetch_cities.php',
        type: 'GET',
        success: function(data) {
            const container = document.querySelector("#cities");
            var output = '';
            data.forEach(function(city) {


                output += `
                <div class="card-container mt-2">
                <div class="card" style="width: 260px; height: 400px">
                <img style="height:200px;" src="${city.city_image_url}.jpg" class="card-img-top p-1 img-fluid" alt="...">
                <div class="card-body">
                <a class="text-info" href="#city.php?id=${city.city_id}"><h5 class="card-title">${city.name_p}</h5></a>
                <p class="card-text">Νομός: ${city.nomos}</p>
                <div class="card-footer">
                <i class="fa fa-thumbs-up"></i><span style="margin-left:7px" id="like_number" >${city.likes}</span></br>
                <i class="fa fa-comments pt-2"></i><span  style="margin-left:7px" id="comment_number">${city.comments}</span>
                </div>
                </div>
                </div>
                </div>
                `

                container.innerHTML = output;


            })

        }
    })

})


document.querySelector('#city-search').addEventListener('keyup', function() {

    const query = document.querySelector('#city-search').value;


    $.ajax({
        url: 'city/search_cities.php',
        type: 'GET',
        data: { search: query },
        success: function(cities) {
            const cities_container = document.querySelector('#cities');

            let output = '';
            cities.forEach(function(city) {

                output += `
                <div class=" pt-2">
                <div class="card" style="width: 260px; height: 400px">
                <img style="height:200px;" src="${city.city_image_url}.jpg" class="card-img-top p-1 img-fluid" alt="...">
                <div class="card-body">
                <a class="text-info" href="#city.php?id=${city.city_id}"><h5 class="card-title">${city.name_p}</h5></a>
                <p class="card-text">Νομός: ${city.nomos}</p>
                <div class="card-footer">
                <i class="fa fa-thumbs-up"></i><span style="margin-left:7px" id="like_number" >${city.likes}</span></br>
                <i class="fa fa-comments pt-2"></i><span style="margin-left:7px" id="comment_number">${city.comments}</span>
                </div>
                </div>
                </div>
                </div>
                `

                cities_container.innerHTML = output;

            })
        },
        error: function() {

            cities.innerHTML = `<h3>Δεν βρέθηκε καμία πόλη με αυτό το όνομα</h3>`;

        }


    })
})



$('.sub-menu li').on('click', function(e) {
    const nomos = e.target.textContent;

    $.ajax({
        url: 'city/fetch_cities_by_nomous.php',
        type: 'GET',
        data: { nomos: nomos },
        success: function(data) {
            const container = document.querySelector("#cities");
            var output = '';
            data.forEach(function(city) {

                output += `
                <div class=" pt-2">
                <div class="card" style="width: 260px; height: 400px">
                <img style="height:200px;" src="${city.city_image_url}.jpg" class="card-img-top p-1 img-fluid" alt="...">
                <div class="card-body">
                <a class="text-info" href="#city.php?id=${city.city_id}"><h5 class="card-title">${city.name_p}</h5></a>
                <p class="card-text">Νομός: ${city.nomos}</p>
                <div class="card-footer">
                <i class="fa fa-thumbs-up"></i><span style="margin-left:7px" id="like_number" >${city.likes}</span></br>
                <i class="fa fa-comments pt2"></i><span style="margin-left:7px" id="comment_number">${city.comments}</span>
                </div>
                </div>
                </div>
                </div>
                `

                container.innerHTML = output;


            })

        }
    })
})



$('#popular').on('click', function() {

    $.ajax({
        url: 'city/fetch_cities.php',
        type: 'GET',
        success: function(data) {
            const container = document.querySelector("#cities");
            var output = '';
            data.forEach(function(city) {

                output += `
                <div class="card-container pt-2">
                <div class="card" style="width: 260px; height: 400px">
                <img style="height:200px;" src="${city.city_image_url}.jpg" class="card-img-top p-1 img-fluid" alt="...">
                <div class="card-body">
                <a class="text-info" href="#city.php?id=${city.city_id}"><h5 class="card-title">${city.name_p}</h5></a>
                <p class="card-text">Νομός: ${city.nomos}</p>
                <div class="card-footer">
                <i class="fa fa-thumbs-up"></i><span style="margin-left:7px" id="like_number" >${city.likes}</span></br>
                <i class="fa fa-comments pt-2"></i><span style="margin-left:7px" id="comment_number">${city.comments}</span>
                </div>
                </div>
                </div>
                </div>
                `

                container.innerHTML = output;


            })

        }
    })
})