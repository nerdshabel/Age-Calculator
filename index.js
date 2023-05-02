'use strict'

const ageForm = document.querySelector("form");
const outputYear = document.querySelector(".year-span");
const outputMonth = document.querySelector(".month-span");
const outputDay = document.querySelector(".day-span");

let currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;
const currentDay = currentDate.getDate();

document.querySelector(".year").max = currentYear.toString();

// defining number of days in month
let daysInMonth = 0;


// adding event listener to form variable

let yearRemaining = 0, monthRemaining = 0, dayRemaining = 0;

ageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    //  defining user inputss
    let userYear = document.querySelector(".year").value;
    let userMonth = document.querySelector(".month").value;
    let userDay = document.querySelector(".day").value;
    const userDate = new Date((`${userYear}-${userMonth}-${userDay}`).toString());


    if (userMonth == 9 || userMonth == 4 || userMonth == 6 || userMonth == 11) {
        daysInMonth = 30;
    }

    else if(userMonth == 2) {
        // testing out for leap year

            if (userYear % 4 == 0) {
                if (userYear % 100 == 0) {
                    if (userYear % 400 == 0) {
                        daysInMonth = 29;
                    }
                    else {
                        daysInMonth = 28;
                    }
                }
                else {
                    daysInMonth = 29;
                }
            }
            else {
                daysInMonth = 28;

            }
    }

    else {
        daysInMonth = 31;
    }

    document.querySelector(".day").max = daysInMonth.toString();



    // years remaining
    if (currentDate >= userDate) {
        yearRemaining = currentYear - userYear;

        //Months remaining
        if (currentMonth > userMonth) {
            monthRemaining = currentMonth - userMonth;
        }
        else {
            yearRemaining-- ;
            monthRemaining = (currentMonth + 12) - userMonth;
        }

        //Days remaining
        if (currentDay > userDay) {
            dayRemaining = currentDay - userDay;
        }
        else {
            monthRemaining-- ;
            dayRemaining = (currentDay + daysInMonth) - userDay;
        }

        if (dayRemaining >= daysInMonth) {
            dayRemaining %= daysInMonth;
            monthRemaining ++;
        }
        if (monthRemaining >= 12) {
            monthRemaining %= 12;
            yearRemaining ++
        }

        // adding values to html
        outputYear.textContent = yearRemaining;
        outputMonth.textContent = monthRemaining;
        outputDay.textContent = dayRemaining;
}
else {
    alert("Date can't be in the future.")
}
});




