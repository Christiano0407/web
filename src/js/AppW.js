const $container = document.querySelector(`#container`)
function renderName(name) {
    $container.textContent.container = `Pokemon encontrado ${name}`
}

function renderType(type){
    console.log(this)
    $container.textContent = `Es de tipo ${type}`
}