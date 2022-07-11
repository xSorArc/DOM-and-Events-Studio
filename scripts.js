// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    const status = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const height = document.getElementById("spaceShuttleHeight");

    const takeoff = document.getElementById("takeoff");
    takeoff.addEventListener("click", event => {
        window.confirm("Confirm that the shuttle is ready for takeoff.");   //2a
        if (true) {
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
}

window.addEventListener("load", init)