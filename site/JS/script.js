var title = document.getElementsByClassName("titre");
var link = document.getElementsByClassName("link");
var img = document.getElementsByClassName("content-image");

for (var i = 0, len = title.length; i < len; i++) {

	let titre;
    let lien;
    let image;

    let random = Math.floor(Math.random() * 14) ;
    switch (random) {
        case 0 :
            titre = "Kanité"; 
            lien = "https://kanite-naturel.com/";
            image = "realisations/kanite.png"
        break;

        case 1 :
            titre = "Hossimo"; 
            lien = "realisations/hossimo.png";
            image = "realisations/hossimo.png"
        break;

        case 2 :
            titre = "Barrere Gautier"; /* projet à supprimer */
            lien = "https://www.demenagement-barrere.fr/";
            image = "realisations/barrere-gautier.png"
        break;

        case 3 :
            titre = "EVS L'oison"; 
            lien = "https://evs-loison.fr/";
            image = "realisations/Loison.png"
        break;

        case 4 :
            titre = "Cheun'apan"; 
            lien = "https://www.cheunapan-education-canine.fr/";
            image = "realisations/cheunapan.png"
        break;
        
        case 5 :
            titre = "Chat"; /* uploader le projet */
            lien = "http://hd-digital.code-experience.fr/";
            image = "realisations/chatbouton.png"
        break;

        case 6 :
            titre = "Crabe & Koala"; /* nouveau site */
            lien = "https://www.crabe-et-koala.com/";
            image = "realisations/crabe-et-koala.png"
        break;

        case 7 :
            titre = "Demouss'Bat"; /* nouveau site */
            lien = "https://www.demoussbat.fr/";
            image = "realisations/demouss-bat.png"
        break;

        case 7 :
            titre = "Demouss'Bat"; /* nouveau site */
            lien = "https://www.demoussbat.fr/";
            image = "realisations/demouss-bat.png"
        break;

        case 8 :
            titre = "Kera voyance";
            lien = "https://kera-voyance.fr/";
            image = "realisations/kera-voyance.png"
        break;

        case 9 :
            titre = "KWmusic"; /* site supprimé  */
            lien = "realisations/kwmusic.png";
            image = "realisations/kwmusic.png";
        break;

        case 9 :
            titre = "Montessori Albi";
            lien = "https://www.grandiravecmontessori.fr/";
            image = "realisations/montessori.png";
        break;

        case 10 :
            titre = "Maquette"; /* travail papier  */
            lien = "realisations/maquetterwf.png";
            image = "realisations/maquetterwf.png";
        break;

        case 11 :
            titre = "Printoo";
            lien = "https://www.printoo.fr/";
            image = "realisations/printoo.png";
        break;

        case 12 :
            titre = "RWF"; /* travail a uploder  */
            lien = "realisations/rwf.png";
            image = "realisations/rwf.png";
        break;

        case 13 :
            titre = "Sully Funéraire"; /* nouveau site */
            lien = "https://pompes-funebres-pezin-chatillon.fr/";
            image = "realisations/sully-funeraire.png";
        break;
    }

    title[i].innerHTML = titre;
    link[i].href = lien;
    img[i].src = image;

}