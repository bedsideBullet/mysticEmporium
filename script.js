function handleFormSubmit(event) {
	event.preventDefault();

	const emailInput = event.target.querySelector('input[name="email"]').value;

	Swal.fire({
		title: "Success!",
		text: `You’ve joined the Arcane Circle, ${emailInput}! Enjoy 25% off your first purchase!`,
		icon: "success",
		confirmButtonText: "Explore Artifacts",
		confirmButtonColor: "#b5838d",
		background: "#2b2925",
		color: "#d9c9a1",
		timer: 5000,
		timerProgressBar: true,
		didOpen: () => {
			Swal.getPopup().style.fontFamily = '"Cinzel Decorative", cursive';
			Swal.getConfirmButton().focus();
		},
		focusConfirm: true,
		allowOutsideClick: false,
	}).then((result) => {
		if (result.isConfirmed) {
			event.target.reset();
			document.querySelector('input[name="email"]').focus();
		}
	});
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();
		const targetId = this.getAttribute("href").substring(1);
		const targetElement = document.getElementById(targetId);
		targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
	});
});
