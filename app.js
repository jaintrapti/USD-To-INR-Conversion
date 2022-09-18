function convertUsd(){
    let usd = document.getElementById("usd").value;
    let inr = (usd*79.79).toFixed(2)
    document.getElementById("inr").innerHTML = inr;
}