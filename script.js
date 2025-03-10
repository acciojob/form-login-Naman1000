function getFormvalue(event) {
    //Write your code here
		 event.preventDefault(); // Prevents the form from reloading the page

            let firstName = document.getElementByName("fname").value.trim();
            let lastName = document.getElementByName("lname").value.trim();

            if (!firstName || !lastName) {
                alert("Please enter both First Name and Last Name.");
                return;
            }

            alert(firstName + " " + lastName);
        }
}
