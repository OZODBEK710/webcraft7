const instagramLink = document.getElementById("instagram-link");

if (instagramLink) {
    instagramLink.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Uzr, hozirchalik Instagram sahifamizni ochganimiz yo‘q.");
    });
}
