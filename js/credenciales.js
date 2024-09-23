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
};
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Asignar eventos a los botones
document.getElementById("openModal1").onclick = function() { openModal('modal1'); }
document.getElementById("openModal2").onclick = function() { openModal('modal2'); }
document.getElementById("openModal3").onclick = function() { openModal('modal3'); }

// Cerrar el modal al hacer clic fuera del contenido
window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}