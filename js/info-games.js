function showHide(id) {
    if (document.getElementById) {
        var el = document.getElementById(id);
        el.style.display = (el.style.display == "none") ? "block" : "none";
    }
}

function shield(team) {
    var imagen = "";
    switch (team) {
        case "U1":
            imagen = "img/u1.png";
            break;
        case "U2":
            imagen = "img/u2.png";
            break;
        case "U3":
            imagen = "img/u3.png";
            break;
        case "U4":
            imagen = "img/u4.png";
            break;
        case "U5":
            imagen = "img/u5.png";
            break;
        case "U6":
            imagen = "img/u6.png";
            break;
        default:
            imagen = "img/incognito.png";
    }
    return imagen;
}

function address(locations) {
    var dir = "";
    switch (locations) {
        case "AJ Katzenmaier":
            dir = "24 W. Walton St., Chicago, IL 60610";
            break;
        case "Greenbay":
            dir = "1734 N. Orleans St., Chicago, IL 60614";
            break;
        case "Howard A Yeager":
            dir = "2245 N. Southport Ave., Chicago, IL 60614";
            break;
        case "Marjorie P Hart":
            dir = "2625 N. Orchard St., Chicago, IL 60614";
            break;
        case "North":
            dir = "1409 N. Ogden Ave., Chicago, IL 60610";
            break;
        case "South":
            dir = "2101 N. Fremont St., Chicago, IL 60614";
            break;
        default:
            dir = "";
    }
    return dir;
}

function mapa(map) {
    var url = "";
    switch (map) {
        case "AJ Katzenmaier":
            url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.6542461109852!2d-87.63123908492996!3d41.900292379220446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24+W+Walton+St%2C+Chicago%2C+IL+60610%2C+EE.+UU.!5e0!3m2!1ses-419!2sar!4v1556167417296!5m2!1ses-419!2sar";
            break;
        case "Greenbay":
            url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.025884368859!2d-87.64002798492945!3d41.91380227921933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34073f306a3%3A0x9e1726bbf8f23f0e!2s1734+N+Orleans+St%2C+Chicago%2C+IL+60614%2C+EE.+UU.!5e0!3m2!1ses-419!2sar!4v1556168049296!5m2!1ses-419!2sar";
            break;
        case "Howard A Yeager":
            url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5856830856173!2d-87.66511458492909!3d41.92326457921867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245+N+Southport+Ave%2C+Chicago%2C+IL+60614%2C+EE.+UU.!5e0!3m2!1ses-419!2sar!4v1556168951060!5m2!1ses-419!2sar";
            break;
        case "Marjorie P Hart":
            url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.2919146584304!2d-87.64808628492885!3d41.929578279218184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2630e551%3A0x3e719e44a5cef714!2s2625+N+Orchard+St%2C+Chicago%2C+IL+60614%2C+EE.+UU.!5e0!3m2!1ses-419!2sar!4v1556169230758!5m2!1ses-419!2sar";
            break;
        case "North":
            url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.3377998492124!2d-87.64837698492968!3d41.90709647921989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd33af0e6ccc3%3A0x26c81c1d557667da!2s1409+N+Ogden+Ave%2C+Chicago%2C+IL+60610%2C+EE.+UU.!5e0!3m2!1ses-419!2sar!4v1556169454528!5m2!1ses-419!2sar";
            break;
        case "South":
            url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.7479505250694!2d-87.65355538492922!3d41.91977677921886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3196fb41dc7%3A0x970be7f7d6336df5!2s2101+N+Fremont+St%2C+Chicago%2C+IL+60614%2C+EE.+UU.!5e0!3m2!1ses-419!2sar!4v1556169632193!5m2!1ses-419!2sar";
            break;
        default:
            url = "";
    }
    return url;
}

function details(i) {
    var detail = "<section>\
            <a id='atras' class='text-white font-weight-bold' onClick='fullShowHideReverse(" + i + ")' href='#menu'>\
                &lt;- Back</a>\
            <h3 class='text-center'><img src='" + shield(games[i].team_1) + "' alt='" + games[i].team_1 + "'>" + games[i].team_1 + " vs " + games[i].team_2 + "<img src='" + shield(games[i].team_2) + "' alt='" + games[i].team_2 + "'></h2>\
        <br>\
        <div class='row'>\
            <div class='col-6'><img src='img/date.png' alt='date icon' class='mx-auto d-block'>\
                <p class='text-center'>" + games[i].date + "</p>\
            </div>\
            <div class='col-6'><img src='img/time.png' alt='time icon' class='mx-auto d-block'>\
                <p class='text-center'>" + games[i].time + "</p>\
            </div>\
        </div>\
        <br>\
        <div class='row'>\
            <div class='col-6'><img src='img/stadium.png' alt='stadium icon' class='mx-auto d-block'>\
                <p class='text-center'>" + games[i].stadium + "</p>\
            </div>\
            <div class='col-6'><img src='img/location.png' alt='location icon' class='mx-auto d-block'>\
                <p class='text-center'>" + address(games[i].stadium) + "</p>\
            </div>\
        </div>\
        <br>\
        <div class='embed-responsive embed-responsive-4by3'>\
            <iframe class='embed-responsive-item' src='" + mapa(games[i].stadium) + "'></iframe>\
        </div>\
		</section>"
    return detail;
}

