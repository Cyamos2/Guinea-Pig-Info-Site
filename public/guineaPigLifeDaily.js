console.log("🧸 Guinea Pig Daily Life Loaded");

document.addEventListener("DOMContentLoaded", () => {
  const dailyItems = [
    {
      title: "Feeding & Water",
      description:
        "Morning and evening, provide fresh hay and check water bottles. Vegetables should be fed once a day. Remove uneaten food within a few hours.",
      citation:
        "Source: RSPCA Feeding Schedule — https://www.rspca.org.uk/adviceandwelfare/pets/rodents/guineapigs/diet"
    },
    {
      title: "Cage Cleaning",
      description:
        "Spot-clean daily to remove droppings and wet bedding. Full cage cleans (including washing fleece liners) should be done 1–2 times weekly.",
      citation:
        "Source: Guinea Pig Manual — https://www.guineapigmanual.com/cage-cleaning/"
    },
    {
      title: "Exercise Time",
      description:
        "Allow at least 1 hour of floor time in a safe area. Use playpens or secure open areas and provide tunnels, cardboard boxes, and chew toys.",
      citation:
        "Source: PetMD — https://www.petmd.com/exotic/exercise-tips-for-guinea-pigs"
    },
    {
      title: "Social Interaction",
      description:
        "Guinea pigs thrive on daily interaction. Talk softly to them, offer treats by hand, and let them cuddle in your lap with supervision.",
      citation:
        "Source: Humane Society — https://www.humanesociety.org/resources/how-care-guinea-pig"
    }
  ];

  const container = document.getElementById("guineaPigLifeDaily");

  dailyItems.forEach(section => {
    const div = document.createElement("section");
    div.classList.add("life-daily-section");

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