class Cinema {
  constructor(randuri, locuri) {
    this.structura = [];
    for (let i = 1; i <= randuri; i++) {
      let rand = document.createElement("div");
      rand.classList.add("row");
      for (let j = 1; j <= locuri; j++) {
        this.structura[i * j] = 0;
        let loc = document.createElement("div");
        loc.classList.add("loc");
        loc.classList.add("free");
        loc.addEventListener("click", () => rezervaLoc(i, j));
        loc.id = "rand-" + i + "-loc-" + j;
        rand.append(loc);
      }
      document.getElementById("cinema").append(rand);
    }
  }
  rezervare(rand, loc, reserve) {
    if (this.structura[rand * loc] < rand * loc && reserve) {
      document
        .getElementById("rand-" + rand + "-loc-" + loc)
        .classList.remove("free");
      document
        .getElementById("rand-" + rand + "-loc-" + loc)
        .classList.add("reserved");
      this.structura[rand * loc] += 1;
    }
    if (!reserve) {
      document
        .getElementById("rand-" + rand + "-loc-" + loc)
        .classList.remove("reserved");
      document
        .getElementById("rand-" + rand + "-loc-" + loc)
        .classList.add("free");
      this.structura[rand * loc] = 0;
    }
    document
      .getElementById("rand-" + rand + "-loc-" + loc)
      .classList.remove("selected");
    document.getElementById("confirmText").remove();
  }
}
const rezervaLoc = (rand, loc) => {
  if (!document.getElementById("confirmText")) {
    document
      .getElementById("rand-" + rand + "-loc-" + loc)
      .classList.add("selected");
    const confirmWrapper = document.createElement("div");
    const confirmText = document.createTextNode(
      "Esti sigur ca vrei sa rezervi locul " + rand + ":" + loc + "?"
    );
    const confirmButton = document.createElement("button");
    const confirmButtonText = document.createTextNode("Da");
    const declineButton = document.createElement("button");
    const declineButtonText = document.createTextNode("Nu");
    confirmWrapper.id = "confirmText";
    confirmButton.classList.add("confirm-button");
    declineButton.classList.add("decline-button");
    confirmButton.addEventListener("click", () =>
      cinema.rezervare(rand, loc, true)
    );
    confirmWrapper.appendChild(confirmText);
    confirmButton.appendChild(confirmButtonText);
    confirmWrapper.appendChild(confirmButton);
    declineButton.appendChild(declineButtonText);
    confirmWrapper.appendChild(declineButton);
    declineButton.addEventListener("click", () =>
      cinema.rezervare(rand, loc, false)
    );
    document.getElementById("cinema").appendChild(confirmWrapper);
  }
};
const cinema = new Cinema(5, 5);
