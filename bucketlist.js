// Function to add a new item to the bucket list
function addingItem() {
    const input = document.getElementById('bucketInput');
    const itemText = input.value.trim();

    if (itemText === "") {
        alert("Please enter an item before you add.");
        return;
    }

    // Create a new list item element
    const li = document.createElement('li');
    li.textContent = itemText;

    // Create a delete button for the item
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.onclick = function() {
        li.remove();
    };

    // Append the delete button to the list item
    li.appendChild(deleteButton);

    //This code will Add the new item to the bucket list
    document.getElementById('bucketList').appendChild(li);

    // Clearing  the input field after adding to allow a new item be created
    input.value = "";
}

// Optional: Allow pressing Enter to add an item
document.getElementById('bucketInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addingItem();
    }
});
