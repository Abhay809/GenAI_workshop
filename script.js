const facts = [
    "Alice can solve a Rubik's cube in under a minute.",
    "Bob has visited 15 countries.",
    "Charlie is a black belt in karate.",
    "Dana has a collection of over 100 comic books.",
    "Eli can play five musical instruments.",
    "Fiona has a twin brother.",
    "George once won a national science fair.",
    "Hannah speaks three languages fluently."
];

document.getElementById('revealFactButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('funFact').textContent = facts[randomIndex];
});
