function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function generateTitle() {
    switch (getRandomInt(6)) {
        case 0:
            section1.innerHTML = "Professional";
            break;
        case 1:
            section1.innerHTML = "Wonderful";
            break;
        case 2:
            section1.innerHTML = "Chief";
            break;
        case 3:
            section1.innerHTML = "Ambassador";
            break;
        case 4:
            section1.innerHTML = "Operator";
            break;
        case 5:
            section1.innerHTML = "Digital";
    }
    switch (getRandomInt(6)) {
        case 0:
            section2.innerHTML = "Of";
            break;
        case 1:
            section2.innerHTML = "Assistant Of";
            break;
        case 2:
            section2.innerHTML = "Intern Of";
            break;
        case 3:
            section2.innerHTML = "Of Football";
            break;
        case 4:
            section2.innerHTML = "Of Soccer";
            break;
        case 5:
            section2.innerHTML = "Of Basketball";
    } 
    switch (getRandomInt(6)) {
        case 0:
            section3.innerHTML = "Sports";
            break;
        case 1:
            section3.innerHTML = "People";
            break;
        case 2:
            section3.innerHTML = "Elevators";
            break;
        case 3:
            section3.innerHTML = "FBI";
            break;
        case 4:
            section3.innerHTML = "Mops";
            break;
        case 5:
            section3.innerHTML = "Hairs";
    } 
}