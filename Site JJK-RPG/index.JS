var elemenBoxint = document.querySelectorAll('.boxint')

elemenBoxint.forEach(function(persona){
    persona.addEventListener('click', function () {
        persona.classList.toggle('ativa')
    })
})