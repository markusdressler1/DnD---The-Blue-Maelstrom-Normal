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

    document.querySelector('.container').appendChild(marker);
    markers[type].push(marker); // Marker zur Liste hinzufügen
    console.log(`Marker gesetzt: ${label} bei (${coords.top}%, ${coords.left}%)`);
}

// Funktion zur Aktualisierung der Marker basierend auf den Checkboxen
function updateMarkers() {
    const allMarkers = document.querySelectorAll('.marker');
    allMarkers.forEach(function(marker) {
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
        markers.boss.forEach(function(marker) {
            marker.style.display = 'block'; // Zeigt den Marker an
        });
    }
    if (document.getElementById('croco').checked) {
        markers.croco.forEach(function(marker) {
            marker.style.display = 'block'; // Zeigt den Marker an
        });
    }
    if (document.getElementById('expressman').checked) {
        markers.expressman.forEach(function(marker) {
            marker.style.display = 'block'; // Zeigt den Marker an
        });
    }
    if (document.getElementById('ore').checked) {
        markers.ore.forEach(function(marker) {
            marker.style.display = 'block'; // Zeigt den Marker an
        });
    }
    if (document.getElementById('gems').checked) {
        markers.gems.forEach(function(marker) {
            marker.style.display = 'block'; // Zeigt den Marker an
        });
    }
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
        alert("Ungültiger Marker-Typ!"); // Fehlermeldung bei ungültigem Typ
    }
});

// Event-Listener für die Checkboxen, um Marker anzuzeigen/zu entfernen
document.querySelectorAll('.legend input').forEach(function(checkbox) {
    checkbox.addEventListener('change', updateMarkers);
});
