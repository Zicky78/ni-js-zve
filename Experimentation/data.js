const resources = [];

//Geekwise
const geekwiseResource = new resource(
    "https://geekwiseacademy.com/",
    "./geekwise.jpg",
    "Geekwise Academy",
    "Geekwise Academy offers afordable HTML, CSS, and Javascript coding courses for those who want to learn how to code",
    "700 Van Ness Ave, Fresno, CA 93721",
    "(559) 500-3305 ext. 222",
    false,
    true,
    true,
    "Computer Science"
)

resources.push(geekwiseResource);

//Fresno City College
const fccResource = new resource(
    "https://www.fresnocitycollege.edu",
    "./fcc.png",
    "Fresno City College",
    "Fresno's best community college, offering many classes for career paths, and offering transfer opportunities to universities",
    "1101 E University Ave, Fresno, CA 93741",
    "(559) 442-4600",
    false,
    false,
    true,
    "School"
)

resources.push(fccResource);

//Clovis Community College
const cccResource = new resource(
    "https://www.cloviscollege.edu",
    "./ccc.jpg",
    "Clovis Community College",
    "Clovis' best community college, offering many classes for career paths, and offering transfer opportunities to universities",
    "10309 N Willow Ave, Fresno, CA 93730",
    "(559) 325-5200",
    false,
    false,
    true,
    "School"
)

resources.push(cccResource);

for ( i=0; i<3; i++ ) {
    console.log(resources[i]);
}


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

