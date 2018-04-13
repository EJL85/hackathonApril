const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=15200";
var p = document.querySelector("p");


fetch(url)
.then(function(response) {
    console.log(response);
    return response.json();
})
.then(function(myJson) {
    console.log(myJson);
    p.innerText = myJson;
});

// function getDrink