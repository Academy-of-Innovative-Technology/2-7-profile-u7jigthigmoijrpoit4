/* Use the profile below */

var profile = {
    bio: {
        first: "Adrianne",
        last: "Lenker",
        title: "Musician",
        about: "Adrianne Lenker is an American singer-swongwriter/guitarist and the frontwoman of the band Big Thief. She is also a solo artist, realeasing multiple LPs under her name."
    }, 

    social: [
        { facebook: "https://www.facebook.com/adriannelenkermusic/"},
        { X: "https://x.com/AdrianneLenker?lang=en" },
        { youtube: "https://www.youtube.com/channel/UCiKxQx4KdX-s903aZMDj7Hg" },
        { linkedIn: "https://media.istockphoto.com/id/134843485/vector/confused-emoticon.jpg?s=612x612&w=0&k=20&c=GnHI36kUMFWfl2FAFzDnGUiVSswjUXtVx46Up2qPwDc=" }
    ],
    edu: {
        name: "Berklee College of Music",
        major: "Songwriting/Music B.M"
    },
    career: {
        company: "Professional musician and leader of Big Thief",
        title: "Frontwoman",
        role: "Lead vocalist and guitarist"
    },

    skills: [
        { title: "songwriting", level: 100 },
        { title: "guitar", level: 100 },
        { title: "vocals", level: 100 }
    ]
};


let name = document.getElementById("name").innerHTML = profile.bio.first+ " "+ profile.bio.last;
let img = document.getElementById("image").src = "https://upload.wikimedia.org/wikipedia/commons/d/d9/Adrianne_Lenker_%2853914800251%29.jpg";
let info = document.getElementById("info").innerHTML = profile.bio.title + " | " + profile.bio.about;
let facebook = document.getElementById("facebook").href = profile.social[0].facebook;
let twitter = document.getElementById("twitter").href = profile.social[1].X;
let youtube = document.getElementById("youtube").href = profile.social[2].youtube;
let linkedin = document.getElementById("linkedin").href = profile.social[3].linkedIn;
let paragraph1 = document.getElementById("paragraph1").innerHTML = "Adrianne Elizabeth Lenker (born July 9, 1991) is an American musician. She is the lead vocalist, guitarist and principal songwriter of the band Big Thief, as well as an established solo artist. She has released several solo albums, including Abysskiss (2018), Songs and Instrumentals (both 2020), and Bright Future (2024), the latter of which earned her a nomination for the Grammy Award for Best Folk Album.";
let paragraph2 = document.getElementById("paragraph2").style.display = "none";
let educationParagraph = document.getElementById("education-paragraph").innerHTML = profile.edu.name + ", " + profile.edu.major;
let careerParagraph = document.getElementById("career-paragraph").innerHTML = profile.career.company + " | " + profile.career.title + ", " + profile.career.role;
let experienceParagraph = document.getElementById("experience-paragraph").innerHTML = "Lenker released her debut album in 2006, marking her experience as a musician and songwriter for most of her life.";
let bar1Title = document.getElementById("bar1-title").innerHTML = profile.skills[0].title;
let bar2Title = document.getElementById("bar2-title").innerHTML = profile.skills[1].title;
let bar3Title = document.getElementById("bar3-title").innerHTML = profile.skills[2].title;
let skills = document.getElementById("skills-description").innerHTML = "In January 2024, Lenker partnered with School of Song to teach a four-week course on songwriting, which focused on ways to expand creativity through different guitar techniques and lyrical focuses.[27] In the same month, Lenker also announced her sixth studio album, Bright Future, which was released via 4AD on March 22, 2024.[28";
let bar1Percentage = document.getElementById("bar1-percentage").innerHTML = profile.skills[0].level + "%";
let bar2Percentage = document.getElementById("bar2-percentage").innerHTML = profile.skills[1].level + "%";
let bar3Percentage = document.getElementById("bar3-percentage").innerHTML = profile.skills[2].level + "%";
let bar1 = document.getElementById("bar1").style.width = profile.skills[0].level + "%";
let bar2 = document.getElementById("bar2").style.width = profile.skills[1].level + "%";
let bar3 = document.getElementById("bar3").style.width = profile.skills[2].level + "%";
