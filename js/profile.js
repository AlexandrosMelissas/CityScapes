$(document).ready(function(){
    $.ajax({
        url: 'profile/fetch_my_profile.php',
        type: 'GET',
        success: function(profile){
         const container = document.querySelector("#my-profile");
         var output = '';
        
 
           output += `
           <h1>Name: ${profile[0].name}</h1>
           <h1>Surname: ${profile[0].surname}</h1>
           <h1>Nickname: ${profile[0].nickname}</h1>
           <h1>Age: ${profile[0].age}</h1>
           <h1>Gender: ${profile[0].gender}</h1>
           `
         
           container.innerHTML = output;
             
        }
    })
})