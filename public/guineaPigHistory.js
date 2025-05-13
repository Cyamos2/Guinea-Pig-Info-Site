console.log("📜 Guinea Pig History Loaded");

document.addEventListener("DOMContentLoaded", () => {
  const historyEntries = [
    {
      year: "c. 1200 BCE",
      title: "Domestication in the Andes",
      description:
        "Guinea pigs were domesticated by Indigenous peoples of the Andean highlands — including the Inca — for food and ritual purposes. They were often used in ceremonial burials and healing practices.",
      citation:
        "National Research Council. (1991). 'Microlivestock: Little-Known Small Animals with a Promising Economic Future'. The National Academies Press. https://nap.nationalacademies.org/catalog/1831/microlivestock-little-known-small-animals-with-a-promising-economic-future"
    },
    {
      year: "c. 1530s",
      title: "Arrival in Europe",
      description:
        "Spanish explorers brought guinea pigs to Europe from South America during colonial expansion. They quickly became novelty pets among European nobility, especially in Elizabethan England.",
      citation:
        "Reed, C. A. (1959). 'The Introduction of Domestic Animals into the Americas'. University of Chicago Press."
    },
    {
      year: "1600s–1800s",
      title: "European Popularity",
      description:
        "Guinea pigs were featured in portraits and records across royal households. They became known as 'cavy' in scientific literature and were later used in early zoological studies.",
      citation:
        "Orland, B. (2002). 'From Farm Animal to Laboratory Subject: The Guinea Pig in Biomedical Research, 1880–1980'. Medical History, 46(4), 511–536."
    },
    {
      year: "1800s",
      title: "Scientific Use & the 'Guinea Pig' Metaphor",
      description:
        "Guinea pigs became widely used in laboratories for biological and medical testing. The phrase 'guinea pig' evolved into a metaphor for test subjects.",
      citation:
        "Hardy, A. (2003). 'Animals and Laboratories: The Guinea Pig’s Rise in Experimental Medicine'. Journal of the History of Medicine and Allied Sciences, 58(1), 1–32."
    },
    {
      year: "1900s–2000s",
      title: "Breeding, Pet Shows, and Standardization",
      description:
        "As interest grew in guinea pig breeding, new coat colors and breeds were developed. Clubs and pet shows emerged, especially in the UK and U.S., with formal breed standards.",
      citation:
        "American Cavy Breeders Association (ACBA). https://acbaonline.com/breeds.html"
    },
    {
      year: "Today",
      title: "Modern Popularity as Pets",
      description:
        "Guinea pigs are now one of the most popular small pets worldwide. Advocates stress proper care, companionship, and adoption from rescues rather than pet stores.",
      citation:
        "RSPCA. (2023). 'Guinea Pig Care Guide'. https://www.rspca.org.uk/adviceandwelfare/pets/rodents/guineapigs"
    }
  ];

  const container = document.getElementById("guineaPigHistory");

  historyEntries.forEach(entry => {
    const article = document.createElement("article");
    article.classList.add("history-entry");

    const year = document.createElement("h2");
    year.textContent = `${entry.year} — ${entry.title}`;

    const description = document.createElement("p");
    description.textContent = entry.description;

    const citation = document.createElement("small");
    citation.innerHTML = `Source: <a href="${entry.citation.split(' ').pop()}" target="_blank">${entry.citation}</a>`;

    article.appendChild(year);
    article.appendChild(description);
    article.appendChild(citation);
    container.appendChild(article);
  });
});