// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    const height = document.getElementById("spaceShuttleHeight");
    const width = document.getElementById("spaceShuttleWidth");
    const rocket = document.getElementById("rocket");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const status = document.getElementById("flightStatus");

    const takeoff = document.getElementById("takeoff");
    takeoff.addEventListener("click", event => {
        const response1 = window.confirm("Confirm that the shuttle is ready for takeoff."); //2a
        if (response1) {
            status.innerHTML = "Shuttle in flight."                                         //2b
            shuttleBackground.style.background = "blue";                                    //2c
            let move = parseInt(height.innerHTML) + 10000;                                  //2d
            height.innerHTML = move;
            rocket.style.bottom = '10px';
        }
    })

    const land = document.getElementById("landing");
    land.addEventListener("click", event => {
        window.alert("The shuttle is landing. Landing gear engaged.");                      //3a
        status.innerHTML = "The shuttle has landed.";                                       //3b
        shuttleBackground.style.background = "";                                            //3c
        height.innerHTML = 0;                                                               //3d
        rocket.style.left = '250px';                                                        //Bonus #2
        rocket.style.bottom = '0px';
    })

    const abort = document.getElementById("missionAbort");
    abort.addEventListener("click", event => {
        const response2 = window.confirm("Confirm that you want to abort the mission.");    //4a
        if (response2) {
            status.innerHTML = "Mission aborted.";                                          //4b
            shuttleBackground.style.background = "";                                        //4c
            height.innerHTML = 0;                                                           //4d
        }
    })

    rocket.style.position = 'absolute';
    rocket.style.left = '250px';
    rocket.style.bottom = '0px';
    
    const up = document.getElementById("up");
    up.addEventListener("click", event => {
        parseInt(height.innerHTML) + 10000;
        if (height.innerHTML != "250000") {                                                 //Bonus #1
            let move1 = parseInt(rocket.style.bottom) + 10 + 'px';
            rocket.style.bottom = move1;
            height.innerHTML = parseInt(height.innerHTML) + 10000;
        }
    })
    const down = document.getElementById("down");
    down.addEventListener("click", event => {
        parseInt(height.innerHTML) - 10000;
        if (height.innerHTML != "0") {                                                      //Bonus #1
            let move2 = parseInt(rocket.style.bottom) - 10 + 'px';
            rocket.style.bottom = move2;
            height.innerHTML = parseInt(height.innerHTML) - 10000;
        }
    })
    const left = document.getElementById("left");
    left.addEventListener("click", event => {
        parseInt(width.innerHTML) - 10000;
        if (width.innerHTML != "-260000") {                                                 //Bonus #1
            let move3 = parseInt(rocket.style.left) - 10 + 'px';
            rocket.style.left = move3;
            width.innerHTML = parseInt(width.innerHTML) - 10000;
        }
    })
    const right = document.getElementById("right");
    right.addEventListener("click", event => {
        parseInt(width.innerHTML) + 10000;
        if (width.innerHTML != "300000") {                                                  //Bonus #1
            let move4 = parseInt(rocket.style.left) + 10 + 'px';
            rocket.style.left = move4;
            width.innerHTML = parseInt(width.innerHTML) + 10000;
        }
    })
}

window.addEventListener("load", init);