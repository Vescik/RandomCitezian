const ul = document.querySelector('.person');
let name = document.querySelector('.name').innerHTML;
const url = 'https://randomuser.me/api/?results=1';



fetch(url)
    .then((resp) => resp.json()) 
    .then(function(data){
        document.querySelector('.name').innerHTML = data.results[0].name.first + ' ' + data.results[0].name.last;
        document.querySelector('.city').innerHTML = data.results[0].location.city + ', ' + data.results[0].location.state + ', ' + data.results[0].location.postcode;
        document.querySelector('.mail').innerHTML = data.results[0].email;
        document.querySelector('.phone').innerHTML = data.results[0].phone;
        document.querySelector('.photo').src=data.results[0].picture.large
        console.log(data.results)
    });
    