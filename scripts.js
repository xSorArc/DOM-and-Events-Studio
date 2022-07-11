// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    const status = document.getElementById("flightStatus");

    let takeoff = document.getElementById("takeoff");
    takeoff.addEventListener("click", event => {
        window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (true) {
            status.innerHTML = "Shuttle in flight."
        }
    })
}

window.addEventListener("load", init)