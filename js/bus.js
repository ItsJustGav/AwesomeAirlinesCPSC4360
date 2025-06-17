document.addEventListener('DOMContentLoaded', () => {
    const radioBtns = document.getElementsByName("check"); // or "tripType" if you renamed it
    const returnDate = document.querySelectorAll('.select-date')[1]; // the 2nd date input

    function toggleReturnDate() {
        if (radioBtns[0].checked) { // One-way selected
            returnDate.disabled = true;
            returnDate.value = ''; // Clear out return value
        } else {
            returnDate.disabled = false;
        }
    }

    // Run on load
    toggleReturnDate();

    // Update when toggling radio buttons
    radioBtns.forEach(btn => {
        btn.addEventListener('change', toggleReturnDate);
    });
});
