const section7Data = {
    1: "The Network Root: Who is feeding the child's soul? The court looks at the true, lived bond, not just the title, to ensure the strongest emotional support network remains.",
    2: "The Commitment Check: Does the parent truly want the 'Custom Cupcake,' or are they just fighting to win? The court assesses the commitment and genuine attitude toward the child's needs.",
    3: "The Baking Tools: This is the capacity to provide a stable, stimulating environment—not just financially, but emotionally. Can they provide the intellectual 'flour' and emotional 'sugar'?",
    // ... continue listing all 14 factors here, using the ID (the number) as the key ...
    14: "The Finality Goal: The court aims for a decision that settles the matter and stops the cycle of legal fighting. Constant court battles are stressful and damage the child's stability.",
};

// Next Week's Task: Adding the interactive code below this line.

// Function to handle the click event and display the data
const factorsList = document.getElementById('factors-list');

factorsList.addEventListener('click', function(event) {
    // Check if the clicked item is one of the factors
    const clickedFactor = event.target.closest('.factor');
    if (clickedFactor) {
        // Get the unique ID from the data attribute
        const factorId = clickedFactor.getAttribute('data-factor-id');
        
        // Retrieve the Custom Cupcake Context using the ID
        const context = section7Data[factorId];

        // Use a simple alert box to display the context (The Bot's pop-up!)
        if (context) {
            alert(`Section 7 Factor ${factorId}:\n\n${context}`);
        }
    }
});
