function submitForm() {
    const name = document.getElementById('user-name').value;
    const mood = document.getElementById('user-mood').value;
    const favoriteNumber = Math.abs(Math.round(document.getElementById('favorite-number').value));

    const companyName = "Philanthropic Galapagos Tortoise";
    const greeting = `${companyName} welcomes you, ${name}! We're glad you are doing ${mood}!`;
    document.getElementById('greeting-message').textContent = greeting;

    const polygons = {
        0: 'No sides!',
        1: 'Monogon',
        2: 'Digon',
        3: 'Trigon',
        4: 'Tetragon',
        5: 'Pentagon',
        6: 'Hexagon',
        7: 'Heptagon',
        8: 'Octagon',
        9: 'Nonagon',
        10: 'Decagon'
    };

    const polygonName = polygons[favoriteNumber] || 'Unknown';
    alert(`A shape with ${favoriteNumber} sides is called a ${polygonName}`);
}


function calculateTortoiseAge() {
    const humanYears = prompt("Enter the number of human years:");
    const tortoiseYears = humanYears * 5;
    alert(`A tortoise of ${humanYears} human years would be about ${tortoiseYears} tortoise years!`);
}

function getTortoiseSpeed() {
    alert("A Galapagos tortoise moves at a speed of 0.2 mph!");
}

function randomTortoiseBehavior() {
    const behaviors = ["Sleeping", "Eating", "Basking in the sun", "Slowly walking"];
    const randomBehavior = behaviors[Math.floor(Math.random() * behaviors.length)];
    alert(`The tortoise is ${randomBehavior} right now.`);
}

function offerTortoiseFood() {
    alert("You offered the tortoise some lettuce. It's happy!");
}

document.addEventListener('DOMContentLoaded', function () {
    const submitFormButton = document.getElementById('submit-form-button');
    const calculateAgeButton = document.getElementById('calculate-age-button');
    const getSpeedButton = document.getElementById('get-speed-button');
    const randomBehaviorButton = document.getElementById('random-behavior-button');
    const offerFoodButton = document.getElementById('offer-food-button');
    const dateElement = document.getElementById('current-date-time');
    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const formattedDate = `Today is ${now.toLocaleTimeString()} on ${days[now.getDay()]}, ${now.toLocaleDateString()}`;
    dateElement.textContent = formattedDate;

    submitFormButton.addEventListener('click', submitForm);
    calculateAgeButton.addEventListener('click', calculateTortoiseAge);
    getSpeedButton.addEventListener('click', getTortoiseSpeed);
    randomBehaviorButton.addEventListener('click', randomTortoiseBehavior);
    offerFoodButton.addEventListener('click', offerTortoiseFood);
});