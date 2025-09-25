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
    
    // Füge ein Symbol oder Bild hinzu, falls vorhanden
    switch (type) {
        case 'lionchest':
            marker.classList.add('marker-lionchest');
            break;
        case 'uwlionchest':
            marker.classList.add('marker-uwlionchest');
            break;
        case 'treasurehord':
            marker.classList.add('marker-treasurehord');
            break;
        case 'mermaidcoffin':
            marker.classList.add('marker-mermaidcoffin');
            break;
        case 'mermaidcorbse':
            marker.classList.add('marker-mermaidcorbse');
            break;
        case 'playerspawn':
            marker.classList.add('marker-playerspawn');
            break;
        case 'healthshrine':
            marker.classList.add('marker-healthshrine');
            break;
        case 'reviveshrine':
            marker.classList.add('marker-reviveshrine');
            break;
        case 'keyroom':
            marker.classList.add('marker-keyroom');
            break;
        case 'boss':
            marker.classList.add('marker-boss');
            break;
        case 'croco':
            marker.classList.add('marker-croco');
            break;
        case 'expressman':
            marker.classList.add('marker-expressman');
            break;
        case 'ore':
            marker.classList.add('marker-ore');
            break;
        case 'gems':
            marker.classList.add('marker-gems');
            break;
        default:
            console.log("Unbekannter Marker-Typ");
            return;
    }

    // Marker zur Container hinzufügen
    document.querySelector('.container').appendChild(marker);
    markers[type].push(marker); // Marker zur Liste hinzufügen

    // Speichern des Markers im Local Storage
    let storedMarkers = JSON.parse(localStorage.getItem('markers')) || [];
    storedMarkers.push({ coords, label, type });
    localStorage.setItem('markers', JSON.stringify(storedMarkers));

    console.log(`Marker gesetzt: ${label} bei (${coords.top}%, ${coords.left}%)`);
}

// Funktion zum Laden der Marker aus dem Local Storage
function loadMarkersFromLocalStorage() {
    const storedMarkers = JSON.parse(localStorage.getItem('markers')) || [];

    storedMarkers.forEach(function(markerData) {
        addMarker(markerData.coords, markerData.label, markerData.type);
    });
}

// Funktion zur Speicherung der Checkbox-Zustände
function saveCheckboxStates() {
    const checkboxStates = {};
    document.querySelectorAll('.legend input').forEach(function(checkbox) {
        checkboxStates[checkbox.id] = checkbox.checked;
    });
    localStorage.setItem('checkboxStates', JSON.stringify(checkboxStates));
}

// Funktion zum Laden der Checkbox-Zustände aus dem Local Storage
function loadCheckboxStates() {
    const checkboxStates = JSON.parse(localStorage.getItem('checkboxStates')) || {};

    document.querySelectorAll('.legend input').forEach(function(checkbox) {
        if (checkboxStates[checkbox.id] !== undefined) {
            checkbox.checked = checkboxStates[checkbox.id];
        }
    });

    // Marker basierend auf den geladenen Checkbox-Zuständen anzeigen
    updateMarkers();
}

// Event-Listener für Klicks auf der Karte (zum Hinzufügen von Markern)
document.querySelector('.map-image').addEventListener('click', function(e) {
    console.log("Bild wurde angeklickt!");

    var latlng = {
        top: (e.offsetY / this.offsetHeight) * 100,
        left: (e.offsetX / this.offsetWidth) * 100
    };
    console.log(`Klickposition: Top: ${latlng.top}% Left: ${latlng.left}%`);

    var type = prompt("Welchen Marker möchtest du setzen? (z.B. lionchest, playerspawn, boss, etc.)");

    if (type && markers[type] !== undefined) {
        var label = type.charAt(0).toUpperCase() + type.slice(1);
        addMarker(latlng, label, type);
    } else {
        alert("Ungültiger Marker-Typ!");
    }
});

// Event-Listener für Checkboxen, um den Zustand zu speichern
document.querySelectorAll('.legend input').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        saveCheckboxStates();
        updateMarkers();
    });
});

// Beim Laden der Seite Marker und Checkbox-Zustände laden
window.addEventListener('load', function() {
    loadMarkersFromLocalStorage();
    loadCheckboxStates();
});
