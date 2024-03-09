console.log("Hello World");

// Get the emoji container
let emoji_container = document.getElementById("emoji_container");

function capitalizeFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function displayEmojis(emojis) {
    emoji_container.innerHTML = ""; // Clear previous content
    emojis.forEach(emoji => {
        // Create new row
        let new_row = document.createElement("tr");

        // Create columns for emoji, aliases, and description
        let emoji_cell = document.createElement("td");
        let aliases_cell = document.createElement("td");
        let description_cell = document.createElement("td");
        
        // Set text content for each cell
        emoji_cell.innerText = emoji.emoji;
        aliases_cell.innerText = capitalizeFirstLetter(emoji.aliases.join(", ")); // Capitalize first letter of aliases
        description_cell.innerText = capitalizeFirstLetter(emoji.description); // Capitalize first letter of description

        // Append cells to the row
        new_row.appendChild(emoji_cell);
        new_row.appendChild(aliases_cell);
        new_row.appendChild(description_cell);

        // Append row to the emoji container
        emoji_container.appendChild(new_row);
    });
}

// Display all emojis when the window is loaded
window.addEventListener('load', () => {
    displayEmojis(emojiList);
});

// Prevent default form submission and handle search
document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let searchQuery = document.getElementById("search_field").value.toLowerCase();
    let filteredEmojis = emojiList.filter(emoji => 
        emoji.aliases.join(" ").toLowerCase().includes(searchQuery)
    );
    displayEmojis(filteredEmojis);
});
