// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    const height = document.getElementById("spaceShuttleHeight");
    const rocket = document.getElementById("rocket");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const status = document.getElementById("flightStatus");

    const takeoff = document.getElementById("takeoff");
    takeoff.addEventListener("click", event => {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");   //2a
        if (response) {
            status.innerHTML = "Shuttle in flight."                         //2b
            shuttleBackground.style.background = "blue";                    //2c
            height.innerHTML = 10000;                                       //2d
        }
    })

    const land = document.getElementById("landing");
    land.addEventListener("click", event => {
        window.alert("The shuttle is landing. Landing gear engaged.");      //3a
        status.innerHTML = "The shuttle has landed.";                       //3b
        shuttleBackground.style.background = "";                            //3c
        height.innerHTML = 0;                                               //3d
    })

    const abort = document.getElementById("missionAbort");
    abort.addEventListener("click", event => {
        window.confirm("Confirm that you want to abort the mission.");      //4a
        if (true) {
            status.innerHTML = "Mission aborted.";                          //4b
            shuttleBackground.style.background = "";                        //4c
            height.innerHTML = 0;                                           //4d
        }
    })
    
    const up = document.getElementById("up");
    up.addEventListener("click", event => {
        height.innerHTML + 10000;
        rocket.style.top + 10;
    })

    const down = document.getElementById("down");
    down.addEventListener("click", event => {
        height.innerHTML - 10000;
        rocket.style.top - 10;
    })

    const left = document.getElementById("left");
    const right = document.getElementById("right");

}

window.addEventListener("load", init)