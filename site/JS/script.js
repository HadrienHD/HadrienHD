var title = document.getElementsByClassName("titre");
var link = document.getElementsByClassName("link");
var img = document.getElementsByClassName("content-image");

for (var i = 0, len = title.length; i < len; i++) {

	let titre;
    let lien;
    let image;

    let random = Math.floor(Math.random() * 5) ;
    switch (random) {
        case 0 :
            titre = "kanité"; 
            lien = "hd-digital.code-experience.fr";
            image = "realisations/hossimo.png"
            break;

        case 1 :
            titre = "Hossimo"; 
            lien = "hd-digital.code-experience.fr";
            image = "realisations/chatbouton.png"
            break;

        case 2 :
            titre = "Montessori"; 
            lien = "hd-digital.code-experience.fr";
            image = "realisations/kwmusic.png"
            break;

        case 3 :
            titre = "Loison"; 
            lien = "hd-digital.code-experience.fr";
            image = "realisations/hossimo.png"
            break;

        case 4 :
            titre = "Cheunapan"; 
            lien = "hd-digital.code-experience.fr";
            image = "realisations/crabe-et-koala.png"
            break;
    }

    title[i].innerHTML = titre;
    link[i].href = link;
    img[i].src = image;

}