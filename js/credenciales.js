var modal = document.getElementById("myModal");
var openModalBtn = document.getElementById("openModalBtn");
var closeModal = document.getElementsByClassName("close")[0];

// Open modal when button is clicked
openModalBtn.onclick = function() {
    modal.style.display = "flex";
}

// Close modal when 'X' is clicked
closeModal.onclick = function() {
    modal.style.display = "none";
}

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}