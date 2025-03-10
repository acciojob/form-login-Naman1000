function getFormvalue() {
    //Write your code here
		  // Prevents the form from reloading the page

            let firstName = document.forms["form1"]["fname"].value.trim();
            let lastName = document.forms["form1"]["lname"].value.trim();

            if (!firstName || !lastName) {
                alert("Please enter both First Name and Last Name.");
                return;
            }

            alert(firstName + " " + lastName);
        }

