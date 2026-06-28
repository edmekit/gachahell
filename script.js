const search = document.getElementById("searchbtn");
const stats = document.getElementById("stats");
const info = document.getElementById("charinfo");

search.addEventListener("click", function() {
    const searchbar = document.getElementById("searchbar").value.trim();
    const url = `https://gsi.fly.dev/characters/search?name=${searchbar}`;

        fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        showChar(data.results[0]);
    })
    .catch(error => console.error("JSON load failed:", error));
});



function showChar(chardata){

    stats.classList.add("open");
    info.innerHTML = `
    Name: ${chardata.name}<br>
    Element: ${chardata.vision}<br> 
    Recommended: <br>
    Weapon: ${chardata.weapon}<br> 
    F2P: ${chardata.rarity}<br>`
    
}