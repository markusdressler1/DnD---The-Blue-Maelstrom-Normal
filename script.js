// Initialisiere die Karte ohne Zoom und ohne Panning (statisches Bild)
var map = L.map('map', {
    center: [0, 0],  // Setze den Startpunkt der Karte
    zoom: 2,         // Setze das Standard-Zoom-Level
    zoomControl: false,  // Deaktiviert die Zoom-Steuerung
    minZoom: 2,      // Maximaler und Minimaler Zoom-Level
    maxZoom: 2,
    dragging: false, // Deaktiviert das Panning (Verschieben der Karte)
}).setView([0, 0], 2); // Setze die Startansicht der Karte

// Lade das Bild als Overlay
var imageUrl = 'map.png';  // Dein Bild-URL
var imageBounds = [[0, 0], [10, 10]];  // Setze die Grenzen des Bildes (Koordinaten)

L.imageOverlay(imageUrl, imageBounds).addTo(map);

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
    var marker = L.marker(coords).addTo(map).bindPopup(label);
    markers[type].push(marker); // Marker zur Liste hinzufügen
}

// Funktion zum Entfernen von Markern
function removeMarker(marker, type) {
    map.removeLayer(marker);
    var index = markers[type].indexOf(marker);
    if (index > -1) {
        markers[type].splice(index, 1); // Marker aus der Liste entfernen
    }
}

// Funktion zur Aktualisierung der Marker basierend auf den Checkboxen
function updateMarkers() {
    // Entferne alle aktuellen Marker
    map.eachLayer(function(layer) {
        if (layer instanceof L.Marker) {
            map.removeLayer(layer);
        }
    });

    // Füge Marker hinzu, wenn die zugehörige Checkbox aktiviert ist
    if (document.getElementById('lionchest').checked) {
        markers.lionchest.forEach(function(marker) {
            marker.addTo(map);
        });
    }
    if (document.getElementById('uwlionchest').checked) {
        markers.uwlionchest.forEach(function(marker) {
            marker.addTo(map);
        });
    }
    if (document.getElementById('treasurehord').checked) {
        markers.treasurehord.forEach(function(marker) {
            marker.addTo(map);
        });
    }
    if (document.getElementById('mermaidcoffin').checked) {
        markers.mermaidcoffin.forEach(function(marker) {
            marker.addTo(map);
        });
    }
    if (document.getElementById('mermaidcorbse').checked) {
        markers.mermaidcorbse.forEach(function(marker) {
            marker.addTo(map);
        });
    }
    if (document.getElementById('playerspawn').checked) {
        markers.playerspawn.forEach(function(marker) {
            marker.addTo(map);
        });
    }
    if (document.getElementById('healthshrine').checked) {
        markers.healthshrine.forEach(function(marker) {
            marker.addTo(map);
        });
    }
    if (document.getElementById('reviveshrine').checked) {
        markers.reviveshrine.forEach(function(marker) {
            marker.addTo(map);
        });
    }
    if (document.getElementById('keyroom').checked) {
        markers.keyroom.forEach(function(marker) {
            marker.addTo(map);
        });
    }
    if (document.getElementById('boss').checked) {
        markers.boss.forEach(function(marker) {
            marker.addTo(map);
        });
    }
    if (document.getElementById('croco').checked) {
        markers.croco.forEach(function(marker) {
            marker.addTo(map);
        });
    }
    if (document.getElementById('expressman').checked) {
        markers.expressman.forEach(function(marker) {
            marker.addTo(map);
        });
    }
    if (document.getElementById('ore').checked) {
        markers.ore.forEach(function(marker) {
            marker.addTo(map);
        });
    }
    if (document.getElementById('gems').checked) {
        markers.gems.forEach(function(marker) {
            marker.addTo(map);
        });
    }
}

// Event-Listener für Klicks auf der Karte (zum Hinzufügen von Markern)
map.on('click', function(e) {
    var latlng = e.latlng;
    var type = prompt("Welchen Marker möchtest du setzen? (z.B. lionchest, playerspawn, boss, etc.)");

    if (type && markers[type] !== undefined) {
        var label = type.charAt(0).toUpperCase() + type.slice(1); // Startbuchstabe groß
        addMarker(latlng, label, type);
    } else {
        alert("Ungültiger Marker-Typ!");
    }
});

// Event-Listener für die Checkboxen, um Marker anzuzeigen/zu entfernen
document.querySelectorAll('.legend input').forEach(function(checkbox) {
    checkbox.addEventListener('change', updateMarkers);
});
