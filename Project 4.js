/********w************
    
	Project 4 Website
	Name: Angelo Nadres 
	Date: 2023-04-23
	Description: JavaScript configuration for a better markup

*********************/

function validate(e) {
	//	Hides all error elements on the page
	hideAllErrors();

	//	Determine if the form has errors
	if (formHasErrors()) {
		// 	Prevents the form from submitting
		e.preventDefault();
		return false;
	}

	return true;
}


function resetForm(e) {
	if (confirm('Clear survey?')) {
		hideAllErrors();
		document.getElementById("name").focus();

		return true;
	}


	e.preventDefault();
	return false;
}

function formHasErrors() {
	let displayedError = false;
		// Show error if name text is blank
		if (document.getElementById("name").value == "") {
			
			document.getElementById("name_error").style.display = "block";
			
			if(!displayedError) {
				document.getElementById("name").focus();
			}

			displayedError = true;
		}


		// Show error if phone number is invalid or blank
		let phonenumberRegex = /^(\(\+[0-9]{2}\))?([0-9]{3}-?)?([0-9]{3})\-?([0-9]{4})(\/[0-9]{4})?$/
		
		if (document.getElementById("phonenumber").value == "") {
			
			document.getElementById("phonenumber_error").style.display = "block";
			
			if(!displayedError) {
				document.getElementById("phonenumber").focus();
			}

			displayedError = true;
		}
		else if (!phonenumberRegex.test(document.getElementById("phonenumber").value)) {
			
			document.getElementById("phonenumberformat_error").style.display = "block";

			if(!displayedError) {
				document.getElementById("phonenumber").focus();
			}
			
			displayedError = true;
		}

		let emailAddressRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		
		if (document.getElementById("email").value == "") {
			
			document.getElementById("email_error").style.display = "block";

			if(!displayedError) {
				document.getElementById("email").focus();
			}
			
			displayedError= true;
		}
		else if (!emailAddressRegex.test(document.getElementById("email").value)) {
			
			document.getElementById("emailformat_error").style.display = "block";

			if(!displayedError) {
				document.getElementById("email").focus();
			}
			
			displayedError = true;
		}		

	return displayedError;
}

function hideAllErrors() {
	const errorFields = document.getElementsByClassName("error");
	for (const error of errorFields) {
		error.style.display = "none"
	}
}

function formFieldHasInput(fieldElement) {
	if (fieldElement.value == null || fieldElement.value.trim() == "") {
		// Invalid entry
		return false;
	}

	return true;
}

function load() {
	
	document.getElementById("survey_form").addEventListener("submit", validate);

	document.getElementById("survey_form").reset();

	// Add event listener for our custom form submit function
	document.getElementById("survey_form").addEventListener("reset", resetForm);

}

// Add the event listener for the document load
document.addEventListener("DOMContentLoaded", load);
