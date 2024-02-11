const delay = ms => new Promise(ok => setTimeout(ok, ms));

async function pedestrianTrafficLight() {
    const redLight = document.getElementById('red');
    const greenLight = document.getElementById('green');
    const pedestrianButton = document.getElementById('pedestrian-button');

    while (true) {
        redLight.style.backgroundColor = 'red';
        greenLight.style.backgroundColor = '';
        await delay(5000);

        redLight.style.backgroundColor = '';
        greenLight.style.backgroundColor = 'green';
        await delay(5000);

        // Enable pedestrian crossing for 10 seconds
        pedestrianButton.disabled = false;
        await delay(10000);
        pedestrianButton.disabled = true;
    }
}

pedestrianTrafficLight();

const pedestrianButton = document.getElementById('pedestrian-button');
pedestrianButton.addEventListener('click', () => {
    const redLight = document.getElementById('red');
    const greenLight = document.getElementById('green');
    redLight.style.backgroundColor = 'red';
    greenLight.style.backgroundColor = '';
    setTimeout(() => {
        redLight.style.backgroundColor = '';
        greenLight.style.backgroundColor = 'green';
    }, 2000);
});