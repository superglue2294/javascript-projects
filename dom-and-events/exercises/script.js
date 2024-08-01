function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    
    button.addEventListener("click", (e) => {
        paragraph.innerHTML = "Houston, we have liftoff!";
    });

    missionAbort.addEventListener("mouseover", (e) => {
        missionAbort.style.backgroundColor = "red";
    });

    missionAbort.addEventListener("mouseleave", (e) => {
        missionAbort.style.backgroundColor = "";
    });

    missionAbort.addEventListener("click", (e) => {
        let response = window.confirm("Are you sure you want to abort the mission?");
        if (response) {
            paragraph.innerHTML = "Mission aborted! Space shuttle returning home";
        }
    });
}

window.addEventListener("load", init);
