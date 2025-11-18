function scrollCarrossel(direcao) {
    const galeria = document.querySelector('.galeria-fotos');
    const scrollAmount = 210;

    if (direcao === 1) {
        galeria.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else {
        galeria.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
}