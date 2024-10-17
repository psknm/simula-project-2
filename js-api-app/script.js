// Fetch Tarot Cards

const url = 'https://tarotapi.dev/api/v1/cards/random'
const buttonTarot = document.querySelector('#tarot-button');
const cardBox = document.querySelector('#card-box')

async function getData () {
	try {
	    const response = await fetch (url)
	    const cardList = await response.json();
        const card = cardList.cards[0];
        cardBox.innerHTML = `<h2> Your Tarot Card! </h2><br><br><p><b>Name:</b> ${card.name} </p><br> <p><b>Type:</b> ${card.type} </p><br> <p><b>Description:</b> ${card.desc}</p><br> <p> <b>Meaning:</b> ${card.meaning_up} </p><br> <p> Check out what your card looks like<a href="https://www.tarot.com/tarot/decks/rider" target="_blank">here</a></p></br>`
	} catch (error) {
    console.log("Error: ", error)
	}

}

console.log(getData());

// Show and hide the birth chart generator and tarot card generator

let birthChartShow = document.querySelector('#button-show');
let widgetShow = document.querySelector('#chart-widget-show');

birthChartShow.addEventListener('click', ()=> {
    widgetShow.classList.toggle('reveal');
});

let tarotShow = document.querySelector('#tarot-button');
let randomTarot = document.querySelector('.random-show');

tarotShow.addEventListener('click', ()=> {
    randomTarot.classList.toggle('reveal');
});

// Form API thanks to Web3 Forms :)

const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {

e.preventDefault();

const formData = new FormData(form);
const object = Object.fromEntries(formData);
const json = JSON.stringify(object);
result.innerHTML = "Please wait..."

fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
    .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
            result.innerHTML = "Form submitted successfully";
        } else {
            console.log(response);
            result.innerHTML = json.message;
        }
    })
    .catch(error => {
        console.log(error);
        result.innerHTML = "Something went wrong!";
    })
    .then(function() {
        form.reset();
        setTimeout(() => {
            result.style.display = "none";
        }, 3000);
    });
});

