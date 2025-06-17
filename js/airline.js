document.addEventListener('DOMContentLoaded', () => {
    const radioBtns = document.getElementsByName("check"); // name used in your airline form
    const returnDate = document.querySelectorAll('.select-date')[1]; // assumes return date is second

    function toggleReturnDate() {
        if (radioBtns[0].checked) { // Roundtrip
            returnDate.disabled = false;
        } else { // One-Way
            returnDate.disabled = true;
            returnDate.value = '';
        }
    }

    // Initial toggle and listener setup
    toggleReturnDate();
    radioBtns.forEach(btn => {
        btn.addEventListener('change', toggleReturnDate);
    });

    // Optional: Add basic "Review" alert
    document.querySelector('.flight').addEventListener('click', () => {
        const from = document.querySelectorAll('.form-control')[0].value;
        const to = document.querySelectorAll('.form-control')[1].value;
        const depart = document.querySelectorAll('.select-date')[0].value;
        const returnVal = document.querySelectorAll('.select-date')[1].value;

        alert(`You're booking a flight from ${from} to ${to} on ${depart}${returnVal ? ` and returning ${returnVal}` : ''}.`);
    });
});
