auth.onAuthStateChanged(user => {
    if (!user) {
        window.location.href = "login.html";
    }
});
