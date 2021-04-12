window.odometerOptions = {
    format: '( ddd),dd'
};


function odometer(entries, observer) {
    let test = entries[0];
    if (test.isIntersecting) {
        console.log(entries);
        chiffresCles.classList.add('fade-in');
        chiffresCles.style.visibility = "visible";
        var nombre = document.querySelectorAll('.nombre');
        nombre.forEach(nombre => {
            nombre.style.visibility = "visible"
        });
        nbBoutique.innerHTML = 100;
        nbChiffreAffaire.innerHTML = 80000;
        nbCommande.innerHTML = 2500;
    }

}

var options = {
    threshold: 0.7
}

var observer = new IntersectionObserver(odometer, options);

var chiffresCles = document.querySelector('.chiffresCles');
observer.observe(chiffresCles);


