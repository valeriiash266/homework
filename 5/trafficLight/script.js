const delay = ms => new Promise(ok => setTimeout(ok, ms));

async function trafficLight() {
    const redLight = document.getElementById('red');
    const yellowLight = document.getElementById('yellow');
    const greenLight = document.getElementById('green');

    while (true) {
        redLight.style.backgroundColor = 'red';
        yellowLight.style.backgroundColor = '';
        greenLight.style.backgroundColor = '';
        await delay(5000);

        redLight.style.backgroundColor = '';
        yellowLight.style.backgroundColor = 'yellow';
        greenLight.style.backgroundColor = '';
        await delay(2000);

        redLight.style.backgroundColor = '';
        yellowLight.style.backgroundColor = '';
        greenLight.style.backgroundColor = 'green';
        await delay(5000);
    }
}

trafficLight();