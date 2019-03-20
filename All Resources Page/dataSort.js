const education = localStorage.getItem('education');
const budget = localStorage.getItem('budget');
const career = localStorage.getItem('career');
console.log(education, budget, career);

const educationInput = education;
const budgetInput = budget;
const eslInput = "Yes";

const educationResources = [];
const budgetResources = [];
const finalEducationResources = [];
const finalBudgetResources = [];
const eslResources = [];
const finalEslResources = [];

let loop = 0;

function sort() {

    //Sorts resources based on education
    switch(educationInput) {

        case "High School Graduate":
        for(i = 0; i < resources.length; i++) {
            if(resources[i].education === "HSGrad" || resources[i].education === "None") {
                educationResources.push(resources[i]);
            }
        }
        break;
        
        case "High School Dropout":
        for(i = 0; i < resources.length; i++) {
            if(resources[i].education === "Dropout" || resources[i].education === "None") {
                educationResources.push(resources[i]);
            }
        }
        break;
        default:
        console.log('default');
    }

    switch(budgetInput) {

        case "Free":
        for(i = 0; i < resources.length; i++) {
            if(resources[i].free === true) {
                budgetResources.push(resources[i]);
            }
        }
        break;

        case "Affordable":
        for(i = 0; i < resources.length; i++) {
            if(resources[i].affordable === true) {
                budgetResources.push(resources[i]);
            }
        }
        break;

        case "Expensive":
        for(i = 0; i < resources.length; i++) {
            if(resources[i].expensive === true) {
                budgetResources.push(resources[i]);
            }
        }
        break;

    }

    for(i = 0; i < resources.length; i++) {
        if(resources[i].esl === "esl") {
            eslResources.push(resources[i]);
        }
    }

    console.log(eslResources);
    console.log(educationResources);
    console.log(budgetResources);

    while(finalEslResources.length < 3) {
        let random = Math.floor(Math.random() * eslResources.length);
        if(!finalEslResources.includes(eslResources[random])) {
            finalEslResources.push(eslResources[random]);
        }
    }

    while(finalEducationResources.length < 3) {
        let random = Math.floor(Math.random() * educationResources.length);
        if(!finalEducationResources.includes(educationResources[random])) {
            finalEducationResources.push(educationResources[random]);
        }

        if(loop > 30) {
            random = Math.floor(Math.random() * resources.length);
            finalEducationResources.push(resources[random]);
        }
        loop++;
    }

    

    while(finalBudgetResources.length < 3) {
        let random = Math.floor(Math.random() * budgetResources.length);
        if(!finalBudgetResources.includes(budgetResources[random]) && !finalEducationResources.includes(budgetResources[random])) {
            finalBudgetResources.push(budgetResources[random]);
        }

        if(loop > 30) {
            random = Math.floor(Math.random() * resources.length);
            if(!finalBudgetResources.includes(budgetResources[random]) && !finalEducationResources.includes(budgetResources[random])) {
                finalBudgetResources.push(resources[random]);
            }
        }
        loop++;
    }

    
    console.log(finalEslResources);
    console.log(finalEducationResources);
    console.log(finalBudgetResources);
}

sort();
