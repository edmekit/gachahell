const search = document.getElementById("searchbtn");
const display = document.getElementById("disp");
const info = document.getElementById("charinfo");
const img = document.getElementById("charimg");
const stats = document.getElementById("charstats");
const team = document.getElementById("charteam");

search.addEventListener("click", function() {
    const searchbar = document.getElementById("searchbar").value.trim().toLowerCase();
    const url = `data/char/${searchbar}.json`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        showChar(data);
    })
    .catch(error => console.error("JSON load failed:", error));
});

function showChar(chardata){

    display.classList.add("open");
    img.innerHTML = `<img src = "${chardata.image}">`

    info.innerHTML = `
    Name: ${chardata.name}<br>
    Element: ${chardata.vision}<br>` 

    stats.innerHTML = `
    HP: ${chardata.recommended.hp}<br>
    ATK: ${chardata.recommended.atk}<br>
    DEF: ${chardata.recommended.def}<br>
    CRIT DMG: ${chardata.recommended.critdmg}<br>
    CRIT RT: ${chardata.recommended.critrt}<br>`

    team.innerHTML = `
    Premium Team: ${chardata.prem.team}<br>
    F2P Team : ${chardata.f2p.team}<br>
    Artifact: ${chardata.recommended.artifact}<br>
    Premium Weapon: ${chardata.prem.weapon}<br>
    F2P Weapon: ${chardata.f2p.weapon}<br>`
 
}