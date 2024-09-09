document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener valores de los campos del formulario
  const email = document.getElementById('emailjs_name').value;
  const message = document.getElementById('emailjs_message').value;
  const btn = document.getElementById('button');

  // Función para validar el formato del correo electrónico
  function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
  }

  // Validar que los campos no estén vacíos y que el correo tenga un formato válido
  if (!email || !message) {
      Swal.fire({
          title: 'Error!',
          text: 'Por favor, completa todos los campos.',
          icon: 'error',
          confirmButtonText: 'OK'
      });
      return;
  }

  if (!validateEmail(email)) {
      Swal.fire({
          title: 'Error!',
          text: 'Por favor, introduce un correo electrónico válido.',
          icon: 'error',
          confirmButtonText: 'OK'
      });
      return;
  }

  // Si las validaciones pasan, se envía el formulario
  btn.value = 'Enviando...';

  const serviceID = 'default_service';
  const templateID = 'template_wve8dta';

  emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
          btn.value = 'Enviar';
          Swal.fire({
              title: '¡Mensaje Enviado!',
              text: '👋≧◉ᴥ◉≦!',
              imageUrl: '/img/correo.jpg', // Asegúrate de que la imagen esté en la misma carpeta que el archivo HTML
              imageWidth: 400,
              imageHeight: 200,
              imageAlt: 'Imagen de éxito',
              confirmButtonText: 'OK'
          });
      }, (err) => {
          btn.value = 'Enviar';
          Swal.fire({
              title: 'Error!',
              text: 'Ocurrió un error al enviar tu mensaje. Por favor, intenta nuevamente.',
              icon: 'error',
              confirmButtonText: 'OK'
          });
      });
});
