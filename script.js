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
}

// Funktion zur Aktualisierung der Marker basierend auf den Checkboxen
function updateMarkers() {
    // Entferne alle Marker, die auf der Seite angezeigt wurden
    const allMarkers = document.querySelectorAll('.marker');
    allMarkers.forEach(marker => {
        marker.style.display = 'none'; // Versteckt alle Marker
    });

    // Füge Marker hinzu, wenn die zugehörige Checkbox aktiviert ist
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
    if (document.getElementById('mermaidcoffin').checked) {
        markers.mermaidcoffin.forEach(function(marker) {
            marker.style.display = 'block'; // Zeigt den Marker an
        });
    }
    if (document.getElementById('mermaidcorbse').checked) {
        markers.mermaidcorbse.forEach(function(marker) {
            marker.style.display = 'block'; // Zeigt den Marker an
        });
    }
    if (document.getElementById('playerspawn').checked) {
        markers.playerspawn.forEach(function(marker) {
            marker.style.display = 'block'; // Zeigt den Marker an
        });
    }
    if (document.getElementById('healthshrine').checked) {
        markers.healthshrine.forEach(function(marker) {
            marker.style.display = 'block'; // Zeigt den Marker an
        });
    }
    if (document.getElementById('reviveshrine').checked) {
        markers.reviveshrine.forEach(function(marker) {
            marker.style.display = 'block'; // Zeigt den Marker an
        });
    }
    if (document.getElementById('keyroom').checked) {
        markers.keyroom.forEach(function(marker) {
            marker.style.display = 'block'; // Zeigt den Marker an
        });
    }
    if (document.getElementById('boss').checked) {
        mar
