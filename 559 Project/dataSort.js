const education = localStorage.getItem('education');
const budget = localStorage.getItem('budget');
const career = localStorage.getItem('career');
console.log(education, budget, career);

const educationInput = education;
const budgetInput = budget;
const careerInput;
const eslInput;

const finalResources = [];
const tempResources = [];



function sort() {
    //Sorts for esl
    if(eslInput === "Yes") {
        for(i = 0; i < resources.length; i++) {
            if(resources[i].esl === "esl") {
                tempResources.push(resources[i]);
            }
        }

        finalResources.push(tempResources[Math.floor(Math.random() * tempResources.length)]);
    }

    

    //Sorts for education
    switch(educationInput) {

        case "High School Graduate":
        for(i = 0; i < resources.length; i++) {
        break;
        
        case "High School Dropout":
        
        break;

        case "Below High School":

        break;

        case "No High School":

        break;

        case "Some College":

        break;

        default:
        
    }

    switch(budgetInput) {

        case "Free":
        
        break;

        case "Affordable":
        
        break;

        case "Expensive":
        
        break;

    }


}


sort();

