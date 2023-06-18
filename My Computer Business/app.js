//! Icons

const navbarEl = document.querySelector(".navbar");
const toggleIconEl = document.querySelector(".fa-bars");

toggleIconEl.addEventListener("click", () => {
    navbarEl.classList.toggle("active");
});


//! Oclock

const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

function updateClock() {
    const currentDate = new Date();
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();

    const hourDeg = (hour / 12) * 360;
    hourEl.style.transform = `rotate(${hourDeg}deg)`;

    const minuteDeg = (minute / 60) * 360;
    minuteEl.style.transform = `rotate(${minuteDeg}deg)`;

    const secondDeg = (second / 60) * 360;
    secondEl.style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(updateClock, 1000);

//! Calendar

const monthEl = document.querySelector(".date h1");
const fullDateEl = document.querySelector(".date p");
const daysEl = document.querySelector(".days");

const monthInx = new Date().getMonth();
const lastDay = new Date(new Date().getFullYear(), monthInx + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), monthInx, 1).getDay() - 1;

const months = [
    "January",
    "February",
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

monthEl.innerText = months[monthInx];
fullDateEl.innerText = new Date().toDateString();

let days = "";

for (let i = firstDay; i > 0; i--) {
    days += `<div class="empty"></div>`;
}

for (let i = 1; i <= lastDay; i++) {
    if(i === new Date().getDate()) {
        days += `<div class="today">${i}</div>`;
    }
    else {
        days += `<div>${i}</div>`;
    }
}

daysEl.innerHTML = days;