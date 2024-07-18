const weeks = document.querySelector(".weeks");
const currentDate = document.querySelector(".current-date");
const days = document.querySelector(".days");
const previousMonthBtn = document.querySelector("#previous-month");
const nextMonthBtn = document.querySelector("#next-month");
const Day = document.querySelector('.day');
let date = new Date();

currentYear = date.getFullYear();
currentMonth = date.getMonth();

const Days = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
Day.textContent = Days[date.getDay()];
const totalMonths = [
  "January",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function renderCalender() {
  let dates = new Date(currentYear, currentMonth + 1, 0).getDate();
  currentDate.textContent = `${totalMonths[currentMonth]} ${currentYear}`;
  let startingDays = new Date(currentYear, currentMonth, 1).getDay(); //starting date day - to adjust there position
  let previousMonthDays = new Date(currentYear, currentMonth, 0).getDate(); 

  for (let j = 0; j < startingDays; j++) {
    //loop to fill out the empty previous month slots
    let previousMonth = document.createElement("li");
    previousMonth.textContent = previousMonthDays - startingDays + j + 1;
    previousMonth.classList.add("previous-month");
    days.appendChild(previousMonth);
  }
  
  for (let i = 1; i <= dates; i++) {
    //loop to fill out current month dates
    let displayDate = document.createElement("li");
    displayDate.textContent = i;
    if (i === date.getDate() && currentMonth === date.getMonth()&& currentYear === date.getFullYear()) {
      displayDate.classList.add("present-date");
    }

    days.appendChild(displayDate);
  }
}

renderCalender(); //For rendering initial calender

previousMonthBtn.addEventListener("click", () => {
  removeFadeIn();
	addFadeOut();
  setTimeout(() => {
    days.innerHTML = "";
    if (currentMonth > 0) currentMonth = currentMonth - 1;
    else {
      currentYear = currentYear - 1;
      currentMonth = 11; //december in this case
    }
    renderCalender();
    addFadeIn();
	removeFadeOut();
  }, 500);
});

nextMonthBtn.addEventListener("click", () => {
	removeFadeIn();
	addFadeOut();
	setTimeout(()=>{
	days.innerHTML = "";
	if (currentMonth < 11) 
		currentMonth = currentMonth + 1;
	else {
		currentYear = currentYear + 1;
		currentMonth = 0; //january in this case
	}
	renderCalender();
	addFadeIn();
	removeFadeOut();
},500);

});

//Functions for animations

function addFadeOut(){
	days.classList.add('fade-out');
	currentDate.classList.add('fade-out');
	previousMonthBtn.classList.add('fade-out');
	nextMonthBtn.classList.add('fade-out');
	weeks.classList.add('fade-out');
}

function addFadeIn(){
	days.classList.add('fade-in');
	currentDate.classList.add('fade-in');
	previousMonthBtn.classList.add('fade-in');
	nextMonthBtn.classList.add('fade-in');
	weeks.classList.add('fade-in');
}

function removeFadeOut(){
	days.classList.remove('fade-out');
	currentDate.classList.remove('fade-out');
	previousMonthBtn.classList.remove('fade-out');
	nextMonthBtn.classList.remove('fade-out');
	weeks.classList.remove('fade-out');
}

function removeFadeIn(){
	currentDate.classList.remove('fade-in');
	previousMonthBtn.classList.remove('fade-in');
	nextMonthBtn.classList.remove('fade-in');
	weeks.classList.remove('fade-in');
	days.classList.remove('fade-in');
}