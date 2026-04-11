// Funktion für das Dropdown-Menü
function toggleMenu(event, menuId) {
    event.preventDefault(); // Verhindert, dass die Seite nach oben springt

    // Sucht das Untermenü und den Listenpunkt
    const subMenu = document.getElementById(menuId);
    const dropdownItem = event.currentTarget.parentElement;

    // Schaltet die Klassen zum Anzeigen/Verstecken und für den Pfeil um
    subMenu.classList.toggle('show');
    dropdownItem.classList.toggle('active');
}

// NEU: Funktion zum Ein- und Ausklappen der Sidebar
// Funktion zum Ein- und Ausklappen der Sidebar
function toggleSidebar() {
    document.body.classList.toggle('sidebar-collapsed');
}

// Funktion, um die Sidebar und das Video auf allen Seiten einzufügen
function loadSidebar(basePath) {
    // 1. VIDEO HINTERGRUND EINBAUEN
    const videoBackgroundHTML = `
        <video autoplay muted loop playsinline id="bg-video">
            <source src="${basePath}image/bgdrone.mp4" type="video/mp4">
        </video>
        <div id="video-overlay"></div>
    `;
    // Fügt das Video ganz am Anfang der Seite (im body) ein
    document.body.insertAdjacentHTML('afterbegin', videoBackgroundHTML);


    // 2. SIDEBAR EINBAUEN
    // NEU: Ein Toggle-Button wurde hinzugefügt
    const sidebarHTML = `
    <aside class="sidebar">
        <button class="toggle-btn" onclick="toggleSidebar()">
            <i class="fa-solid fa-bars"></i>
        </button>
        
        <div class="brand">
            <a href="${basePath}index.html"><img src="${basePath}image/Leonardo_Phoenix_09_Create_a_stylized_logo_for_the_esports_tea_3.jpg" alt="SynapseX Logo" class="sidebar-logo-img"></a>
            <h1 class="brand-title">SynapseX</h1>
        </div>
        
        <nav>
            <ul class="main-nav">
                <li><a href="${basePath}index.html#home"><i class="fa-solid fa-house"></i> <span class="nav-text">Startseite</span></a></li>
                <li><a href="${basePath}staff.html"><i class="fa-solid fa-users"></i> <span class="nav-text">Management</span></a></li>
                <li><a href="${basePath}index.html#teams"><i class="fa-solid fa-gamepad"></i> <span class="nav-text">Teams</span></a></li>
                <li><a href="${basePath}ergebnisse.html"><i class="fa-solid fa-trophy"></i> <span class="nav-text">Ergebnisse</span></a></li>
                <li><a href="${basePath}turniere.html"><i class="fa-solid fa-medal"></i> <span class="nav-text">Turniere</span></a></li>
                <li><a href="${basePath}content-partner.html" class="Content-link"><i class="fa-brands fa-twitch"></i> <span class="nav-text">Streamer</span></a></li>
                <li><a href="${basePath}highlights.html"><i class="fa-solid fa-star"></i> <span class="nav-text">Ruhmeshalle</span></a></li>
                <li><a href="${basePath}spenden.html"><i class="fa-solid fa-hand-holding-dollar"></i> <span class="nav-text">Spenden</span></a></li>
                <li><a href="${basePath}kontakt.html"><i class="fa-solid fa-envelope"></i> <span class="nav-text">Kontakt</span></a></li>
            </ul>
        </nav>

        <div class="sidebar-bottom">
            <div class="footer-group">
                <a href="https://discord.gg/3BuS9w4xru" target="_blank" class="footer-icon"><i class="fa-brands fa-discord"></i></a>
                <a href="${basePath}impressum.html" class="legal-link nav-text">Impressum</a>
            </div>
            
            <div class="footer-group">
                <a href="https://www.instagram.com/synapse_x_esport/" target="_blank" class="footer-icon"><i class="fa-brands fa-instagram"></i></a>
                <a href="${basePath}datenschutz.html" class="legal-link nav-text">Datenschutz</a>
            </div>
        </div>
    </aside>
    `;

    document.getElementById('sidebar-container').innerHTML = sidebarHTML;
}