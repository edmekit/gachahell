const fur = document.getElementById("furinabtn");
const cha = document.getElementById("chascabtn");
const zib = document.getElementById("zibaibtn");
let info = document.getElementById("charinfo");
let image = document.getElementById("charimg");
let stats = document.getElementById("stats");


fetch("char.json")
.then(response => response.json())
.then(data => {
fur.addEventListener("click", () => {
    showChar(data.furina);
});
cha.addEventListener("click", () => {
    showChar(data.chasca);
});
zib.addEventListener("click", () => {
    showChar(data.zibai);
});
})
.catch(error => console.error("JSON load failed:", error));

function showChar(chardata){

    stats.classList.add("open");
    image.innerHTML = `<img src = "${chardata.image}">`;
    info.innerHTML = `
    Name: ${chardata.name}<br>
    Element: ${chardata.element}<br> 
    Recommended: <br>
    Weapon: ${chardata.bestweapon}<br> 
    F2P: ${chardata.f2p}<br>`
    
}