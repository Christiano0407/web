/* const $container = document.querySelector(`#container`)
function renderName(name) {
    $container.textContent = `Pokemon encontrado ${name}`
}

function renderType(type){
    console.log(this)
    $container.textContent = `Es de tipo ${type}`
} */

/*  renderName(`Pikachu`);  */
/*  renderType(`Electric`);  */

/* 2 Metodo */
/*  const pokemon = {
    $container: document.querySelector(`#container`),

    renderName: function(name) {
        this.$container.textContent = `Pokemon Encontrado ${name}`
    },

    renderType: function(type) {
        this.$container.textContent = `Es de tipo ${type}`
    }
}  */
/* pokemon.renderType(`Bulbasor`); */

/* const renderName = pokemon.renderName 
renderName.apply(pokemon, [`Mew`]); */

/* 3 método */
class API {
    BASE_URL = `https//pokeapi.co/api/v2`
    async fetch(id) {
        const response = await fetch(`${this.BASE_URL} pokemon/${id}`)
        const pokemon = await response.json()
    }
}
/* const api = new API 
api.fetch(25) */


class Pokemon extends API  {
    constructor(id){
     super(id);
     this.id
    }
 $container = document.querySelector(`#container`)
 renderName(name) {
     this.$container.textContent = `Pokemon encontrado ${name}`
 }
 renderType(type) {
    this.$container.textContent = `Es de tipo ${type}`
 }
}
const Pikachu = new Pokemon
Pikachu.renderName(`Pikachu`)