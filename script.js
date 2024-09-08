// Smooth scrolling for all anchor links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Get modal element
var modal = document.getElementById("chatbotModal");

// Get the button that opens the modal
var btn = document.querySelector(".rainbow-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle chat submission (This could be connected to a real chatbot later)
function submitQuestion() {
    var userInput = document.getElementById("userInput").value;
    var chatResponse = document.getElementById("chatResponse");

    if (userInput) {
        chatResponse.innerHTML = `<p>You asked: ${userInput}</p><p>Chatbot is thinking...</p>`;
        document.getElementById("userInput").value = ''; // Clear input
    }
}

