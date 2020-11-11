// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// JavaScript
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//TODO
import {foods} from './foods'

let fetaured_food = document.querySelector('.featured');
for(let f of foods){
    let food_thumb = document.getElementById('f' + f.id)
    food_thumb.innerHTML = `
        <img src="${f.poster}">
    `

    food_thumb.onclick = function(){
        selectFood(f)
    }
}

function selectFood(f){
    fetaured_food.innerHTML = `
    <img src="${f.poster}">
    <h1>${f.title}</h1>
    <p>${f.plot}</p> `
}

/*function searchFoods(event){
    if(event) {
        event.preventDefault()
    }

    let input = document.querySelector('[type="search"]').value || ""
    for( let f of foods){
        let food_thumb = document.getElementById('f' + f.id)

        if(f.title.toUpperCase().indexOf(input.toUpperCase()) == -1){
            //foods.thumb.classList.add('hidden')
            food_thumb.style.display = 'none'
        } else {
            //foods.thumb.classList.remove('hidden')
            food_thumb.style.display = 'block'

        }
    }
}
document.querySelector('button').onclick = searchFoods
document.querySelector('[type="search"]').onsearch = searchFood //search on enter key
document.forms[0].addEventListener('submit', searchFoods, false)*/