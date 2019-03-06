const resources = [];

//Geekwise
const geekwiseResource = new resource(
    "https://geekwiseacademy.com/",
    ".images/geekwise.jpg",
    "Geekwise Academy",
    "Geekwise Academy offers afordable HTML, CSS, and Javascript coding courses for those who want to learn how to code",
    "700 Van Ness Ave, Fresno, CA 93721",
    "(559) 500-3305 ext. 222",
    false, true, true,
    "Computer Science"
)

resources.push(geekwiseResource);

//Fresno City College
const fccResource = new resource(
    "https://www.fresnocitycollege.edu",
    ".images/fcc.png",
    "Fresno City College",
    "Fresno's best community college, offering many classes for career paths, and offering transfer opportunities to universities",
    "1101 E University Ave, Fresno, CA 93741",
    "(559) 442-4600",
    false, false, true,
    "School"
)

resources.push(fccResource);

//Clovis Community College
const cccResource = new resource(
    "https://www.cloviscollege.edu",
    ".images/ccc.jpg",
    "Clovis Community College",
    "Clovis' best community college, offering many classes for career paths, and offering transfer opportunities to universities",
    "10309 N Willow Ave, Fresno, CA 93730",
    "(559) 325-5200",
    false, false, true,
    "School"
)

resources.push(cccResource);

//Fresno Adult School
const fasResource = new resource(
    "https://www.fresnounified.org/schools/fas",
    ".images/fas.png",
    "Fresno Adult School",
    "Fresno Adult School offers a whide variety of Adult classes such as English as a Second Language, Adult Basic Education, and GED Preparation",
    "2500 Stanislaus St., Fresno, CA 93721",
    "(559) 457-6000",
    false, true, true,
    "School"
)

resources.push(fasResource);

//Adult Transition Program
const atpResource = new resource(
    "https://www.fresnounified.org/dept/specialeducation/Pages/Adult-Transition-Program-on-Fairmont.aspx",
    ".images/atp.png",
    "Adult Transition Program",
    "The Adult Transition Program provides training, support, and education to people with developmental disabilites to provide them the skills to become independent",
    "3132 E. Fairmont Ave., Fresno, CA  93726",
    "(559) 248-7150",
    false, true, true,
    "School"
) 

resources.push(atpResource);

//Central Learning Adult/Alternative School Site - CLASS
const classResource = new resource(
    "https://cl.centralunified.org/",
    ".images/class.png",
    "C.L.A.S.S",
    //Need description
    "",
    "2698 N Brawley, Fresno, CA 93722",
    "(559) 276-5230",
    false, true, true,
    "School"
)

resources.push(classResource);

// 


function resource(hlink, imgSrc, name, description, location, phoneNumber, free, affordable, expensive, tag) {
    this.hlink = hlink;
    this.imgSrc = imgSrc;
    this.name = name;
    this.description = description;
    this.location = location;
    this.phoneNumber = phoneNumber;
    this.free = free;
    this.affordable = affordable;
    this.expensive = expensive;
    this.tag = tag;
    return this;
}

