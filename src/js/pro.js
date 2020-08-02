const $pokemon = document.querySelector(`#pokemon`)
const $message = document.querySelector(`#message`)
function renderPokemon(image) {
    $pokemon.setAttribute(`src`, image)
}
function renderMessage(message) {
    $message.textContent = message
}

fetch(`https://pokeapi.co/api/v2/pokemon/25`)
.then(response => response.json())
.then(pokemon => {
    renderPokemon(pokemon.sprites.front_default)
})
.catch(() => { renderMessage('Pokemon no encontrado :(') } )

/* ejem-Callback */
 // const compras = []
    // function irDeCompras() {
    //   console.log('Es un bonito día para ir a mercar, vayamos primero por las Frutas')
    //   // Frutas
    //   setTimeout(() => {
    //     compras.push('frutas')
    //     console.log('tengo las frutas, puedo ir por las verduras')
    //     // Verduras
    //     setTimeout(() => {
    //       compras.push('verduras')
    //       console.log('Tengo las verduras, puedo ir por la carne')
    //       // Carne
    //       setTimeout(() => {
    //         compras.push('carne')
    //         console.log('Tengo la carne, vamos a por los granos')
    //         // Granos
    //         setTimeout(() => {
    //           compras.push('granos')
    //           console.log('Tengo los granos, es todo vamos a la caja')
    //           // Fila para pagar
    //           setTimeout(() => {
    //             compras.push('fila')
    //             console.log('Terminé de hacer la fila, es mi turno')
    //             // Pagar
    //             setTimeout(() => {
    //               compras.push('pagado')
    //               console.log(compras)
    //               console.log('He pagado, puedo ir a casa! 🏠')
    //             }, 2000)
    //           }, 2000)
    //         }, 2000)
    //       }, 2000)
    //     }, 2000)
    //   }, 2000)
    // }
    // irDeCompras()
    // console.log(compras) 

   /*  Promesas */

   const shopping = new Promise ((resolve, reject) => {
    console.log('Es un bonito día para ir a mercar, vayamos primero por las Frutas')
    // Frutas
    setTimeout(() => {
     compras.push('frutas')
      console.log('tengo las frutas, puedo ir por las verduras')
      // Verduras
      setTimeout(() => {
        compras.push('verduras')
        console.log('Tengo las verduras, puedo ir por la carne')
        // Carne
        setTimeout(() => {
          compras.push('carne')
          console.log('Tengo la carne, vamos a por los granos')
          // Granos
          setTimeout(() => {
            compras.push('granos')
            console.log('Tengo los granos, es todo vamos a la caja')
          // Fila para pagar
            setTimeout(() => {
              compras.push('fila')
              console.log('Terminé de hacer la fila, es mi turno')
              // Pagar
              setTimeout(() => {
                compras.push('pagado')
                console.log(compras)
                resolve(compras)
                console.log('He pagado, puedo ir a casa! 🏠')
              }, 2000)
            }, 2000)
          }, 2000)
        }, 2000)
      }, 2000)
    }, 2000)
   })
   shopping.then((data) => {
       renderMessage(data.toString())
   })
   .catch((message) => {
       renderMessage(message)
   })
   const compras = []

/* 
 const compras = []
     function irDeCompras() {
     
     }
     irDeCompras() */
    // console.log(compras)