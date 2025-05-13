console.log("🏠 Guinea Pig Adoption Guide Loaded");

document.addEventListener("DOMContentLoaded", () => {
  const adoptionContent = [
    {
      title: "Pet Stores: Pros and Cons",
      description:
        "While pet stores offer convenience, guinea pigs sold there are often misgendered or improperly housed, leading to health or breeding issues. Many rescues report that store animals are returned or surrendered later.",
      citation:
        "Source: GuineaDad Blog — https://guineadad.com/blogs/news/should-you-buy-a-guinea-pig-from-a-pet-store"
    },
    {
      title: "Rescue and Shelter Adoption",
      description:
        "Shelters and small animal rescues assess guinea pigs for behavior and health, provide education, and help match personalities. Adoption fees are usually lower and include basic vet checks.",
      citation:
        "Source: ASPCA Adoption Info — https://www.aspca.org/adopt/shelters"
    },
    {
      title: "Important Pre-Adoption Questions",
      description:
        "Do you have enough space for a proper cage? Are you prepared to adopt a pair (guinea pigs are social animals)? Do you have access to an exotic vet? Consider these before adopting.",
      citation:
        "Source: RSPCA Guinea Pig Care — https://www.rspca.org.uk/adviceandwelfare/pets/rodents/guineapigs"
    }
  ];

  const container = document.getElementById("guineaPigAdoption");

  adoptionContent.forEach(section => {
    const div = document.createElement("section");
    div.classList.add("adoption-section");

    const h2 = document.createElement("h2");
    h2.textContent = section.title;

    const p = document.createElement("p");
    p.textContent = section.description;

    const cite = document.createElement("small");
    cite.innerHTML = `<a href="${section.citation.split('—').pop().trim()}" target="_blank">${section.citation}</a>`;

    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(cite);
    container.appendChild(div);
  });
});