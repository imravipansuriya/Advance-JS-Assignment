document.querySelector("#tip-form").onchange = function(){
    console.log("change")
    let getBillValue = Number(document.getElementById("billTotal").value);
    let getTipValue = document.getElementById("tipInput").value;
    
    let tipDisplay = document.getElementById("tipOutput").innerHTML = getTipValue + "%";

    var tipValue = getBillValue * (getTipValue/100);
    var finalBill = getBillValue + tipValue;

    document.getElementById("tipAmount").value = tipValue;
    document.getElementById("totalBillWithTip").value = finalBill;

    console.log(finalBill)

}

 
 
