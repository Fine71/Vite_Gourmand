import Route from "./Route.js";

//Définition des routes de l'application

export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/menus", "Menus", "/pages/menus.html"),
    new Route("/details", "Détails", "/pages/menus/details.html", [], "/pages/js/global.js"),
    new Route("/signin", "Connexion", "/pages/auth/signin.html", []),
    new Route("/signup", "Inscription", "/pages/auth/signup.html", [])

]

// Le titre s'affiche comme ceci : Route.titre - websiteName

export const websiteName = "Vite & Gourmand";
