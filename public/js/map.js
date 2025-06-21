
mapboxgl.accessToken = map_token;
    const map = new mapboxgl.Map({
    container: 'map', // container ID
    // style URL
    center: coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9 // starting zoom
});


    // Create a default Marker and add it to the map.
const marker1 = new mapboxgl.Marker({color : "red"})
    
    .setLngLat(coordinates)
  
    .setPopup(new mapboxgl.Popup({offset: 25}).setHTML("<h1>Heloo world</h1>"))
    .addTo(map);

    map.on('load', () => {
        // Load an image from an external URL.
        map.loadImage(
            ' https://static-00.iconduck.com/assets.00/airbnb-icon-512x512-d9grja5t.png',
            
            (error, image) => {
                if (error) throw error;

                // Add the image to the map style.
                map.addImage('cat', image);

                // Add a data source containing one point feature.
                map.addSource('point', {
                    'type': 'geojson',
                    'data': {
                        'type': 'FeatureCollection',
                        'features': [
                            {
                                'type': 'Feature',
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': coordinates
                                }
                            }
                        ]
                    }
                });

                // Add a layer to use the image to represent the data.
                map.addLayer({
                    'id': 'points',
                    'type': 'symbol',
                    'source': 'point', // reference the data source
                    'layout': {
                        'icon-image': 'cat', // reference the image
                        'icon-size': 0.1
                    }
                });
            }
        );
    });

    






   
