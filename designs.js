// When size is submitted by the user, call makeGrid()
//Get the table to fill with the grid
const tableGrid = document.querySelector('table');
 // Select size input
const inputHdight =  document.getElementById('inputHeight');
const inputWidth = document.getElementById("inputWidth");

function makeGrid() {
// Your code goes here!
    //Clear the table every time the submit button is pushed
    let table = tableGrid;
    let height = inputHdight.value;
    let width = inputWidth.value;

    table.innerHTML = "";
    
    for (let j = 0; j < height; j++) {
        let tr = document.createElement('tr');
        //The table row is fo the height of the grid
        for (let i = 0; i < width; i++) {
            //A nested loop to fill each row wioth the user selected width
            let newEl = document.createElement('td');
            //Event listener to change the color when user clicks a square
            newEl.addEventListener('click', function turnBlue(element) {
                // Select color input
                newEl.style.background = document.getElementById("colorPicker").value;
            });
            //add each new grid to the parent row
            tr.appendChild(newEl);
        }
        //add each row to the parent table
        table.appendChild(tr);
    }
}
