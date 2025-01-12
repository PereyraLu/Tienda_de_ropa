document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 


    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const micheckbox = document.getElementById('agree');


    
    const lettersPattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    


    if (name === '' || !lettersPattern.test(name)) {
        alert('Por favor, ingresa un nombre válido (solo letras y espacios).');
        return;
    }
    
    if (surname === '' || !lettersPattern.test(surname)) {
        alert('Por favor, ingresa un apellido válido (solo letras y espacios).');
        return;
    }
      
        
    if (!emailPattern.test(email)) {
        alert('Por favor, ingresa un email válido.');
        return;
    }

    if (phone === '' || !/^\d+$/.test(phone)) {
        alert('Por favor, ingresa un teléfono válido (solo números).');
        return;
    }

    
    if (message === '' || !lettersPattern.test(message)) {
        alert('Por favor, ingresa un mensaje.');
        return;
    }

    
    if (!micheckbox.checked){
        alert('Debe aceptar los terminos y condiciones para continuar.')
        return;
    }
    

    alert('Gracias por tu mensaje, pronto nos pondremos  en contacto contigo.');
    
    document.getElementById('contactForm').reset();
});