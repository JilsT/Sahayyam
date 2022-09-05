var map = L.map('map').setView([28.596816363225837, 77.41728536824282], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

var lat, lon;

if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(async function getData(position) {
        console.log(position);
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        console.log(lat, lon);
        var marker = L.marker([lat, lon]).addTo(map);


        const find = document.getElementById("find");
        find.addEventListener("click", async function () {
            var marker = L.marker([lat, lon]).addTo(map);
            map.setView([lat, lon], 10);

        })

    });

}

AOS.init({
    easing: 'ease-in-quad',
  });