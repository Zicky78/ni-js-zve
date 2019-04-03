/*** Data Sorting ***/

//Variables to hold local storage data from form
const educationInput = localStorage.getItem('education');
const budgetInput = localStorage.getItem('budget');
const careerInput = localStorage.getItem('career');
const eslInput = localStorage.getItem('esl');
console.table([educationInput, budgetInput, careerInput, eslInput]);

//Arrays to hold temporary and final resources
const finalResources = [];
const tempResources = [];

//Clears temp resources
function clearTempResources() {
    tempResources.length = 0;
}

//Selects a random temporary resource and pushes it into the final resources array
function selectRandom() {
    //Varibale that holds the randomly selected resource
    //Randomly selected between tempResources[0] and tempResources[length-1]
    let final = tempResources[Math.floor(Math.random() * tempResources.length)];
    //If the randomly selected resource is not already in the final array, it will be added to it
    //If the resource IS in the array, recursively calls selectRandom() to get another random resource
    if(!finalResources.includes(final)) {
        //Pushes the selected resource into the array
        finalResources.push(final);
    } else {
        selectRandom();
    }
}

//The main function of this file. Sorts the resources based on the form answers
function sort() {

    //Sorts for esl
    //If esl is Yes, loops through the resources and adds all esl resources to the temporary array,
    //then calls selectRandom() to pick one
    if(eslInput === "Yes") {
        for(i = 0; i < resources.length; i++) {
            if(resources[i].esl === "esl") {
                tempResources.push(resources[i]);
            }
        }
        selectRandom();
    }

    //If esl is No, picks a random resource between resources[0] and resources[length-1]
    else {
        finalResources.push(resources[Math.floor(Math.random() * resources.length)]);
    }

    //Clears the temp resources
    clearTempResources();

    //Sorts for career interest
    //Switch statement reads the career interest and puts the appropriate resource into the final array
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

    //Clearsthe temp resources
    clearTempResources();

    //Sorts for education
    //Switch statement reads the education answer and puts all matching resources into the temp array,
    //then calls selectRandom() to pick one
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

        case "No Education":
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
    //Switch statement reads the budget answer and puts all matching resources into the temp array,
    //then calls selectRandom() to pick one
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

//Calls the sort function
sort();

//Logs of the selected resources
console.log('Selected Esl / Other Resource: ', finalResources[0].name);
console.log('Selected Career Resource: ', finalResources[1].name);
console.log('Selected Education Resource: ', finalResources[2].name);
console.log('Selected Budget Resource: ', finalResources[3].name);