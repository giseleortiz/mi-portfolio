document.getElementById("openModalBtn").onclick = function() {
    openModal('myModal');
}

// Cerrar modal cuando se hace clic en el botón de cerrar ('X')
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    }
}

// Cerrar modal cuando se hace clic fuera del contenido del modal
window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}

// Función para abrir el modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "flex"; // Usar "flex" si quieres centrar el contenido
    }
}