mapboxgl.accessToken =
  "pk.eyJ1Ijoic25laGEwMDMiLCJhIjoiY2wxZGU4c3h0MGFveTNkcGJ6YTFrencyYyJ9.FB96Ubhif1VdysyrHe1jJQ";

let latitude = 17.540048498267733;
let longitude = 78.51353717070702;

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/dark-v10",
  center: [longitude, latitude],
  zoom: 16,
});

map.addControl(
  new mapboxgl.GeolocateControl({
    positionOptions: { enableHighAccuracy: true },
    trackUserLocation: true,
  })
);

var pic1 = document.querySelector("#pic-1");
var pic2 = document.querySelector("#pic-2");
var pic3 = document.querySelector("#pic-3");
var pic4 = document.querySelector("#pic-4");

var marker1 = new mapboxgl.Marker({
  element: pic1,
})

  .setLngLat([78.5134298820732, 17.540130338369703])
  .addTo(map);

var marker2 = new mapboxgl.Marker({
  element: pic2,
})

  .setLngLat([78.4715824093217, 17.358202176778693])
  .addTo(map);

var marker3 = new mapboxgl.Marker({
  element: pic3,
})

  .setLngLat([78.40114605463127, 17.384212961910013])
  .addTo(map);

var marker4 = new mapboxgl.Marker({
  element: pic4,
})

  .setLngLat([78.47374408583688, 17.424678553145988])
  .addTo(map);

var marker5 = new mapboxgl.Marker({
  element: pic5,
})

  .setLngLat([78.67938220790762, 17.25825835332161])
  .addTo(map);

map.addControl(
  new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
  })
);
