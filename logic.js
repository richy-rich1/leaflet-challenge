let myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5
  });

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a>',
}).addTo(myMap);

fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson') 
    .then(response => response.json())
    .then(data => {
        plotEarthquakes(data);
    });
    function getColor(depth) {
        if (depth > 90) {
            return 'brown';
        } else if (depth > 70) {
            return 'red';
        } else if (depth > 50) {
            return 'orange';
        } else if (depth > 30) {
            return 'gold';
        } else if (depth > 10) {
            return 'yellow';
        } else (depth > -10 ) 
            return 'green';
        }
                           
  
  
  function getRadius(magnitude) {
      return magnitude * 4 ; // Adjust size scaling
  }

  
  function plotEarthquakes(data) {
      data.features.forEach(feature => {
          let [longitude, latitude, depth] = feature.geometry.coordinates;
          let magnitude = feature.properties.mag;
          let place = feature.properties.place;
  
          L.circleMarker([latitude, longitude], {
              radius: getRadius(magnitude),
              fillColor: getColor(depth),
              color: "#000",
              weight: 0.5,
              opacity: 1,
              fillOpacity: 0.7
          }).bindPopup(`<h3>${place}</h3><p>Magnitude: ${magnitude}</p><p>Depth: ${depth} km</p>`)
          .addTo(myMap);
      });
  }
  let legend = L.control({ position: 'bottomright' });

  legend.onAdd = function() {
      let div = L.DomUtil.create('div', 'info legend');
      let depths = [-10, 10, 30, 50,70, 90];
      let labels = [];
       // Add a title or header for the legend 
      div.innerHTML = '<h4>Depth (km)</h4>';
  
      
      for (let i = 0; i < depths.length; i++) {
        div.innerHTML +=
            `<i style="background: ${getColor(depths[i])}; width: 18px; height: 18px; display: inline-block;"></i> ` +
            `${depths[i]}${depths[i + 1] ? '&ndash;' + depths[i + 1] : '+'}<br>`;
    }
  
      return div;
  };
  
  legend.addTo(myMap);
     