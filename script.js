const fur = document.getElementById("furinabtn");
const cha = document.getElementById("chascabtn");
const zib = document.getElementById("zibaibtn");
let display = document.getElementById("char");


fetch("char.json")
.then(response => response.json())
.then(data => {
fur.addEventListener("click", () => {
    display.innerHTML = "Name: " + data.furina.name + "<br>Element: " 
    + data.furina.element + "<br> Recommended: <br> " + "Weapon: " + data.furina.bestweapon + "<br> F2P: " + data.furina.f2p + "<br>Aim for: <br> HP: " + data.furina.hp + "<br> Crit Damage: " + data.furina.critdmg + "<br> Crit Rate: " + data.furina.critrt
});
cha.addEventListener("click", () => {
    display.innerHTML = "Name: " + data.chasca.name + "<br>Element: " 
    + data.chasca.element + "<br> Recommended: <br> " + "Weapon: " + data.chasca.bestweapon + "<br> F2P: " + data.chasca.f2p + "<br>Aim for: <br> ATK: " + data.chasca.atk + "<br> Crit Damage: " + data.chasca.critdmg + "<br> Crit Rate: " + data.chasca.critrt
});
zib.addEventListener("click", () => {
    display.innerHTML = "Name: " + data.zibai.name + "<br>Element: "
    + data.zibai.element + "<br> Recommended: <br> " + "Weapon: " + data.zibai.bestweapon + "<br> F2P: " + data.zibai.f2p + "<br>Aim for: <br> DEF: " + data.zibai.def + "<br> Crit Damage: " + data.zibai.critdmg + "<br> Crit Rate: " + data.zibai.critrt
});
})
.catch(error => console.error("JSON load failed:", error));