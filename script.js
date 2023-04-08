var count_meniuri = 0;
class Meniu {
  constructor(
    ciorba,
    pizza,
    burger,
    friptura,
    salata,
    papanasi,
    clatite,
    bautura
  )
   {
    this.ciorba = ciorba;
    this.pizza = pizza;
    this.burger = burger;
    this.friptura = friptura;
    this.salata = salata;
    this.papanasi = papanasi;
    this.clatite = clatite;
    this.bautura = bautura;
    this.generated_element = "";
  }
   generare()
   { console.log(this);
    let meniuContainer = document.createElement("div");
    meniuContainer.classList.add("meniu-card");

    meniuContainer = this.generateProperty(
      meniuContainer,
      this.ciorba,
      "Ciorba:"
    );
    meniuContainer = this.generateProperty(
      meniuContainer,
      this.pizza,
      "Pizza:"
    );
    meniuContainer = this.generateProperty(
      meniuContainer,
      this.burger,
      "Burger:"
    );
    meniuContainer = this.generateProperty(
      meniuContainer,
      this.friptura,
      "Friptura:"
    );
    meniuContainer = this.generateProperty(
      meniuContainer,
      this.salata,
      "Salata:"
    );
    meniuContainer = this.generateProperty(
      meniuContainer,
      this.papanasi,
      "Papanasi:"
    );
    meniuContainer = this.generateProperty(
      meniuContainer,
      this.clatite,
      "Clatite:"
    );
    meniuContainer = this.generateProperty(
      meniuContainer,
      this.bautura,
      "Bautura:"
    );
    const buttonsWrapper = document.createElement("div");

    const editButton = document.createElement("button");
    const editButtonText = document.createTextNode("Edit");
    editButton.appendChild(editButtonText);
    editButton.classList.add("edit-button");
    editButton.addEventListener("click", () => this.toggleEdit());
    buttonsWrapper.appendChild(editButton);

    const deleteButton = document.createElement("button");
    const deleteButtonText = document.createTextNode("X");
    deleteButton.appendChild(deleteButtonText);
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", () => meniuContainer.remove());
    buttonsWrapper.appendChild(deleteButton);

    meniuContainer.appendChild(buttonsWrapper);
    count_meniuri++;
    meniuContainer.id = "meniu-" + count_meniuri;
    this.generated_element = meniuContainer;

    document.getElementById("meniuri").appendChild(meniuContainer);
  
}

  generateProperty(meniuContainer, propertyValue, property) {
    const propertyContainer = document.createElement("div");
    const propertyText = document.createTextNode(property + "");
    const propertyInput = document.createElement("input");
    propertyInput.disabled = true;
    propertyInput.value = propertyValue;
    propertyContainer.appendChild(propertyText);
    propertyContainer.appendChild(propertyInput);
    meniuContainer.appendChild(propertyContainer);
    return meniuContainer;
  }

  toggleEdit() {
    if (
      document.querySelector("#" + this.generated_element.id + " .edit-button")
        .textContent == "Edit"
    ) {
      document
        .querySelectorAll("#" + this.generated_element.id + " input")
        .forEach((input) => {
          input.disabled = false;
        });
      document.querySelector(
        "#" + this.generated_element.id + " .edit-button"
      ).textContent = "Complete";
    } else {
      document
        .querySelectorAll("#" + this.generated_element.id + " input")
        .forEach((input) => {
          input.disabled = true;
        });
      document.querySelector(
        "#" + this.generated_element.id + " .edit-button").textContent = "Edit";
    }
  }
}
const createMeniu = () => {
    const ciorba = document.getElementById('ciorba').value;
    const pizza = document.getElementById('pizza').value;
    const burger = document.getElementById('burger').value;
    const friptura = document.getElementById('friptura').value;
    const salata = document.getElementById('salata').value;
    const papanasi = document.getElementById('papanasi').value;
    const clatite = document.getElementById('clatite').value;
    const bautura = document.getElementById('bautura').value;

    const meniu = new Meniu (ciorba, pizza, burger, friptura, salata, papanasi, clatite, bautura);
    meniu.generare();
}