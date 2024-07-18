"use strict";
// containers
const cardContainer = document.querySelector(".card-container");
const dialog = document.getElementById("myDialog");
//buttons
const addBtn = document.querySelector(".add-btn");
const submitBtn = document.querySelector("#submit");
const modeSwitcher = document.querySelector("#mode-switcher");
//fields
const discriptionBox = document.querySelector("#discription");
const titleBox = document.querySelector("#title");
const completedTasks = document.querySelector("#completed-tasks");
const pendingTasks = document.querySelector("#pending-tasks");
const userName = document.querySelector("#username");
const displayUser = document.querySelector("#user");
const editTaskTitle = document.querySelector("#edit-task-title");
const editTaskDiscription = document.querySelector("#edit-task-discription");
//others
const emptyTitleDisplay = document.querySelector(".empty-state-text");
const editTaskSubmit = document.querySelector("#edit-task-submit");
const gettingUserName = document.querySelector(".user-result");

let totalCards = cardContainer.childElementCount - 1;
let completeTask = localStorage.getItem("completedTasks") || 0;
completedTasks.textContent = completeTask || "- -";
let cards = [];
let currentMode = localStorage.getItem("theme");

// Handlers for card buttons
const handleComplete = (event) => {
  const card = event.target.closest(".card");
  card.style.animation = "card-task-complete 1.5s ease";
  const index = cards.findIndex(
    (currentCard) =>
      currentCard.title === card.querySelector(".task-title").innerText
  );
  cards.splice(index, 1);
  completeTask++;
  localStorage.setItem("completedTasks", completeTask);
  store();
  card.addEventListener("animationend", () => {
    card.remove();
    totalCards--;
    pendingTasks.textContent = totalCards;
    completedTasks.textContent = completeTask || "- -";
    totalCards !== 0
      ? (emptyTitleDisplay.style.display = "none")
      : (emptyTitleDisplay.style.display = "block");
    emptyTitleDisplay.textContent =
      "Congratulations you have completed all your tasks";
  });
};

const handleEdit = (event) => {
  const card = event.target.closest(".card");
  const index = cards.findIndex(
    (currentCard) =>
      currentCard.title === card.querySelector(".task-title").innerText
  );

  document
    .querySelector(".edit-task-info")
    .setAttribute("data-edit-task", "true");

  editTaskTitle.value = cards[index].title;
  editTaskDiscription.value = cards[index].discription;

  const submitChanges = () => {
    document
      .querySelector(".edit-task-info")
      .setAttribute("data-edit-task", "false");
    if (
      editTaskTitle.value !== cards[index].title ||
      editTaskDiscription.value !== cards[index].discription
    ) {
      cards[index].discription = editTaskDiscription.value;
      cards[index].title = editTaskTitle.value;
      card.querySelector(".task-title").textContent = cards[index].title;
      card.querySelector(".task-description").textContent =
        cards[index].discription;
      store();
    }
  };
  const keySubmit = (e) => {
    if (e.key === "Enter") {
      submitChanges();
    }
  };
  
  editTaskSubmit.removeEventListener("click", submitChanges);
  editTaskTitle.removeEventListener('keypress',keySubmit);
  editTaskDiscription.removeEventListener('keypress',keySubmit);

  editTaskSubmit.addEventListener("click", submitChanges);
  editTaskTitle.addEventListener('keypress',keySubmit);
  editTaskDiscription.addEventListener('keypress',keySubmit);
};

const handleDelete = (event) => {
  const card = event.target.closest(".card");
  card.style.animation = "card-remove 1.5s ease";
  const index = cards.findIndex(
    (currentCard) =>
      currentCard.title === card.querySelector(".task-title").innerText
  );
  cards.splice(index, 1);
  store();
  card.addEventListener("animationend", () => {
    card.remove();
    totalCards--;
    pendingTasks.textContent = totalCards;
    totalCards !== 0
      ? (emptyTitleDisplay.style.display = "none")
      : (emptyTitleDisplay.style.display = "block");
  });
};

