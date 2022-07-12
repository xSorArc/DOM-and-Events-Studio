// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    const height = document.getElementById("spaceShuttleHeight");
    const rocket = document.getElementById("rocket");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const status = document.getElementById("flightStatus");

    const takeoff = document.getElementById("takeoff");
    takeoff.addEventListener("click", event => {
        let response1 = window.confirm("Confirm that the shuttle is ready for takeoff.");   //2a
        if (response1) {
            status.innerHTML = "Shuttle in flight."                                         //2b
            shuttleBackground.style.background = "blue";                                    //2c
            height.innerHTML = 10000;                                                       //2d
        }
    })

    const land = document.getElementById("landing");
    land.addEventListener("click", event => {
        window.alert("The shuttle is landing. Landing gear engaged.");                      //3a
        status.innerHTML = "The shuttle has landed.";                                       //3b
        shuttleBackground.style.background = "";                                            //3c
        height.innerHTML = 0;                                                               //3d
    })

    const abort = document.getElementById("missionAbort");
    abort.addEventListener("click", event => {
        let response2 = window.confirm("Confirm that you want to abort the mission.");      //4a
        if (response2) {
            status.innerHTML = "Mission aborted.";                                          //4b
            shuttleBackground.style.background = "";                                        //4c
            height.innerHTML = 0;                                                           //4d
        }
    })

    rocket.style.position = 'absolute';
    rocket.style.left = '0px';
    rocket.style.bottom = '0px';
    
    const up = document.getElementById("up");
    up.addEventListener("click", event => {
        //height.innerHTML = 10000; //Fix logic error.
        rocket.style.top += '10px';
    })

    const down = document.getElementById("down");
    down.addEventListener("click", event => {
        //height.innerHTML -= 10000;
        rocket.style.bottom += '10px';
    })

    const left = document.getElementById("left");
    left.addEventListener("click", event => {
        rocket.style.left += '10px';
    })
    const right = document.getElementById("right");
    right.addEventListener("click", event => {
        rocket.style.right += '10px';
    })
}

window.addEventListener("load", init)