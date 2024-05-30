const url = 'https://api.rawg.io/api/games?key=a4894ec5ef784cf1af00bd82b9fd0dd1&dates=2022-08-01,2023-12-30&genres=5&platforms=7&ordering=-rating';

function gameCard(game) {
    const { name , background_image } = game;
    console.log(`Game Name: ${name}`);
    console.log(`Game image: ${background_image}`);

    const gameContainer = document.querySelector(".games-container");

    const gamename = document.createElement("h4");
    gamename.textContent = name;

    const game_backgroundimage = document.createElement("img");
    game_backgroundimage.src = background_image;

    const card = document.createElement("div");
    card.classList.add("game-card");

    const a = document.createElement("a");
    a.href = `./pages/detalle.html`;
    a.style.textDecoration = 'none';
    a.style.color = 'inherit'; 

    card.appendChild(game_backgroundimage);
    card.appendChild(gamename);
    a.appendChild(card); 
  
    gameContainer.appendChild(a);

}

async function traerApi() {
    try {
        const response = await fetch(url);
        const data = await response.json(); 
        const results = data.results.slice(0, 9); 

        for (const result of results) {
            const gameResponse = await fetch(`https://api.rawg.io/api/games/${result.id}?key=a4894ec5ef784cf1af00bd82b9fd0dd1`);
            const gameData = await gameResponse.json();
            gameCard(gameData);
            console.log(result); 
        }
    } catch (error) {
        console.error(error);
    }
}

traerApi();