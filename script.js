// --- 1. LEGAL DATA: The Custom Cupcake Context (Section 7 Explanations) ---
const section7Data = {
    1: "The Network Root: Who is feeding the child's soul? The court looks at the true, lived bond, not just the title, to ensure the strongest emotional support network remains.",
    2: "The Commitment Check: Does the parent truly want the 'Custom Cupcake,' or are they just fighting to win? The court assesses the commitment and genuine attitude toward the child's needs.",
    3: "The Baking Tools: This is the capacity to provide a stable, stimulating environment—not just financially, but emotionally. Can they provide the intellectual 'flour' and emotional 'sugar'?",
    4: "The Recipe Shock: Changes, like moving or separating from a sibling, are major ingredients. The court must predict the disruption and ensure the final product isn't damaged by instability.",
    5: "The Logistics Barrier: If contact is too difficult or expensive, it limits the child's right to maintain those relationships. The court must ensure access isn't sacrificed to impractical logistics.",
    6: "The Cultural Frosting: The child needs to be rooted in their culture and family traditions. The court ensures that decisions respect and maintain the child's cultural identity and family connections.",
    7: "The Flavour Profile: This is the most personalized part. The court looks at who the child is right now—their maturity dictates how much their wishes are prioritized.",
    8: "The Nurturing Environment: The court is the ultimate protector of the child's holistic growth. The decision must foster their security and ensure they are given every chance to develop fully.",
    9: "The Special Mix: If the child has a disability, the decision-making process must specifically accommodate their unique needs and ensure they get the specialized resources required.",
    10: "The Health Check: The court must ensure the final decision supports the child’s ongoing health requirements and access to specialized medical care related to their illness.",
    11: "The Stable Cake Tin: Every child deserves stability. If a traditional family isn't possible, the court seeks the next best thing—an environment that is reliably caring and family-like.",
    12: "The Protection Order: This is the 'Safety Root' in action. The court's first and fiercest duty is to eliminate or minimize any threat of physical or psychological harm from any source.",
    13: "The Rotten Ingredient: Evidence of family violence is a major red flag. The court must act decisively to protect the child from exposure to, or involvement in, that toxic environment.",
    14: "The Finality Goal: The court aims for a decision that settles the matter and stops the cycle of legal fighting. Constant court battles are stressful and damage the child's stability.",
};

// --- 2. INTERACTIVITY LOGIC: The Bot's Action ---
const factorsList = document.getElementById('factors-list');

factorsList.addEventListener('click', function(event) {
    // Ensure we only listen to clicks on the list items
    const clickedFactor = event.target.closest('.factor');
    if (clickedFactor) {
        // Get the unique ID from the list item
        const factorId = clickedFactor.getAttribute('data-factor-id');
        
        // Retrieve the Custom Cupcake Context
        const context = section7Data[factorId];

        // Display the context using a pop-up alert box
        if (context) {
            alert(`Section 7 Factor ${factorId}:\n\n${context}`);
        }
    }
});
