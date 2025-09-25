// Marker-Datenstruktur
var markers = {
    lionchest: [],
    uwlionchest: [],
    treasurehord: [],
    mermaidcoffin: [],
    mermaidcorbse: [],
    playerspawn: [],
    healthshrine: [],
    reviveshrine: [],
    keyroom: [],
    boss: [],
    croco: [],
    expressman: [],
    ore: [],
    gems: []
};

// Funktion zum Hinzufügen von Markern
function addMarker(coords, label, type) {
    var marker = document.createElement('div');
    marker.classList.add('marker', `marker-${type}`);
    marker.style.top = `${coords.top}%`; // Marker in Prozent positionieren
    marker.style.left = `${coords.left}%`; // Marker in Prozent positionieren
    marker.innerHTML = label;
    document.querySelector('.container').appendChild(marker);
    markers[type].push(marker); // Marker zur Liste hinzufügen
    console.log(`Marker gesetzt: ${label} bei (${coords.top}%, ${coords.left}%)`);
}

// Funktion zur Aktualisierung der Marker basierend auf den Checkboxen
function updateMarkers() {
    const allMarkers = document.querySelectorAll('.marker');
    allMarkers.forEach(marker => {
        marker.style.display = 'none'; // Versteckt alle Marker
    });

    // Überprüfen, welche Checkboxen aktiviert sind und Marker anzeigen
    if (document.getElementById('lionchest').checked) {
        markers.lionchest.forEach(function(marker) {
            marker.style.display = 'block'; // Zeigt den Marker an
        });
    }
    if (document.getElementById('uwlionchest').checked) {
        markers.uwlionchest.forEach(function(marker) {
            marker.style.display = 'block'; // Zeigt den Marker an
        });
    }
    if (document.getElementById('treasurehord').checked) {
        markers.treasurehord.forEach(function(marker) {
            marker.style.display = 'block'; // Zeigt den Marker an
        });
    }
    // Weitere Marker hier einfügen...
}

// Event-Listener für Klicks auf der Karte (zum Hinzufügen von Markern)
document.querySelector('.map-image').addEventListener('click', function(e) {
    console.log("Bild wurde angeklickt!"); // Einfacher Debugging-Log

    // Berechnen der Klickposition relativ zum Bild
    var latlng = {
        top: (e.offsetY / this.offsetHeight) * 100,  // Berechnet die % Koordinaten
        left: (e.offsetX / this.offsetWidth) * 100  // Berechnet die % Koordinaten
    };
    console.log(`Klickposition: Top: ${latlng.top}% Left: ${latlng.left}%`);

    // Type (Markertyp) eingeben
    var type = prompt("Welchen Marker möchtest du setzen? (z.B. lionchest, playerspawn, boss, etc.)");

    // Wenn der Marker-Typ gültig ist, füge den Marker hinzu
    if (type && markers[type] !== undefined) {
        var label = type.charAt(0).toUpperCase() + type.slice(1); // Startbuchstabe groß
        addMarker(latlng, label, type); // Marker hinzufügen
    } else {
        alert("Ungültiger Marker-Typ!
