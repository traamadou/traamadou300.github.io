

    // Message quand on clique sur la photo 
    const photo = document.querySelector('.photo img');
    photo.addEventListener('click', function() {
        alert("C'est moi sur la photo, Ravi de faire votre connaissance 😊.");
    });


    // Contacts

    function envoyerMessage() {
        document.getElementById("confirmation").innerText = "Votre message est envoyé.";
    }


