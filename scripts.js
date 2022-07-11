// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    const status = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const height = document.getElementById("spaceShuttleHeight");

    let takeoff = document.getElementById("takeoff");
    takeoff.addEventListener("click", event => {
        window.confirm("Confirm that the shuttle is ready for takeoff.");   //a
        if (true) {
            status.innerHTML = "Shuttle in flight."                         //b
            shuttleBackground.style.background = "blue";                    //c
            height.innerHTML = 10000;                                       //d
        }
    })
}

window.addEventListener("load", init)