const Bulb = document.getElementById("Bulb");
const togglebtn= document.getElementById("togglebtn");
let ison = false;
function toggleBulb() {ison = !ison;
    if (ison){
        Bulb.src ="https://www.w3schools.com/js/pic_bulbon.gif";
        togglebtn.textContent = "Turn off";
    }
     else{
        Bulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";
        togglebtn.textContent = "Turn on";
    }
}