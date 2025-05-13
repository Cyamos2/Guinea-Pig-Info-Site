console.log("🧼 Guinea Pig Care Loaded");

document.addEventListener("DOMContentLoaded", () => {
  const careSections = [
    {
      title: "Housing",
      description:
        "Guinea pigs need a large cage (minimum 7.5 sq ft for two) with good ventilation and solid flooring. Avoid wire floors. Add hiding spaces, soft bedding like fleece liners or paper-based litter, and place the cage in a quiet but social area.",
      citation:
        "Source: Humane Society of the United States — https://www.humanesociety.org/resources/how-care-guinea-pig"
    },
    {
      title: "Feeding",
      description:
        "A healthy diet consists of unlimited timothy hay, 1 cup of fresh vegetables per day (bell peppers, leafy greens), and high-quality pellets with stabilized Vitamin C. Fresh water must always be available.",
      citation:
        "Source: RSPCA Guinea Pig Diet Guide — https://www.rspca.org.uk/adviceandwelfare/pets/rodents/guineapigs/diet"
    },
    {
      title: "Grooming",
      description:
        "Short-haired guinea pigs require less grooming, but all guinea pigs benefit from occasional brushing and regular nail trimming. Check for signs of mites or skin irritation regularly.",
      citation:
        "Source: PetMD — https://www.petmd.com/exotic/general-health/how-groom-your-guinea-pig"
    },
    {
      title: "Veterinary Care",
      description:
        "Guinea pigs are exotic pets and should see a vet experienced in small mammals. Annual checkups, teeth checks, and immediate care for weight loss, lethargy, or breathing issues are crucial.",
      citation:
        "Source: VCA Animal Hospitals — https://vcahospitals.com/know-your-pet/guinea-pigs-routine-care"
    }
  ];

  const container = document.getElementById("guineaPigCare");

  careSections.forEach(section => {
    const div = document.createElement("section");
    div.classList.add("care-section");

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