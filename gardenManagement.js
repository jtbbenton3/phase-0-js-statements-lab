const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;

if (temperature > 80) {console.log("Watering on");} 
else {console.log("Watering off");}

// Garden Lights Control
if (timeOfDay === "evening" || timeOfDay === "night") {console.log("Lights on");}
else {console.log("Lights off");}

//Soil Moisture Adjustment 
while (soilMoisture < 40) {soilMoisture += 5; 
    if (soilMoisture > 40) {soilMoisture = 40;}
console.log(soilMoisture);} 


