
const activity = window.location.search.split("?")[1]

function updateActivity(){
 document.querySelector("h1").textContent = `${activity}....with a drink`
}

updateActivity()


// Ellies Code

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
var p = document.querySelector("p");


function getData(id) {
    fetch(url + id)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (myJson) {
            console.log("Made it");
            console.log(myJson);
            makeDiv(myJson);
        });
}

function displayDrink(data) {


    var name = data.drinks[0].strDrink;
    var thumb = data.drinks[0].strDrinkThumb;
    var glass = data.drinks[0].strGlass;
    getIngredMeasure(data);
}

function getIngredMeasure(data) {
    var ingredArray = [checkEmpty(data.drinks[0].strIngredient1), checkEmpty(data.drinks[0].strIngredient2), checkEmpty(data.drinks[0].strIngredient3), checkEmpty(data.drinks[0].strIngredient4), checkEmpty(data.drinks[0].strIngredient5), checkEmpty(data.drinks[0].strIngredient6), checkEmpty(data.drinks[0].strIngredient7), checkEmpty(data.drinks[0].strIngredient8), checkEmpty(data.drinks[0].strIngredient9), checkEmpty(data.drinks[0].strIngredient10), checkEmpty(data.drinks[0].strIngredient11), checkEmpty(data.drinks[0].strIngredient12), checkEmpty(data.drinks[0].strIngredient13), checkEmpty(data.drinks[0].strIngredient14), checkEmpty(data.drinks[0].strIngredient15)];
    console.log(ingredArray.length);
    var measureArray = [checkEmpty(data.drinks[0].strMeasure1), checkEmpty(data.drinks[0].strMeasure2), checkEmpty(data.drinks[0].strMeasure3), checkEmpty(data.drinks[0].strMeasure4), checkEmpty(data.drinks[0].strMeasure5), checkEmpty(data.drinks[0].strMeasure6), checkEmpty(data.drinks[0].strMeasure7), checkEmpty(data.drinks[0].strMeasure8), checkEmpty(data.drinks[0].strMeasure9), checkEmpty(data.drinks[0].strMeasure10), checkEmpty(data.drinks[0].strMeasure11), checkEmpty(data.drinks[0].strMeasure12), checkEmpty(data.drinks[0].strMeasure13), checkEmpty(data.drinks[0].strMeasure14), checkEmpty(data.drinks[0].strMeasure15)];
    var ingredArraySmall = [];
    var measureArraySmall = [];
    for (let i = 0; i < ingredArray.length; i++) {
        if (ingredArray[i] !== "f") {
            ingredArraySmall.push(ingredArray[i]);
        }
    }

    for (let i = 0; i < measureArray.length; i++) {
        if (measureArray[i] !== "f") {
            measureArraySmall.push(measureArray[i]);
        }
    }

    console.log(ingredArraySmall);
    console.log(measureArraySmall);
    let combinedArray = [];
    for (let j = 0; j < ingredArraySmall.length; j++) {
        combinedArray.push(measureArraySmall[j] + " " + ingredArraySmall[j]);
    };
    console.log(combinedArray);
    return combinedArray;
}

function makeDiv(data) {
    var putHere = document.querySelector('#recipe');
    console.log(putHere);
    var div = document.createElement('div');
    var secTop = document.createElement('section');
    var drinkImg = document.createElement('div');
    var name = document.createElement('h3');
    var ingred = getIngredMeasure(data);
    console.log(ingred);
    var ingredList = document.createElement('ul');
    for (let i = 0; i < ingred.length; i++) {
        var li = document.createElement('li');
        li.innerText = ingred[i];
        ingredList.appendChild(li);
    }
    var drinkInfo = document.createElement('div');
    var img = document.createElement('img');
    img.src = data.drinks[0].strDrinkThumb;
    secTop.appendChild(drinkImg);
    drinkImg.appendChild(img);
    secTop.appendChild(drinkInfo);
    var secBot = document.createElement('section');
    name.innerText = data.drinks[0].strDrink;
    secBot.innerText = data.drinks[0].strInstructions;
    secBot.id = "instructions"
    div.appendChild(secTop);
    drinkInfo.appendChild(name);
    drinkInfo.appendChild(ingredList);
    div.appendChild(secBot);
    putHere.appendChild(div);
}



function getDrink(choice1, choice2) {
    event.preventDefault();
    let num = getRandomInt(2);
    console.log(num);
    if (num == 0) {
        console.log(choice1);
        return getData(choice1);
    } else {
        console.log(choice2);
        return getData(choice2);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


function checkEmpty(str) {
    if (str === "" || str === null) {
        return "f";
    } else {
        return str;
    }
}
