window.odometerOptions = {
    format: '( ddd),dd'
};

function odometer(entries, observer) {
    let test = entries[0]
    if (test.isIntersecting) {
        console.log(entries);
        nbBoutique.innerHTML = 100;
        nbChiffreAffaire.innerHTML = 80000;
        nbCommande.innerHTML = 2500;
    }

}

var options = {
    threshold: 0.7
}

let observer = new IntersectionObserver(odometer, options);

let chiffresCles = document.querySelector('.chiffresCles');
observer.observe(chiffresCles);