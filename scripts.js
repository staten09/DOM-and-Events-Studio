// Write your JavaScript code here.

// Remember to pay attention to page loading!
window.addEventListener('load', function () {
    let flightStatus = document.getElementById("flightStatus");
    let bgFlightScreen = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let takeoffButton = document.getElementById("takeoff")
    takeoffButton.addEventListener('click', event => {
    let shuttleReady = window.confirm("Confirm that the shuttle is ready for takeoff.");
    if(shuttleReady){
        flightStatus.innerText = "Shuttle in flight.";
        bgFlightScreen.style.backgroundColor = "blue";
        spaceShuttleHeight.innerText = "10000";
    }
})
})