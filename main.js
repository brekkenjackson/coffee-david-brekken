"use strict"

function renderCoffee(coffee) {
    let html = '<div class="coffee">';
    // html += '' + coffee.id + '';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</tr>';

    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for(let i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}
// coffee roast selection
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data

    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];

    if(selectedRoast !== 'all') {
        coffees.forEach(function (coffee) {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
        });
        tbody.innerHTML = renderCoffees(filteredCoffees);
    } else if (coffees.roast === " "){ // does it match the all? do this
        tbody.innerHTML = renderCoffees(coffees); //show all coffee items
    }
}

//coffee roast user input selection
function updateInputCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data

    let selectedRoast = inputSelection.value.toLowerCase();// standardize input selection
    let filteredCoffees = []; //The bucket

    coffees.forEach(function(coffee) { //
        if(coffee.name.toLowerCase().match(selectedRoast) || coffee.roast.toLowerCase().match(selectedRoast)) {
            filteredCoffees.push(coffee);
        } else if (coffees.roast === " "){
            tbody.innerHTML = renderCoffees(coffees); //show all coffee items
        }else {
            // document.getElementById("error-message").innerHTML =  "Whoops, we could not find your roast"; //show error message
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}



// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];






let tbody = document.querySelector('#coffees');
let submitButton = document.getElementById('roast-selection');
let roastSelection = document.querySelector('#roast-selection');
let inputSelection = document.getElementById('inputSelection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('change', updateCoffees)

inputSelection.addEventListener('keyup', updateInputCoffees);











