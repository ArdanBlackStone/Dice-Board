function GetCurDate() {
    const curDate = new Date();
    var curDay = curDate.getDate();
    var curMonth = curDate.getMonth() +1;
    var curYear = curDate.getFullYear();
    var curHour = curDate.getHours();
    var curMintute = curDate.getMinutes();
    document.getElementById("day").innerHTML = curDay + "/" + curMonth + "/" 
                                                + curYear + " at " +  curHour
                                                + ":" + curMintute ;
}
window.onload = GetCurDate();
function RandomDiceRolls() { 
    setTimeout(function () { 
        var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
        var randomNumber2 = Math.floor(Math.random() * 6) + 1; 
        var totalDice = randomNumber1 + randomNumber2;

        document.querySelector(".dice1").setAttribute("src", 
            "dice-" + randomNumber1 + ".svg"); 

        document.querySelector(".dice2").setAttribute("src", 
            "dice-" + randomNumber2 + ".svg"); 

        document.getElementById("total").innerHTML = totalDice;

        if (totalDice <= 8) {
            document.querySelector("h3").innerHTML = "You didn't win: Try Again!";
        } else{
            document.querySelector("h3").innerHTML = "You Win: Try Again!";
        }
    }, 1000);
}