const char = document.getElementById("furinabtn");
const char2 = document.getElementById("chascabtn");
const display = document.getElementById("char");


fetch("char.json")
.then(response => response.json())
.then(data => {
char.addEventListener("click", () => {
    display.innerHTML = "Name: " + data.furina.name + "<br>Element: " 
    + data.furina.element + "<br> Recommended: <br> " + "Weapon: " + data.furina.bestweapon + "<br> F2P: " + data.furina.f2p + "<br>Aim for: <br> HP: " + data.furina.hp + "<br> Crit Damage: " + data.furina.critdmg + "<br> Crit Rate: " + data.furina.critrt
});
char2.addEventListener("click", () => {
    display.innerHTML = "Name: " + data.chasca.name + "<br>Element: " 
    + data.chasca.element + "<br> Recommended: <br> " + "Weapon: " + data.chasca.bestweapon + "<br> F2P: " + data.chasca.f2p + "<br>Aim for: <br> Atk: " + data.chasca.atk + "<br> Crit Damage: " + data.chasca.critdmg + "<br> Crit Rate: " + data.chasca.critrt
});
})
.catch(error => console.error("JSON load failed:", error));