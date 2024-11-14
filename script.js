document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    const formMessage = document.getElementById('form-message');
    formMessage.textContent = `Thank you, ${name}. Your message has been sent!`;
    
    // send to email address
    const emailLink = `mailto:alahadhoriy@gmail.com?subject=Contact Form Submission&body=${message}`;
    window.open(emailLink, '_blank');


    // Add email to email list
    const emailList = JSON.parse(localStorage.getItem('emailList')) || [];
    emailList.push(email);
    localStorage.setItem('emailList', JSON.stringify(emailList));

    // Check if email is already in the list
    if (emailList.includes(email)) {
        formMessage.textContent = 'You have already submitted this email address. Thank you!';
    } else {
        formMessage.textContent = `Thank you, ${name}. Your message has been sent!`;
    }

    
   
    
    // Clear form fields
    document.getElementById('contact-form').reset();
});

