function birthDate() {
  // DeclaredVariables
  let userDateOfBirth = document.querySelector("#date").value;
  let userFullDate = new Date(userDateOfBirth);
  let userYear = userFullDate.getFullYear();
  let userMonth = userFullDate.getMonth() + 1;
  let userDate = userFullDate.getDate() - 1;
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth() + 1;
  let dateRightNow = currentDate.getDate();
  let currentHours = currentDate.getHours();
  let currentMinutes = currentDate.getMinutes();
  let currentSeconds = currentDate.getSeconds();

  //  Year Calculation
  let Age = currentYear - userYear;
  document.querySelector("#age").innerText = `Your Age is ${Age}`;

  //Months Calculation
  let remainingMonths;
  if (userMonth === currentMonth) {
    document.querySelector("#months").innerText = `0 Months`;
  } else if (userMonth > currentMonth) {
    remainingMonths = userMonth - currentMonth - 1;
    document.querySelector("#months").innerText = `${remainingMonths} Months`;
  } else {
    remainingMonths = 12 - (currentMonth - userMonth + 1);
    document.querySelector("#months").innerText = `${remainingMonths} Months`;
  }

  //Days Calculation

  let days = Math.floor(31 - dateRightNow) + userDate;
  document.querySelector("#days").innerText = `${days} Days`;

  //  Hours Calculation
  let remainingHours = 23 - currentHours;
  document.querySelector("#hours").innerText = `${remainingHours} Hours`;

  // Minutes Calculation

  let remainingMinutes = 60 - currentMinutes;
  document.querySelector("#minutes").innerText = `${remainingMinutes} Minutes`;

  //Seconds Calculation

  let remainingSeconds = 60 - currentSeconds;
  document.querySelector("#seconds").innerText = `${remainingSeconds} Seconds`;
}
