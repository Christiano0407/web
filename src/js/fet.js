const $pokemon = document.querySelector(`#pokemon`)
function renderPokemon(image) {
    $pokemon.setAttribute(`src`, image)
}

/* fetch(``, {
    method: `GET`,
    headers: {
        `Content-Type`: `application/json`,
    },
    body: JSON.stringify({
        name: `Chris`
    })
}) */