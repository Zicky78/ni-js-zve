function formSubmit() {
    document.getElementById("submitButton").onclick = function() {
        const education = document.getElementById("Level-Of-Education").value;
        console.log(education);
        localStorage.setItem('education', education);
        console.log(localStorage.getItem('education'));

        const budget = document.getElementById("Budget").value;
        console.log(budget);
        localStorage.setItem('budget', budget);
        console.log(localStorage.getItem('budget'));

        const career = document.getElementById("career-interests").value;
        console.log(career);
        localStorage.setItem('career', career);
        console.log(localStorage.getItem('career'));

        window.location.href = "carousel.html";
        };
  }