const panels = document.querySelectorAll('.pl')

panels.forEach((pl) => {
    pl.addEventListener('click', () => {
        removeActiveClasses()
        pl.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(pl => {
        pl.classList.remove('active')
    })
}




