// gestion theme sombre ou clair
window.onload = () => {
    // recupere la balise link du fichier css
    let themeLink = document.getElementById("theme-link");

    // controle si le localstorage existe
    if (localStorage.theme != null) {
        themeLink.href = `css/style_${localStorage.theme}.css`;
    } else {
        themeLink.href = "css/style_clair.css";
        localStorage.theme = "clair";
    }

    // Ecouteur d'évènement "change" sur le "select theme"
    document.getElementById("theme").addEventListener("change", function () {
        localStorage.theme = this.value;
        themeLink.href = `css/style_${localStorage.theme}.css`;
    });
};
