let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
function mostrarOcultarMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} ;
function createSkillBar(canvasId, percentage) {
    const canvas = document.getElementById(canvasId);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    
    const geometry = new THREE.BoxGeometry(1, percentage / 100, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    
    camera.position.z = 2;

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    animate();
}

document.addEventListener("DOMContentLoaded", function() {
    createSkillBar("skillCanvas1", 75);
    createSkillBar("skillCanvas2", 89);
    // Repite para cada habilidad...
});


// Funciones para controlar los videos
function playVideo(id) {
    document.getElementById(id).play();
}

function stopVideo(id) {
    var video = document.getElementById(id);
    video.pause();
    video.currentTime = 0;
}

// Funciones para manejar los modales
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Cerrar el modal si se hace clic fuera del contenido
window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}
window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
};
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('your_service_id', 'your_template_id', this)
        .then(function(response) {
            console.log('Mensaje enviado:', response);
        }, function(error) {
            console.error('Error al enviar mensaje:', error);
        });
});
function sendWhatsApp() {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const whatsappNumber = "1173602679";

    const url = `https://wa.me/${whatsappNumber}?text=Nombre:%20${encodeURIComponent(name)}%0AMensaje:%20${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Manejo del envío del formulario por correo electrónico
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const subject = `Mensaje de ${formData.get('name')}`;
    const body = `${formData.get('message')}%0A%0ADatos de contacto:%0AEmail: ${formData.get('email')}`;

    window.location.href = `mailto:giseleortizuriel@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
