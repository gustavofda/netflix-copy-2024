let botaoSom = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let botao = document.querySelector(".link-info")
let modal = document.querySelector(".modal")
let audio = document.querySelector(".audio")

// Ligar o SOM
botaoSom.addEventListener("click", ligaSom)

function ligaSom() {
    video.muted = !video.muted
}

// Mostrar o MODAL
botao.addEventListener("click", mostrarModal)
modal.addEventListener("click", esconderModal)

function mostrarModal() {
    modal.style.display = "block"
}

function esconderModal() {
    modal.style.display = "none"
}

// Tocar o TUDUM
window.addEventListener("load", tocarAudio)


function tocarAudio() {
    audio.play()
}