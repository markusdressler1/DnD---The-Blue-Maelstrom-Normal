// Erstelle die Karte und setze den Startpunkt und Zoom
var map = L.map('map').setView([0, 0], 2);

// Lade die OpenStreetMap-Kachel-Layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Markierungen für die Karte (Beispielkoordinaten)
var markers = {
    loot: [
        { coords: [10, 20], label: "Loot 1" },
        { coords: [15, 25], label: "Loot 2" }
    ],
    playerspawn: [
        { coords: [0, 0], label: "Spieler Spawn" }
    ],
    healthshrine: [
        { coords: [5, 5], label: "Health Shrine" }
    ],
    boss: [
        { coords: [20, -20], label: "Boss" }
    ],
    ore: [
        { coords: [-10, 30], label: "Ore" }
    ]
};

// Funktion, um Marker hinzuzufügen oder zu entfernen
function updateMarkers() {
    // Entferne alle Marker
    map.eachLayer(function(layer) {
        if (layer instanceof L.Marker) {
            map.removeLayer(layer);
        }
    });

    // Füge Marker basierend auf den Checkboxen hinzu
    if (document.getElementById('loot').checked) {
        markers.loot.forEach(function(marker) {
            L.marker(marker.coords).addTo(map).bindPopup(marker.label);
        });
    }
    if (document.getElementById('playerspawn').checked) {
        markers.playerspawn.forEach(function(marker) {
            L.marker(marker.coords).addTo(map).bindPopup(marker.label);
        });
    }
    if (document.getElementById('healthshrine').checked) {
        markers.healthshrine.forEach(function(marker) {
            L.marker(marker.coords).addTo(map).bindPopup(marker.label);
        });
    }
    if (document.getElementById('boss').checked) {
        markers.boss.forEach(function(marker) {
            L.marker(marker.coords).addTo(map).bindPopup(marker.label);
        });
    }
    if (document.getElementById('ore').checked) {
        markers.ore.forEach(function(marker) {
            L.marker(marker.coords).addTo(map).bindPopup(marker.label);
        });
    }
}

// Event-Listener für Checkboxen, um Marker zu aktualisieren
document.querySelectorAll('.checkboxes input').forEach(function(checkbox) {
    checkbox.addEventListener('change', updateMarkers);
});

// Initiale Marker anzeigen
updateMarkers();
