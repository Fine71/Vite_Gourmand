import Route from "./Route.js";

//Définition des routes de l'application

export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/menus", "Menus", "/pages/menus.html", []),
    new Route("/signin", "Connexion", "/pages/auth/signin.html", ["disconnected"], "/pages/js/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html", ["disconnected"], "/pages/js/auth/signup.js"),
    new Route("/account", "Mon compte", "/pages/auth/account.html", ["client", "admin", "employé"]),
    new Route("/editPassword", "Modifier le mot de passe", "/pages/auth/editPassword.html", ["client", "admin", "employé"]),
    new Route("/allcommandes", "Mes commandes", "/pages/menus/allcommandes.html", ["client"]),
    new Route("/commander", "Commander", "/pages/menus/commander.html", ["client", "admin", "employé"]),
    new Route("/contact", "Contact", "/pages/contact.html", []),

]

// Le titre s'affiche comme ceci : Route.titre - websiteName

export const websiteName = "Vite & Gourmand";
