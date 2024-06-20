// Initialize Variables below

let date = "Monday 2019-03-18"
let time = "10:05:34 AM"
let astronautCount = 7
let astronautStatus = "ready"
let averageAstronautMassKg = 80.7
let crewMassKg = astronautCount * averageAstronautMassKg
let fuelMassKg = 760000
let shuttleMassKg = 74842.31
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg
let maximumMassLimit = 850000
let fuelTempCelsius = -225
let minimumFuelTemp = -300
let maximumFuelTemp	= -150
let fuelLevel = 100
let weatherStatus = "clear"
let preparedForLiftOff = true

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

// add logic below to verify all astronauts are ready

// add logic below to verify the total mass does not exceed the maximum limit of 850000

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

// add logic below to verify the fuel level is at 100%

// add logic below to verify the weather status is clear

// Verify shuttle launch can proceed based on above conditions

if ((astronautCount <= 7) && (astronautStatus === 'ready') && (totalMassKg < maximumMassLimit) && (fuelTempCelsius >= minimumFuelTemp || fuelTempCelsius <= maximumFuelTemp) && (fuelLevel === 100) && (weatherStatus === 'clear')) {
    console.log(
        "All systems are a go! Initiating space shuttle launch sequence.\n" + 
        "----------------------------------------------------------------\n" + 
        "Date: " + date + "\n" +
        "Time: " + time + "\n" + 
        "Astronaught Count: " + astronautCount + "\n" +
        "Crew Mass: " + crewMassKg + " kg\n" +
        "Fuel Mass: " + fuelMassKg + " kg\n" +
        "Shuttle Mass: " + shuttleMassKg + " kg\n" + 
        "Total Mass: " + totalMassKg + " kg\n" + 
        "Fuel Temperature: " + fuelTempCelsius + " °C\n" + 
        "Weather Status: " + weatherStatus + "\n" + 
        "----------------------------------------------------------------\n" + 
        "Have a safe trip astronauts!"
    );
}

