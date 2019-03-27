const educationInput = localStorage.getItem('education');
const budgetInput = localStorage.getItem('budget');
const careerInput = localStorage.getItem('career');
const eslInput = localStorage.getItem('esl');
console.table([educationInput, budgetInput, careerInput, eslInput]);

const finalResources = [];
const tempResources = [];

function clearTempResources() {
    tempResources.length = 0;
}

function selectRandom() {
    let final = tempResources[Math.floor(Math.random() * tempResources.length)];
    if(!finalResources.includes(final)) {
        finalResources.push(final);
    } else {
        selectRandom();
    }
}

function sort() {

    //Sorts for esl
    if(eslInput === "Yes") {
        for(i = 0; i < resources.length; i++) {
            if(resources[i].esl === "esl") {
                tempResources.push(resources[i]);
            }
        }
        selectRandom();
    }

    else {
        finalResources.push(resources[Math.floor(Math.random() * resources.length)]);
    }

    //Clears the temp resources
    clearTempResources();

    //Sorts for career interest
    switch(careerInput) {

        case "Computer Science":
            finalResources.push(geekwiseResource);
        break;

        case "Construction":
            finalResources.push('construction placeholder');
        break;

        case "Aviation":
            finalResources.push(jbaResource);
        break;

        case "Agriculture":
            finalResources.push(proResource);
        break;

        case "Professional Driver":
            finalResources.push(aciResource);
        break;

        case "Welding":
            finalResources.push(aciResource);
        break;

        case "Religious Leader":
            finalResources.push(chrcolResource);
        break;
    }
    clearTempResources();

    //Sorts for education
    switch(educationInput) {

        case "High School Graduate":
            for(i = 0; i < resources.length; i++) {
                if(resources[i].education === "High School Graduate" || resources[i].education === "None") {
                    tempResources.push(resources[i]);
                }
            }
            selectRandom();
        break;
        
        case "High School Dropout":
            for(i = 0; i < resources.length; i++) {
                if(resources[i].education === "High School Dropout" || resources[i].education === "None") {
                    tempResources.push(resources[i]);
                }
            }
            selectRandom();
        break;

        case "Below High School":
            for(i = 0; i < resources.length; i++) {
                if(resources[i].education === "Below High School" || resources[i].education === "None") {
                    tempResources.push(resources[i]);
                }
            }
            selectRandom();
        break;

        case "No High School":
            for(i = 0; i < resources.length; i++) {
                if(resources[i].education === "No High School" || resources[i].education === "None") {
                    tempResources.push(resources[i]);
                }
            }
            selectRandom();
        break;

        case "Some College":
            for(i = 0; i < resources.length; i++) {
                if(resources[i].education === "Some College" || resources[i].education === "None") {
                    tempResources.push(resources[i]);
                }
            }
            selectRandom();
        break;
    }

    //Clears temp resources
    clearTempResources();

    //Sorts for budget
    switch(budgetInput) {

        case "Free":
            
            for(i = 0; i < resources.length; i++) {
                if(resources[i].free === true) {
                    tempResources.push(resources[i]);
                }
            }
            selectRandom();
        break;

        case "Affordable":
        
            for(i = 0; i < resources.length; i++) {
                if(resources[i].affordable === true) {
                    
                    tempResources.push(resources[i]);
                }
            }
            
            selectRandom();
        break;

        case "Expensive":
            for(i = 0; i < resources.length; i++) {
                if(resources[i].expensive === true) {
                    tempResources.push(resources[i]);
                }
            }
            selectRandom();
        break;
    }
}

sort();

console.log(finalResources);
console.log('Selected Esl / Other Resource: ', finalResources[0].name);
console.log('Selected Career Resource: ', finalResources[1].name);
console.log('Selected Education Resource: ', finalResources[2].name);
console.log('Selected Budget Resource: ', finalResources[3].name);