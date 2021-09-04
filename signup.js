const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const phoneValue = phone.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();

	if (usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}

	if (emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}

	if (phoneValue == '') {
		setErrorFor(phone, 'Email cannot be blank');
	} else if (!isPhone(phoneValue)) {
		setErrorFor(phone, 'Not a valid phone number');
	} else {
		setSuccessFor(phone);
	}

	if (isStrongPass(passwordValue)) {
		setStrong(password, 'Strong');
	} else if (isMediumPass(passwordValue)) {
		setMedium(password, 'Medium');
	} else {
		setWeak(password, 'Weak');
	}

	if (password2Value === '') {
		setErrorFor(password2, 'Password check cannot be blank');
	} else if (passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else {
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPhone(phone) {
	return /^([0-9]{3})?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone)
}

// strong password
function isStrongPass(pass) {
	return /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(pass)
}

function setStrong(input, message) {
	input.style.borderColor = "#2ecc71";
	const passControl = input.parentElement;
	const small = passControl.querySelector('small');
	small.innerText = message;
	small.style.color = "#2ecc71";
	small.style.visibility = "visible";
}

// medium password
function isMediumPass(pass) {
	return /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/.test(pass);
}

function setMedium(input, message) {
	input.style.borderColor = "blue";
	const passControl = input.parentElement;
	const small = passControl.querySelector('small');
	small.innerText = message;
	small.style.color = "blue";
	small.style.visibility = "visible";
}

// weak password
function setWeak(input, message) {
	input.style.borderColor = "#e74c3c";
	const passControl = input.parentElement;
	const small = passControl.querySelector('small');
	small.innerText = message;
	small.style.color = "#e74c3c";
	small.style.visibility = "visible";
}