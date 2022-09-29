
class Notecard {
    title;
    Body;
    imageURL;
    element;

    constructor (title, body, img, elementID) {
        this.title= title;
        this.body = body;
        this.imageURL= img;
        this.element = document.querySelector(elementID); /*this is grabbing the element from the HTML */
    }


    updateElement() {

        let noteTitleElement = this.element.querySelector(".note-title");//this will find the note title element inside our notecard, in the HTML//
        //you are using query selector to go one level deeper//
        noteTitleElement.innerText = this.title;

        let noteBodyElement = this.element.queryselector('.note-body');

        // let noteBodyElement = this.element.queryselector('.note-thumbnail');

    }

}

//this is a class with a function that creates a new object//

let notecardOne = new Notecard(
    "this is the first note",
    "here is the body of the first note",
    "assets/warhol-frog.png",
    "#notecard-one");

let notecardTwo = new Notecard(
    "this is the 2nd note",
    "here is the body of the 2nd note",
    "assets/warhol-orangutan.png",
    "#notecard-two"); 

let notecardOThree = new Notecard(
    "this is the 3rd note",
     "here is the body of the 3rd note",
    "assets/warhol-butterfly.png",
    "#notecard-three");


let notecards = [
    notecardOne,
    notecardTwo,
    notecardOThree,
]

// for (let i=0; i <notecards.length; 1 += 1) {
//     let notecard = notecard[i];
//     notecard.updateElement();
// }