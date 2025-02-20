

// 1) searching box
function filterTable(inputId, tableId) {
    const input = document.getElementById(inputId);
    const filter = input.value.toLowerCase();
    const table = document.getElementById(tableId);
    const tr = table.getElementsByTagName("tr");

    for (let i = 1; i < tr.length; i++) {
        const td = tr[i].getElementsByTagName("td")[3];
        if (td) {
            const txtValue = td.textContent || td.innerText;
            if (txtValue.toLowerCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

 
// 2) Hide the cartoon style table
document.addEventListener('DOMContentLoaded', function() {
    const styleSelect = document.querySelector('#stylegroup + select'); // Select the <select> after the label
    const generalStyleTable = document.getElementById('generalStyleTable'); // Get the general style table
    const cartoonStyleTable = document.getElementById('cartoonStyleTable'); // Get the cartoon style table
    const generalStyleTitle = document.querySelector('h2.title'); // Get the general style title
    const styleNameSelect = document.getElementById('stylename'); // Get the style name select

    // Set initial visibility
    generalStyleTable.style.display = 'table'; // Show general style table initially
    cartoonStyleTable.style.display = 'none'; // Hide cartoon style table initially
    generalStyleTitle.style.display = 'block'; // Show general style title initially

    // Populate style names from generalStyleTable initially
    populateStyleNames(generalStyleTable);

    styleSelect.addEventListener('change', function() {
        if (styleSelect.value === 'General Style') {
            generalStyleTable.style.display = 'table'; // Show the general style table
            cartoonStyleTable.style.display = 'none'; // Hide the cartoon style table
            generalStyleTitle.style.display = 'block'; // Show the general style title

            // Populate style names from generalStyleTable
            populateStyleNames(generalStyleTable);
        } else if (styleSelect.value === 'Cartoon Style') {
            generalStyleTable.style.display = 'none'; // Hide the general style table
            cartoonStyleTable.style.display = 'table'; // Show the cartoon style table
            generalStyleTitle.style.display = 'none'; // Hide the general style title

            // Populate style names from cartoonStyleTable
            populateStyleNames(cartoonStyleTable);
        }
    });

    function populateStyleNames(table) {
        const styleNames = Array.from(table.querySelectorAll('tbody tr')).map(row => {
            return row.cells[1].textContent; // Assuming the style name is in the second column (index 1)
        });

        // Populate the style name select with the style names
        styleNameSelect.innerHTML = ''; // Clear existing options
        styleNames.forEach(name => {
            const option = document.createElement('option');
            option.value = name; // Set the value of the option
            option.textContent = name; // Set the display text of the option
            styleNameSelect.appendChild(option);
        });
    }
});


// 3)
function copyText() {
    // Get the paragraph element
    var paragraph = document.getElementById("Promptinput");
    
    // Create a range object
    var range = document.createRange();
    range.selectNode(paragraph);
    
    // Clear any current selections
    window.getSelection().removeAllRanges();
    
    // Add the new range to the selection
    window.getSelection().addRange(range);
    
    // Copy the selected text to the clipboard
    document.execCommand("copy");
    
    // Clear the selection (optional)
    window.getSelection().removeAllRanges();
    
    // Optionally, you can alert the user that the text has been copied
    alert("Text copied to clipboard!");
}


// 4) Function to update the displayed prompt and image based on selected style
function updateDisplay() {
    const styleSelect = document.getElementById('stylename');
    const selectedStyleName = styleSelect.value;
    const styleGroupSelect = document.querySelector('#stylegroup + select');
    const selectedStyleGroup = styleGroupSelect.value;

    let selectedStyle;

    // Determine which style array to use based on the selected group
    if (selectedStyleGroup === 'General Style') {
        selectedStyle = generalStyles.find(style => style.name === selectedStyleName);
    } else if (selectedStyleGroup === 'Cartoon Style') {
        selectedStyle = cartoonStyles.find(style => style.name === selectedStyleName);
    }

    // Get user input from the input field
    const userInput = document.getElementById('inputtext').value;

    // Update the prompt and image if a style is selected
    if (selectedStyle) {
        // Combine user input with the selected style's prompt
        document.getElementById('Promptinput').textContent = userInput ? userInput + ' - ' + selectedStyle.prompts : selectedStyle.prompts;
        document.getElementById('styleImage').src = selectedStyle.image;
        document.getElementById('styleImage').alt = selectedStyle.name; // Update alt text
    } else {
        document.getElementById('Promptinput').textContent = 'Select a style to see the prompt and image.';
        document.getElementById('styleImage').src = ''; // Clear image if no style is selected
    }
}

// Add event listener to style name select
document.getElementById('stylename').addEventListener('change', updateDisplay);

// 5) Add event listener to style name select
document.getElementById('goToTop').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll effect
    });
});

// 6) Get references to the elements
const showPromptsButton = document.getElementById('ShowPrompts');
const showStyleButton = document.getElementById('Showstyle');
const container = document.querySelector('.container'); // Get the container element
const container3Table = document.getElementById('container3Table');
const generalStyleTable = document.getElementById('generalStyleTable');
const cartoonStyleTable = document.getElementById('cartoonStyleTable');

// Function to show prompts and hide styles
function showPrompts() {
    container.style.display = 'block'; // Show the prompts container
    generalStyleTable.style.display = 'none'; // Hide general style table
    cartoonStyleTable.style.display = 'none'; // Hide cartoon style table
}

// Function to show styles and hide prompts
function showStyles() {
    container.style.display = 'none'; // Hide the prompts container
    generalStyleTable.style.display = 'block'; // Show general style table
    cartoonStyleTable.style.display = 'block'; // Show cartoon style table
}

// Add event listeners to the buttons
showPromptsButton.addEventListener('click', showPrompts);
showStyleButton.addEventListener('click', showStyles);
