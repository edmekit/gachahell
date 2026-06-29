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
        console.log(data);
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
    HP: ${chardata.hp}<br>
    ATK: ${chardata.atk}<br>
    DEF: ${chardata.def}<br>
    CRIT DMG: ${chardata.critdmg}<br>
    CRIT RT: ${chardata.critrt}<br>`

    team.innerHTML = `
    Team: ${chardata.team}<br>
    Artifact: ${chardata.artifact}<br>
    Weapon: ${chardata.weapon}<br>
    F2P: ${chardata.f2p}<br>`
 
}