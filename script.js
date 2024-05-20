const url = 'https://api.rawg.io/api/games?key=a4894ec5ef784cf1af00bd82b9fd0dd1&dates=2022-01-01,2024-01-30&platforms=7&ordering=-rating';

function gameCard(game) {
    const { name , background_image } = game;
    console.log(`Game Name: ${name}`);
    console.log(`Game image: ${background_image}`);

    const gameContainer = document.querySelector(".games-container");
    const gamename = document.createElement("h2");
    gamename.textContent = name;

    const game_backgroundimage = document.createElement("img");
    game_backgroundimage.src = background_image;

    const card = document.createElement("div");
    card.classList.add("game-card");

    
    card.appendChild(game_backgroundimage);
    card.appendChild(gamename);
  
        gameContainer.appendChild(card);
    // Implementa la lógica para crear una tarjeta de juego


}

async function traerApi() {
    try {
        const response = await fetch(url);
        const data = await response.json(); // Convertir la respuesta a JSON
        const results = data.results; // Asegúrate de acceder a la propiedad correcta

        for (const result of results) {
            const gameResponse = await fetch(`https://api.rawg.io/api/games/${result.id}?key=a4894ec5ef784cf1af00bd82b9fd0dd1`);
            const gameData = await gameResponse.json();
            gameCard(gameData);
            console.log(result); // Imprimir cada resultado
        }
    } catch (error) {
        console.error(error);
    }
}

traerApi();