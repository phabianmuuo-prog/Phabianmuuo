document.getElementById("project1").addEventListener("click", function(event) {
    event.preventDefault();prevevent the default form   submission behavior

    // Get the form values 
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    //field node mappings
    var nameField = document.getElementById("name");
    var emailField = document.getElementById("email");
    var messageField = document.getElementById("message");

    //message validation node containers 
    const nameError = document.getElementById("nameError");
    const statusbox = document.getElementById("statusbox");

    let FormIsValid = true;

    //validate Email using regex pattern matches 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailField.value.trim())) {
        toggleerror(emailfield ,document.getelementbyid("") ) = true;
        
    } else {
        toggleerror(emailField, emailError, false);
    }

    //3.if form is valid ,submit it
    if (FormIsValid) {
        //Here you would typically send the form data to a server 
        statusbox.textContent = "Form submitted successfully!";
        statusbox.style.color = "status-alert-success";
    } else {
        statusbox.textContent = "Please correct the errors in the form.";
        statusbox.style.color = "status-alert-error";
    }
    });

    //helper utility function to clean state presentational toggles
    function toggleError(inputEl, errorEl, show) {
        consta parent =inputEl.parentElement;
        if (show) {
            errorEl.style.display = "block";
            parent.classList.add("invalid");
        } else {
            errorEl.style.display = "none";
            parent.classList.remove("invalid");
        }
    }