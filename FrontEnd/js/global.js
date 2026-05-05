const menus = [
  {
    id: 1,
    titre: "Menu Gourmet",
    description: "Menu raffiné pour événements",
    minPersonnes: 10,
    prix: 35,
    image: "menu1.jpg"
  },
  {
    id: 2,
    titre: "Menu Classique",
    description: "Simple et efficace",
    minPersonnes: 5,
    prix: 20,
    image: "menu2.jpg"
  },
  {
    id: 3,
    titre: "Menu Économique",
    description: "Un menu abordable pour les petits budgets, sans compromis sur la qualité.",
    minPersonnes: 5,
    prix: 10,
    image: "menu3.jpg"
  }
];

const container = document.querySelector(".row");

menus.forEach(menu => {
  container.innerHTML += `
    <div class="col-md-4">
      <div class="card h-100">
        <img src="${menu.image}" class="card-img-top">
        <div class="card-body">
          <h5>${menu.titre}</h5>
          <p>${menu.description}</p>
          <p><strong>Min :</strong> ${menu.minPersonnes}</p>
          <p><strong>Prix :</strong> ${menu.prix}€</p>
          <a href="menu-detail.html?id=${menu.id}" class="btn btn-primary">
            Voir détail
          </a>
        </div>
      </div>
    </div>
  `;
});

