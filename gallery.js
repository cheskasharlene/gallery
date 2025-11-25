(function () {
    if (!Array.isArray(window.players)) return;
    var container = document.getElementById("players-container");
    if (!container) return;

    players.forEach(function (p, i) {
        container.innerHTML +=
            '<div class="col-12 col-md-6 col-lg-4 mb-4">' +
            '<div class="card h-100 shadow-sm player-card" id="player' + i + '">' +
            '<img src="' + p.image + '" class="card-img-top" alt="' + p.name + '">' +
            '<div class="card-body d-flex flex-column">' +
            '<h5 class="card-title">' + p.name + '</h5>' +
            '<p class="card-text text-muted mb-2"><small>' + p.role + '</small></p>' +
            '<p class="card-text">' + p.description + '</p>' +
            '</div>' +
            '</div>' +
            '</div>';
    });

    var navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.forEach(function (other) {
                other.classList.remove("active");
                other.removeAttribute("aria-current");
            });
            this.classList.add("active");
            this.setAttribute("aria-current", "page");
        });
    });
})();
