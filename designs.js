// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    document.querySelector('h2').classList.add('.rainbow-td');
// Your code goes here!
    var Table = document.getElementById("pixelCanvas");
    Table.innerHTML = "";

    let hdight =  document.getElementById('inputHeight').value;
    let width = document.getElementById("inputWidth").value;
    // let submit = document.querySelector('input[type=submit]');
    let colorChoice = document.getElementById("colorPicker").value;

    let tableGrid = document.querySelector('table');
    for (let j = 0; j < hdight; j++) {
        let tr = document.createElement('tr');
        
        for (let i = 0; i < width; i++) {
            let newEl = document.createElement('td');
            newEl.addEventListener('click', function turnBlue(element) {
                newEl.style.background = colorChoice;
            });
            tr.appendChild(newEl);
        }
        tableGrid.appendChild(tr);
    }
}