//Card adding functionality
const addCard = () => {
  const card = document.createElement("div");
  card.innerHTML = `<div class="card-content">
                      <h3 class="task-title">${titleBox.value}</h3>
                      <p class="task-description">${discriptionBox.value}</p>
                      <p class="start-date">Start date: <span>${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}</span></p>
                    </div>
                    <div class="buttons">
                        <span class="material-symbols-outlined completed-btn">
                            check_circle
                            </span>
                        <span class="material-symbols-outlined edit-btn">
                            app_registration
                            </span>
                        <span class="material-symbols-outlined delete-btn">
                        delete_sweep
                            </span>
                            </div>`;
  card.classList.add("card");
  card.setAttribute("data-card-number", totalCards + 1);
  cards.push({
    discription: discriptionBox.value,
    title: titleBox.value,
    startDate: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`,
  });
  discriptionBox.value = "";
  titleBox.value = "";
  cardContainer.appendChild(card);
  dialog.showModal();
  setTimeout(() => dialog.close(), 1000);
  totalCards++;
  pendingTasks.textContent = totalCards;

  store();

  //event listeners for the buttons in the card
  card
    .querySelector(".completed-btn")
    .addEventListener("click", handleComplete);
  card.querySelector(".edit-btn").addEventListener("click", handleEdit);
  card.querySelector(".delete-btn").addEventListener("click", handleDelete);
  totalCards !== 0
    ? (emptyTitleDisplay.style.display = "none")
    : (emptyTitleDisplay.style.display = "block");
};

//Event listeners

addBtn.addEventListener("click", (event) => {
  if (discriptionBox.value === "") {
    alert("Please enter the discription ");
    return;
  } else if (titleBox.value === "") {
    alert("Please enter the title ");
    return;
  } else {
    addCard();
  }
});

window.addEventListener("keypress", (event) => {
  if (discriptionBox.value !== "" && titleBox.value !== "") {
    if (event.key === "Enter") {
      addCard();
    }
  }
});

dialog.addEventListener("click", function (event) {
  if (event.target === dialog) {
    dialog.close();
  }
});

const store = () => {
  localStorage.setItem("cards", JSON.stringify(cards));
};

window.onload = () => {
  cards = JSON.parse(localStorage.getItem("cards")) || [];
  cards.length !== 0
    ? (emptyTitleDisplay.style.display = "none")
    : (emptyTitleDisplay.style.display = "block");
  cards.forEach((cardData) => {
    createCards(cardData);
    totalCards++;
    pendingTasks.textContent = totalCards;
  });
  checkLastDate();
  setTheme();
  setUser();
  store();
};

const createCards = (cardData) => {
  const card = document.createElement("div");
  card.innerHTML = `<div class="card-content">
                      <h3 class="task-title">${cardData.title}</h3>
                      <p class="task-description">${cardData.discription}</p>
                      <p class="start-date">Start date: <span>${cardData.startDate}</span></p>
                    </div>
                    <div class="buttons">
                        <span class="material-symbols-outlined completed-btn">
                            check_circle
                            </span>
                        <span class="material-symbols-outlined edit-btn">
                            app_registration
                            </span>
                        <span class="material-symbols-outlined delete-btn">
                        delete_sweep
                            </span>
                            </div>`;
  card.classList.add("card");
  card.setAttribute("data-card-number", totalCards + 1);
  cardContainer.appendChild(card);
  card
    .querySelector(".completed-btn")
    .addEventListener("click", handleComplete);
  card.querySelector(".edit-btn").addEventListener("click", handleEdit);
  card.querySelector(".delete-btn").addEventListener("click", handleDelete);
};

const checkLastDate = () => {
  let today = new Date().toLocaleDateString();
  let lastDate = localStorage.getItem("lastDate") || 0;
  if (today !== lastDate) {
    lastDate = today;
    completeTask = 0;
    localStorage.setItem("lastDate", today);
    localStorage.setItem("completedTasks", completeTask);
    completedTasks.textContent = completeTask;
  }
};

const setTheme = () => {
  if (localStorage.getItem('theme') === null) {localStorage.setItem('theme','light');}
  localStorage.getItem("theme") === "light"
    ? document.body.setAttribute("data-dark-mode", "false")
    : document.body.setAttribute("data-dark-mode", "true");
  if (document.body.getAttribute("data-dark-mode") === "false") {
    modeSwitcher.textContent = "Dark Mode";
  } else {
    modeSwitcher.textContent = "Light Mode";
  }
};
modeSwitcher.onclick = () => {
  localStorage.getItem("theme") === "light"
    ? document.body.setAttribute("data-dark-mode", "true")
    : document.body.setAttribute("data-dark-mode", "false");
  document.body.getAttribute("data-dark-mode") === "false"
    ? localStorage.setItem("theme", "light")
    : localStorage.setItem("theme", "dark");
  setTheme();
  if (document.body.getAttribute("data-dark-mode") === "false") {
    modeSwitcher.textContent = "Dark Mode";
  } else {
    modeSwitcher.textContent = "Light Mode";
  }
};

const setUser = () => {
  displayUser.textContent = localStorage.getItem("userName") || "";
  if (displayUser.textContent === "" || displayUser.textContent === "null") {
    let name = window.prompt("Enter your name");
    displayUser.textContent = name;
    localStorage.setItem("userName", name);
  } else {
    displayUser.textContent = localStorage.getItem("userName");
  }
};
