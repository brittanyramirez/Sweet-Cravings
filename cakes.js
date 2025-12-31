document.addEventListener("DOMContentLoaded", () => {
  fetch("cakes.json")
    .then(res => res.json())
    .then(data => {
      const cakesContainer = document.getElementById("cakes");

      data.forEach(cake => {
        const cakeCard = document.createElement("div");
        cakeCard.classList.add("cake");

        cakeCard.innerHTML = `
          <img src="${cake.image}" alt="${cake.name}" />
          <h5>${cake.name}</h5>
          <p>Flavor: ${cake.flavor}</p>
          <p>Size: ${cake.size}</p>
          <p class="price">${cake.price}</p>
          <button class="btn">Order Now</button>
        `;

        cakesContainer.appendChild(cakeCard);
      });
    });
});
