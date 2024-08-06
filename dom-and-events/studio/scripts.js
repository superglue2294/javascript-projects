// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener('load', () => {
    const rocket = document.getElementById('rocket');

    const liftOffBtn = document.getElementById('takeoff');
    const landBtn = document.getElementById('landing');
    const abortBtn = document.getElementById('missionAbort');

    const upButton = document.getElementById('up');
    const downButton = document.getElementById('down');
    const rightButton = document.getElementById('right');
    const leftButton = document.getElementById('left');

    const flightStat = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const shuttleHeight = document.getElementById('spaceShuttleHeight');

    liftOffBtn.addEventListener('click', function (e) {
        let response = window.confirm('Confirm that the shuttle is ready for takeoff.');

        if (response) {
            flightStat.innerHTML = 'Shuttle in flight.';
            shuttleBackground.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = 10000;
        }
    })

    landBtn.addEventListener('click', e => {
        window.alert('The shuttle is landing. Landing gear engaged.');

        flightStat.innerHTML = 'The shuttle has landed';
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;
        rocket.style.top = '50%';
        rocket.style.left = '50%';
    })

    abortBtn.addEventListener('click', e => {
        let response = window.confirm('Confirm that you want to abort the mission.');

        if (response) {
            flightStat.innerHTML = 'Mission aborted.';
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;
            rocket.style.top = '50%';
            rocket.style.left = '50%';
        }
    })

    upButton.addEventListener('click', function () {
        moveRocket(0, -10);
        shuttleHeight.innerText = parseInt(shuttleHeight.innerText) + 10000;
    });
    downButton.addEventListener('click', function () {
        moveRocket(0, 10);
        shuttleHeight.innerText = parseInt(shuttleHeight.innerText) - 10000;
        if (shuttleHeight <= 0) {
            shuttleHeight.innerHTML = 0;
        }
    });
    leftButton.addEventListener('click', function () {
        moveRocket(-10, 0);
    });
    rightButton.addEventListener('click', function () {
        moveRocket(10, 0);
    });
    function moveRocket(dx, dy) {
        let left = parseInt(rocket.style.left.replace('px', '')) + dx;
        let top = parseInt(rocket.style.top.replace('px', '')) + dy;
        rocket.style.paddingLeft = `${left}px`;
        rocket.style.paddingTop = `${top}px`;
    }

})