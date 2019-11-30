function pasarVariables(pagina, nombres) {
    pagina += "?";
    nomVec = nombres.split(",");
    for (i = 0; i < nomVec.length; i++)
        pagina += nomVec[i] + "=" + escape(eval(nomVec[i])) + "&";
    pagina = pagina.substring(0, pagina.length - 1);
    location.href = pagina;
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

function pasarPorUrl(indice) {
    idGame = indice;
    pasarVariables('game-detail.html', 'idGame');
}

function listas() {
    var teamSelected = document.querySelector("#team-selected").value;
    var fullList = "";
    for (var i = 0; i < games.length; i++) {
        if (teamSelected === games[i].team_1 || teamSelected === games[i].team_2 || teamSelected === "ALL") {
            fullList += "<li class='list-group-item d-flex justify-content-between border-success rounded-0' onclick='pasarPorUrl(" + i + ")'> \
		<span class = 'badge badge-success badge'>" + games[i].date + "</span> \
		<img src='" + shield(games[i].team_1) + "' alt='" + games[i].team_1 + "'> \
		<span class='text - success'>" + games[i].team_1 + " and " + games[i].team_2 + "</span> \
		<img src='" + shield(games[i].team_2) + "' alt='" + games[i].team_2 + "'> \
		<span class = 'text-success'>></span> \
		</li>"
        }
    }
    return fullList;
}

function updateUI() {
    if (document.getElementById("lista")) {
        document.getElementById("lista").innerHTML = listas();
    }
}

function details() {
    var detail = "<section>\
            <a class='text-white font-weight-bold' href='index.html'>\
                &lt;- Back</a>\
            <h2 class='text-center'><img src='" + shield(games[idGame].team_1) + "' alt='" + games[idGame].team_1 + "'>" + games[idGame].team_1 + " vs " + games[idGame].team_2 + "<img src='" + shield(games[idGame].team_2) + "' alt='" + games[idGame].team_2 + "'></h2>\
        <br>\
        <div class='row'>\
            <div class='col-6'><img src='img/date.png' alt='date icon' class='mx-auto d-block'>\
                <p class='text-center'>" + games[idGame].date + "</p>\
            </div>\
            <div class='col-6'><img src='img/time.png' alt='time icon' class='mx-auto d-block'>\
                <p class='text-center'>" + games[idGame].time + "</p>\
            </div>\
        </div>\
        <br>\
        <div class='row'>\
            <div class='col-6'><img src='img/stadium.png' alt='stadium icon' class='mx-auto d-block'>\
                <p class='text-center'>" + games[idGame].stadium + "</p>\
            </div>\
            <div class='col-6'><img src='img/location.png' alt='location icon' class='mx-auto d-block'>\
                <p class='text-center'>" + address(games[idGame].stadium) + "</p>\
            </div>\
        </div>\
        <br>\
        <div class='embed-responsive embed-responsive-4by3'>\
            <iframe class='embed-responsive-item' src='" + mapa(games[idGame].stadium) + "'></iframe>\
        </div>\
		</section>";
    return detail;
}

if (document.getElementById("detalle")) {
    document.getElementById("detalle").innerHTML = details();
}

updateUI();

$("#team-filter").on("change", updateUI);