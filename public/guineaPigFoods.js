console.log("🥕 Guinea Pig Foods Loaded");

document.addEventListener("DOMContentLoaded", () => {
  const foodData = [
    {
      category: "Safe Foods",
      items: [
        "Timothy hay (unlimited)",
        "Bell peppers (great Vitamin C)",
        "Romaine, red/green leaf lettuce",
        "Cilantro, parsley (occasionally)",
        "Carrots (in moderation)",
        "Zucchini, cucumber"
      ],
      citation:
        "Source: RSPCA Diet Guide — https://www.rspca.org.uk/adviceandwelfare/pets/rodents/guineapigs/diet"
    },
    {
      category: "Foods to Avoid",
      items: [
        "Iceberg lettuce (causes diarrhea)",
        "Potatoes and peels (toxic)",
        "Onions, garlic, chives",
        "Dairy, chocolate, or meat",
        "Bread and processed foods",
        "Spinach/kale (high calcium — rare use only)"
      ],
      citation:
        "Source: PetMD Toxic Food List — https://www.petmd.com/exotic/nutrition/evr_ex_what_not_to_feed_your_guinea_pig"
    }
  ];

  const container = document.getElementById("guineaPigFoods");

  foodData.forEach(section => {
    const div = document.createElement("section");
    div.classList.add("food-section");

    const h2 = document.createElement("h2");
    h2.textContent = section.category;

    const ul = document.createElement("ul");
    section.items.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });

    const cite = document.createElement("small");
    cite.innerHTML = `<a href="${section.citation.split('—').pop().trim()}" target="_blank">${section.citation}</a>`;

    div.appendChild(h2);
    div.appendChild(ul);
    div.appendChild(cite);
    container.appendChild(div);
  });
});