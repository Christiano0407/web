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
    BASE_URL = `https://pokeapi.co/api/v2/`
    async fetch(id) {
        const searchId = id || this.id
        const response = await fetch(`${this.BASE_URL}pokemon/${searchId}`)
        const pokemon = await response.json()
        this.pokemon = pokemon
        return pokemon
    }
} 

/* const api = new API 
api.fetch(25) 
.then((data) => {
   $container.textContent = data.name
}) */

 class Pokemon extends API  {
    constructor(id){
     super(id);
     this.id = id
    }
 $container = document.querySelector(`#container`)
 renderName() {
     this.$container.textContent = `Pokemon encontrado ${this.pokemon.name}`
 }
 renderType(type) {
    this.$container.textContent = `Es de tipo ${this.pokemon.types[0].type.name}`
 }
} 

/*  const Pikachu = new Pokemon
Pikachu.renderName(`Pikachu`)  */
const pokemon = new Pokemon(25)
pokemon.fetch()
.then(() => {
pokemon.renderName()
pokemon.renderType()
})