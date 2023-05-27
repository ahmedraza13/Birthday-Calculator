function birthDate() {

           // DeclaredVariables
  let userDateOfBirth = document.querySelector("#date").value;
  let userFullDate =  new Date(userDateOfBirth);
  let userYear =  userFullDate.getFullYear()
  let userMonth = userFullDate.getMonth() + 1
  let userDate = userFullDate.getDate() - 1
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear()
  let currentMonth = currentDate.getMonth() + 1;
  let dateRightNow = currentDate.getDate()
  

          //  Year Calculation
      let Age = currentYear - userYear;
      document.querySelector("#age").innerText = Age;
          
           
            //Months Calculation
    let remainingMonths;   
    if (userMonth === currentMonth) {
        document.querySelector("#months").innerText =  0;
    } else if (userMonth > currentMonth) {
      remainingMonths = userMonth - currentMonth - 1;
      document.querySelector("#months").innerText =  remainingMonths;
    } else {
      remainingMonths = 12 - (currentMonth - userMonth + 1);
      document.querySelector("#months").innerText = remainingMonths;
    }
    
            //Days Calculation
    let days = Math.floor(remainingMonths * 30.44); 
    days+= Math.floor(30.44 - dateRightNow ) + userDate;
    document.querySelector("#days").innerText = days
   
}
