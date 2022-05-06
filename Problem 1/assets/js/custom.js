
const inputDisplay = document.querySelector("#history");
const outputDiaplay = document.querySelector("#result");
const getNumber = document.getElementsByClassName(".number")



function clearAll(value) {
    inputDisplay.value = " "
    outputDiaplay.value = " "
}


function calcValue(value) {
    document.querySelector("#history").value += value;

}





function calculator() {
    var number = [];

    let historyValue = document.querySelector("#history").value;

    if (historyValue.includes("+")) {
        number = historyValue.split("+")
        return parseInt(number[0]) + parseInt(number[1]);





    } else if (historyValue.includes("-")) {
        number = historyValue.split("-")
        return parseInt(number[0]) - parseInt(number[1]);
    } else if (historyValue.includes("/")) {
        number = historyValue.split("/")
        return parseInt(number[0]) / parseInt(number[1]);
    } else if (historyValue.includes("%")) {
        number = historyValue.split("%")
        return parseInt(number[0]) / parseInt(number[1]);
    } else if (historyValue.includes("x")) {
        number = historyValue.split("x")
        return parseInt(number[0]) * parseInt(number[1]);

    } else if (historyValue.includes("back")) {
        // number = number.filter((element, index) => index < number.length - 1);
        return number 
    } else {
        return "0"
    }

}

function equal() {
    var getNumberValue = calculator()

    outputDiaplay.value = getNumberValue
  
}


// class Calculator {
//     constructor(inputDisplay, outputDiaplay){
//         this.inputDisplay = input;
//         this.outputDiaplay = output;
//         this.inputHistory = [];
//     }

//     clearAllHistory(){
//         this.inputHistory = [];
//         this.updateInputDisplay()
//         this.updateOutputDisplay("0")
//     }

//     backspace(){}

//     changePercentToDecimal(){}

//     insertNumber(value){
//         if(this.getLastInputType() === "number"){
//             this.appendToLastInput(value);
//         } else if(this.getLastInputType() === "operator" || this.getLastInputType() === null){
//             this.addNewInput(value, "number");
//         }
//     };

//     insertOperation(value){}

//     negateNumber(){}

//     insertDecimalPoint(){}

//     generateResult(){}

//     getLastInputType(){
//         return (this.inputHistory.length === 0) ? null : this.inputHistory[this.inputHistory.length -1].type;
//     }

//     getLastInputValue(){
//         return (this.inputHistory.length === 0) ? null : this.inputHistory[this.inputHistory.length -1].value;
//     }

//     getAllinputValues(){
//         return this.inputHistory.map(entry => entry.value);
//     }

//     getOutputValue(){
//         return this.updateOutputDisplay.value.replace(/,/g,'');
//     }

//     addNewInput(value, type){
//         this.inputHistory.push({"type": type, "value": value.toString()});
//         this.updateInputDisplay();
//     }

//     appendToLastInput(value){

//     }

//     updateInputDisplay(){
//         this.inputDisplay.value = this.getAllinputValues().join(" ");
//     }


//     updateOutputDisplay(value){
//         this.outputDiaplay.value = Number(value).toLocaleString();
//     }

// }



//  function calcValue(value){

//      if(value <=9 ){
//         // let arrayNum = []
//         let getNumber = document.querySelector("#history").value += value;
//         // arrayNum.push(getNumber)
//         console.log(Number(getNumber))

//      }

// }

// function operator(value){

//     if(value === "+"){
//         let plushNumber =  (document.querySelector("#history").value)+ " " +  value   
//         console.log(plushNumber) 
//     }
//     else if(value === "="){
//         document.querySelector("#result").value += value    
//         console.log((document.querySelector("#history").value))   
//     }
// }





// const calculator = new Calculator(inputDisplay, outputDiaplay);


// allClearButton.addEventListener("click", () => {
//     calculator.clearAllHistory();
// });

// backspaceButton.addEventListener("click", () => {
//     calculator.backspace();
// })

// percentButton.addEventListener("click", () => {
//     calculator.changePercentToDecimal();
// });

// operationButtons.forEach( button => {
//     button.addEventListener("click", (event) =>{
//         let {target} = event;
//         calculator.insertOperation(target.dataset.operator);
//     })
// });

// numberButton.forEach( button => {
//     button.addEventListener("click", (event) =>{
//         let {target} = event;
//         calculator.insertOperation(target.dataset.number);
//     })
// });

// negationButton.addEventListener("click", ()=>{
//     calculator.negateNumber();
// })

// decimalButton.addEventListener("click", () => {
//     calculator.insertDecimalPoint();
// })

// equalsButton.addEventListener("click", () => {
//     calculator.generateResult();
// })