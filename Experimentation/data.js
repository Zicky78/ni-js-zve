const resources = [];

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










function resource(hlink, imgSrc, name, description, location, phoneNumber, free, affordable, expensive, career) {
    this.hlink = hlink;
    this.imgSrc = imgSrc;
    this.name = name;
    this.description = description;
    this.location = location;
    this.phoneNumber = phoneNumber;
    this.free = free;
    this.affordable = affordable;
    this.expensive = expensive;
    this.career = career;
    return this;
}

