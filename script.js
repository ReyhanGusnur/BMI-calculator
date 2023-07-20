var heightInput = document.querySelector(".height-input-field");
var weightInput = document.querySelector(".weight-input-field");
var calculateButton = document.querySelector(".calculate");
var result = document.querySelector(".result");
var statement = document.querySelector(".result-statement");
var BMI, height, weight;

function validateForm() {
    let x = document.forms["heightInput"]["weightInput"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }


calculateButton.addEventListener("click", ()=>{
    
    height = heightInput.value/100;
    weight = weightInput.value;
    BMI = weight/(height**2); 
    result.innerText = "hasil anda BMI " + BMI.toFixed(1);

    if(BMI < 18.5){
        statement.innerText = "Anda kekurangan berat badan";    
    }else if((BMI > 18.5) && (BMI <= 24.9)){
        statement.innerText = "Anda memiliki berat badan ideal";
    }else if((BMI >= 25) && (BMI <= 29.9 )){
        statement.innerText = "Anda memiliki berat badan berlebih";
    }else if(BMI > 30){
        statement.innerText = "Anda obesitas";
    }

});

