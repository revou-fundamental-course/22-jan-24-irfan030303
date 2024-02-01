document.addEventListener('DOMContentLoaded', function() {
    const inputName = document.getElementById('input-name');
    const inputEmail = document.getElementById('input-email');
    const selectFruit = document.getElementById('fruits');
    const button = document.getElementById('tombol-kirim');
    const nameError = document.getElementById('name-error');

    button.addEventListener('click', function() {
        let name = inputName.value;
        let email = inputEmail.value;
   

        if (!name || !email) {
            nameError.classList.add('error-message');
            nameError.innerText = "Isi data";
        } else {
            nameError.classList.remove('error-message');
            nameError.innerText = "";

            console.log("Name:", name);
            console.log("Email:", email);
           
        }
    });

    var slideIndex = 0;

    
    setInterval(function() {
        plusDivs(1);
    }, 2000);

    function plusDivs(n) {
        showDivs(slideIndex += n);
    }

    function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("image-gallery")[0].getElementsByTagName("img");
        if (n >= x.length) { 
            slideIndex = 0;
        }
        if (n < 0) { 
            slideIndex = x.length - 1;
        }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex].style.display = "block";
    }
});
