document.addEventListener('DOMContentLoaded', () => {
    const radioBtns = document.getElementsByName("tripType");
    const returnDate = document.querySelectorAll('.select-date')[1];

    function toggleReturnDate() {
        if (radioBtns[0].checked) {
            returnDate.disabled = true;
            returnDate.value = '';
        } else {
            returnDate.disabled = false;
        }
    }

    toggleReturnDate();
    radioBtns.forEach(btn => {
        btn.addEventListener('change', toggleReturnDate);
    });
});
