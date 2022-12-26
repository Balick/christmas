// create a new div element
const mainContainer = document.createElement('div');
// number of div elements to add in the main container
const divElementsNb = 150;
let divElementsCounter = 0;

// attributes id for the main container
mainContainer.id = 'snow-container';

let timerID = setInterval(function() {
    let container = document.createElement('div');
    const spanElements = generateSpanElements();

    // add class name to the container
    container.className = 'container';

    // add span elements to the container
    addSpanElements(spanElements, container);
    // set the css styles for the span elements
    spanElements.map(spanElement => setCssStyles(spanElement));
    // add container div element to the main container
    mainContainer.append(container);
    // increment the divElements counter
    divElementsCounter++;
    // stop the interval when the divElementsCounter is equal to the divElementsNb
    divElementsCounter === divElementsNb && clearInterval(timerID);
},100)

// add the main container to the body
document.body.appendChild(mainContainer);

/**
 * @param {HTMLSpanElement} element
 */
function setCssStyles(element) {
    // generate random values for marginTop and marginLeft
    const marginTopValue = Math.floor(Math.random() * 10);
    const marginLeftValue = Math.floor(Math.random() * 10);

    // set the animationName, marginTop and marginLeft values
    element.style.marginTop = `-${marginTopValue}rem`;
    element.style.marginLeft = `${marginLeftValue}rem`;

    element.className += ' span';
    //element.style.animationName = 'DownAnimation'
}

/**
 * @description generate an array of span elements
 * @param {number} numberOfElements number of span elements to generate
 * @returns {HTMLSpanElement[]} array of span elements
 */
function generateSpanElements(numberOfElements = 100) {
    const spanElements = [];

    // generate 100 (by default) span elements
    for (let i = 0; i < numberOfElements; i++) {
        const className = generateRandomClassName();
        const spanElement = document.createElement('span');

        spanElement.className = className; // add class name to the span element
        spanElements.push(spanElement); // add span element to the array
    }

    return spanElements;
}

/**
 * @description add span elements to the container
 * @param {HTMLSpanElement} spanElements 
 * @param {HTMLElement} container 
 */
function addSpanElements(spanElements, container) {
    spanElements.map(spanElement => container.appendChild(spanElement));
}

/**
 * @description generate a random class name
 * @returns {string} random class name
 */
function generateRandomClassName() {
    // list of classes to add to the span element
    const classList = ['bull-redlight-small', 'bull-redlight', 'bull-white', 'bull-red-white'];
    // generate a random class name
    const randomClassName = classList[Math.floor(Math.random() * classList.length)];
    return randomClassName;
}
