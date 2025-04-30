function handleFormSubmit(event) {
	event.preventDefault(); // Prevent default form submission

	// Get the email input value (optional, for validation or logging)
	const emailInput = event.target.querySelector('input[name="email"]').value;

	// Show SweetAlert2 success alert
	Swal.fire({
		title: "Success!",
		text: `You’ve joined the Arcane Circle, ${emailInput}! Enjoy 25% off your first purchase!`,
		icon: "success",
		confirmButtonText: "Explore Artifacts",
		confirmButtonColor: "#b5838d",
		background: "#2b2925", // Match your site's background
		color: "#d9c9a1", // Match your site's text color
		timer: 5000, // Auto-dismiss after 5 seconds
		timerProgressBar: true, // Show a progress bar
		didOpen: () => {
			Swal.getPopup().style.fontFamily = '"Cinzel Decorative", cursive'; // Match your font
		},
	}).then((result) => {
		if (result.isConfirmed) {
			// Optionally redirect or reset the form
			event.target.reset(); // Reset the form after confirmation
		}
	});
}
