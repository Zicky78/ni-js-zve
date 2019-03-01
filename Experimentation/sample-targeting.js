//This targets the html elements
const hlink = document.getElementById('hlink');
const img1 = document.getElementById('img1');

//Array to hold resources
const resourceArray = []

//This function is a constructor for creating resources
function resource(hlink, imgSrc, innerText) {
    this.hlink = hlink;
    this.imgSrc = imgSrc;
    this.innerText = innerText;
    return this;
}

//This makes the resource
const googleResource = new resource('http://www.google.com', './image.jpg', 'Google');
//console.log(googleResource);

//Push resource into array
resourceArray.push(googleResource);

//This takes the resource's information and puts it into the html
function targetHTML(resourceArray) {
    hlink.href = resourceArray[0].hlink;
    hlink.innerText = resourceArray[0].innerText;
    img1.src = resourceArray[0].imgSrc;
}

//this calls the function using whatever resource you put in the parenthesis
targetHTML(resourceArray);

/* ***CONCEPT OF HOW THIS CAN EVENTUALLY WORK*** */

//Have an array holding all of the available resources

//A function loops through the array and adds resources to a second array if they meet the criteria the user enetered in the form

//Use this method of targeting the webpage to add the information to the html elements that we will have set up

//So the process is basically:

//User enters info into form and is redirected toward relevant resources-> 
//the info is used to sort relevant resources -> 
//the resources' info is put onto the html page ->
//User interacts with resources on the page