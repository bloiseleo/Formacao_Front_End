"use strict";

const teclas = document.querySelectorAll(".tecla")

teclas.forEach(tecla => {
    const classOfTecla = tecla.classList
    const nomeTecla = classOfTecla[1];
    const idSom = `#som_${nomeTecla}`
    const audioElement = document.querySelector(idSom)
    tecla.addEventListener('click', () => audioElement.play())
})