function detailsWideScreen(i) {
    var detailWideScreen = "<section>\
			<br>\
			<br>\
			<br>\
			<br>\
            <h3 class='text-center'><img src='" + shield(games[i].team_1) + "' alt='" + games[i].team_1 + "'>" + games[i].team_1 + " vs " + games[i].team_2 + "<img src='" + shield(games[i].team_2) + "' alt='" + games[i].team_2 + "'></h2>\
                <p class='text-center'>" + games[i].date + ' - ' + games[i].time + "</p>\
                <p class='text-center'>" + games[i].stadium + "</p>\
                <p class='text-center'>" + address(games[i].stadium) + "</p>\
        <div class='embed-responsive embed-responsive-16by9'>\
            <iframe class='embed-responsive-item' src='" + mapa(games[i].stadium) + "'></iframe>\
        </div>\
		</section> <br> <script> titulito = '2'</script>";
    return detailWideScreen;
}

function detailWideScreenInit() {
    var inicioWideScreenDetalle = "<div class='text-center'>\
					<br>SELECT A MATCH\
					<br>\
					<br>\
					<img src='img/flecha.png' alt='detail init'>\
					</div>";
    return inicioWideScreenDetalle;
}

function generaDetails(id) {
    if (document.getElementById("detalle")) {
        document.getElementById("detalle").innerHTML = details(id);
    }
}

function generaDetailsWideScreen(id) {
    if (document.getElementById("detalle-widescreen")) {
        document.getElementById("detalle-widescreen").innerHTML = detailsWideScreen(id);
    }
}

function eraseDetails() {
    if (document.getElementById("detalle")) {
        document.getElementById("detalle").innerHTML = "";
    }
}

function eraseDetailsWideScreen() {
    if (document.getElementById("detalle-widescreen")) {
        document.getElementById("detalle-widescreen").innerHTML = "";
    }
}

function fullShowHide(id) {
    generaDetails(id);
    showHide("team-filter");
    showHide("menu");
    showHide("lista");
    showHide("lista-widescreen");
    showHide("detalle-widescreen");
    showHide("cabecera");
}

function fullShowHideReverse(id) {
    eraseDetails();
    generaDetailsWideScreen(id);
    showHide("team-filter");
    showHide("menu");
    showHide("lista");
    showHide("lista-widescreen");
    showHide("detalle-widescreen");
    showHide("cabecera");
}

function showHideWideScreen(id) {
    eraseDetailsWideScreen();
    generaDetailsWideScreen(id);
}

function listas() {
    var teamSelected = document.querySelector("#team-selected").value;
    var fullList = "";
    for (var i = 0; i < games.length; i++) {
        if (teamSelected === games[i].team_1 || teamSelected === games[i].team_2 || teamSelected === "ALL") {
            fullList += "<li>\
        <a class='list-group-item d-flex justify-content-between border-success rounded-0' onClick='fullShowHide(" + i + ")' href='#detalle'> \
		<span class = 'badge badge-success badge'>" + games[i].date + "</span> \
		<img src='" + shield(games[i].team_1) + "' alt='" + games[i].team_1 + "'> \
		<span class='text-success'>" + games[i].team_1 + " and " + games[i].team_2 + "</span> \
		<img src='" + shield(games[i].team_2) + "' alt='" + games[i].team_2 + "'> \
		<span class = 'text-success'>></span> \
		</a> \
		</li>"
        }
    }
    return fullList;
}

function listasWideScreen() {
    var teamSelected = document.querySelector("#team-selected").value;
    var fullListWideScreen = "";
    for (var i = 0; i < games.length; i++) {
        if (teamSelected === games[i].team_1 || teamSelected === games[i].team_2 || teamSelected === "ALL") {
            fullListWideScreen += "<li>\
        <a id='linkdescope' class='list-group-item d-flex justify-content-between border-success rounded-0' onClick='showHideWideScreen(" + i + ")' href='#detalle-widescreen'> \
		<span class = 'badge badge-success badge'>" + games[i].date + "</span> \
		<img src='" + shield(games[i].team_1) + "' alt='" + games[i].team_1 + "'> \
		<span class='text-success'>" + games[i].team_1 + " - " + games[i].team_2 + "</span> \
		<img src='" + shield(games[i].team_2) + "' alt='" + games[i].team_2 + "'> \
		<span class = 'text-success'>></span> \
		</a> \
		</li>"
        }
    }
    return fullListWideScreen;
}

if (document.getElementById("detalle-widescreen")) {
    document.getElementById("detalle-widescreen").innerHTML = detailWideScreenInit();
}

function updateUI() {
    if (document.getElementById("lista")) {
        document.getElementById("lista").innerHTML = listas();
    }
    if (document.getElementById("lista-widescreen")) {
        document.getElementById("lista-widescreen").innerHTML = listasWideScreen();
    }
}

updateUI();

$("#team-filter").on("change", updateUI);

function optionSelect() {

    var options = "";

    for (var i = 0; i < games.length; i++) {
        options += "<option value='" + i + "'>" + games[i].date + " - " + games[i].time + " - " + games[i].team_1 + " vs " + games[i].team_2 + "</option>";
    }
    return options;
}

if (document.getElementById("search-option-select")) {
    document.getElementById("search-option-select").innerHTML = optionSelect();
}

if (document.getElementById("input-option-select")) {
    document.getElementById("input-option-select").innerHTML = optionSelect();
}

function searchOptionselect() {
    cleanupUi();
    startDatabaseQueries();
}