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

When the "Land" button is clicked, the following should happen:
A window alert should let the user know "The shuttle is landing. Landing gear engaged."
The flight status should change to "The shuttle has landed."
The background color of the shuttle flight screen should change from blue to green.
The shuttle height should go down to 0.

let landButton = document.getElementById("landing");
landButton.addEventListener('click', function () {
    let shuttleLanding = window.alert("The shuttle is landing. Landing gear engaged.")
    let flightStatus = document.getElementById("flightStatus");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let bgFlightScreen = document.getElementById("shuttleBackground");
    if(shuttleLanding){
        flightStatus.innerText = "The shuttle has landed.";
        bgFlightScreen.style.backgroundColor = "green";
        spaceShuttleHeight.innerText = "0";
    }

})


})