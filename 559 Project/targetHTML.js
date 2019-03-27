/*** HTML Targeting ***/

//Targets the html and puts in the resource data
//On each loop, it targets the id on the carousel page, and sets the text to the corresponding information
function target() {
    for(i = 0; i < 4; i++) {
        document.getElementById(`c1-name${i+1}`).innerHTML = finalResources[i].name;
        document.getElementById(`c1-desc${i+1}a`).innerHTML = finalResources[i].description;
        document.getElementById(`c1-loc${i+1}`).innerHTML = finalResources[i].location;
        document.getElementById(`c1-phone${i+1}`).innerHTML = finalResources[i].phoneNumber;
        document.getElementById(`c1-img${i+1}`).src = finalResources[i].imgSrc;
        document.getElementById(`c1-link${i+1}`).href = finalResources[i].hlink;
    }
}

target();
