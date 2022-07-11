// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    const status = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const height = document.getElementById("spaceShuttleHeight");

    let takeoff = document.getElementById("takeoff");
    takeoff.addEventListener("click", event => {
        window.confirm("Confirm that the shuttle is ready for takeoff.");   //2a
        if (true) {
            status.innerHTML = "Shuttle in flight."                         //2b
            shuttleBackground.style.background = "blue";                    //2c
            height.innerHTML = 10000;                                       //2d
        }
    })
    
    let land = document.getElementById("landing");
    land.addEventListener("click", event => {
        window.alert("The shuttle is landing. Landing gear engaged.");      //3a
        status.innerHTML = "The shuttle has landed.";                       //3b
        shuttleBackground.style.background = "";                            //3c
        height.innerHTML = 0;                                               //3d
    })
}

window.addEventListener("load", init)