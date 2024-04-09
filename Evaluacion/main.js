/*
Al dar clic sobre la imagen, me lleva al curso.

Al dar clic en Descubre mas, se debe redireccionar a otras opciones de páginas.
*/

function carrousel( id = "card-container", query = ".card-video", time = 2500 ) {
    const cardContainer = document.getElementById( id )
    const cards = document.querySelectorAll(query)
    
    const nCards = cards.length
    let iterN = 0
    setInterval(() => {
        const itemWidth = cards[0].offsetWidth
        cardContainer.scrollLeft += itemWidth
        iterN++
        // console.log( iterN, nCards )
        if( iterN >= nCards ) {
            cardContainer.scrollLeft = 0
            iterN = 0
        }
    }, time)
}


carrousel( "card-container", ".card-video", 3000 )

carrousel( "carrousel", ".cursos-imagenes>a" )