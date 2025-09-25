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
    // Weitere Marker hier einfügen...
}

// Event-Listener für Klicks auf der Karte (zum Hinzufügen von Markern)
document.querySelector('.map-image').addEventListener('click', function(e) {
    var latlng = {
        top: (e.offsetY / this.offsetHeight) * 100,  // Berechnet die % Koordinaten
        left: (e.offsetX / this.offsetWidth) * 100  // Berechnet die % Koordinaten
    };
    
    // Eingabeaufforderung, um den Typ des Markers zu wählen
    var type = prompt("Welchen Marker möchtest du setzen? (z.B. lionchest, playerspawn, boss, etc.)");

    if (type && markers[type] !== undefined) {
        var label = type.charAt(0).toUpperCase() + type.slice(1); // Startbuchstabe groß
        addMarker(latlng, label, type); // Marker hinzufügen
    } else {
        alert("Ungültiger Marker-Typ!"); // Fehlermeldung bei ungültigem Typ
    }
});

// Event-Listener für die Checkboxen, um Marker anzuzeigen/zu entfernen
document.querySelectorAll('.legend input').forEach(function(checkbox) {
    checkbox.addEventListener('change', updateMarkers);
});
