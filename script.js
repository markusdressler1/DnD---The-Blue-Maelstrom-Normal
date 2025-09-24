// Erstelle die Karte und setze den Startpunkt und Zoom
var map = L.map('map').setView([0, 0], 2); // Setze die View auf [0, 0] als Platzhalter

// Lade dein eigenes Kartenbild als Hintergrund
L.imageOverlay('map.png', [
    [90, -180],  // Diese Koordinaten sind die Ecken deines Bildes. Anpassen an dein Kartenbild!
    [-90, 180]
]).addTo(map);

// Setze die Begrenzungen für den Zoom (optional, um das Bild nicht zu sehr zu zoomen)
map.setMaxBounds([[-90, -180], [90, 180]]);
map.setMaxZoom(4); // Setze den maximalen Zoom-Level, je nachdem, wie detailiert das Bild ist.
map.setMinZoom(1); // Setze den minimalen Zoom-Level.

map.fitBounds([
    [90, -180],  // Diese Koordinaten passen das Bild so an, dass es richtig auf der Karte liegt
    [-90, 180]
]);

// Markierungen (Marker) für die Karte (Beispielkoordinaten)
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
