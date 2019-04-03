/*** Stores the form answers in local storage to be retrieved on the carousel page for sorting the resources ***/

//Function that takes the value of the forms, and stores them in local storage,
//then redirects to the carousel page
function formSubmit() {
    const education = document.getElementById("Level-Of-Education").value;
    console.log(education);
    localStorage.setItem('education', education);
    //console.log(localStorage.getItem('education'));

    const budget = document.getElementById("Budget").value;
    console.log(budget);
    localStorage.setItem('budget', budget);
    //console.log(localStorage.getItem('budget'));

    const career = document.getElementById("career-interests").value;
    console.log(career);
    localStorage.setItem('career', career);
    //console.log(localStorage.getItem('career'));

    const esl = document.getElementById("ESL Classes").value;
    console.log(esl);
    localStorage.setItem('esl', esl);
    //console.log(localStorage.getItem('esl'));

    window.location.href = "carousel.html";
    }
  