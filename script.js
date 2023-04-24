function split(){
    let amount = document.getElementById("amount").value;
    let number = document.getElementById("split").value;


    let split = amount / number;

    document.getElementById("amt").innerText = split;
}