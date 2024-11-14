var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_2 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_TravelTimeMinutesfromHotel_3 = new ol.format.GeoJSON();
var features_TravelTimeMinutesfromHotel_3 = format_TravelTimeMinutesfromHotel_3.readFeatures(json_TravelTimeMinutesfromHotel_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TravelTimeMinutesfromHotel_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TravelTimeMinutesfromHotel_3.addFeatures(features_TravelTimeMinutesfromHotel_3);
var lyr_TravelTimeMinutesfromHotel_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TravelTimeMinutesfromHotel_3, 
                style: style_TravelTimeMinutesfromHotel_3,
                popuplayertitle: "Travel Time (Minutes) from Hotel",
                interactive: false,
    title: 'Travel Time (Minutes) from Hotel<br />\
    <img src="styles/legend/TravelTimeMinutesfromHotel_3_0.png" /> 0 - 5 Minutes<br />\
    <img src="styles/legend/TravelTimeMinutesfromHotel_3_1.png" /> 5 - 10 Minutes<br />\
    <img src="styles/legend/TravelTimeMinutesfromHotel_3_2.png" /> 10 - 30 Minutes<br />\
    <img src="styles/legend/TravelTimeMinutesfromHotel_3_3.png" /> 30 - 45 Minutes<br />\
    <img src="styles/legend/TravelTimeMinutesfromHotel_3_4.png" /> 45 - 60 Minutes<br />\
    <img src="styles/legend/TravelTimeMinutesfromHotel_3_5.png" /> 60 - 90 Minutes<br />'
        });
var format_Facilities_4 = new ol.format.GeoJSON();
var features_Facilities_4 = format_Facilities_4.readFeatures(json_Facilities_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Facilities_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Facilities_4.addFeatures(features_Facilities_4);
var lyr_Facilities_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Facilities_4, 
                style: style_Facilities_4,
                popuplayertitle: "Facilities",
                interactive: true,
    title: 'Facilities<br />\
    <img src="styles/legend/Facilities_4_0.png" /> Hospital<br />\
    <img src="styles/legend/Facilities_4_1.png" /> Police Station<br />\
    <img src="styles/legend/Facilities_4_2.png" /> Airport<br />\
    <img src="styles/legend/Facilities_4_3.png" /> Embassy<br />\
    <img src="styles/legend/Facilities_4_4.png" /> Mercure Amsterdam<br />'
        });
var format_RiotCenter_5 = new ol.format.GeoJSON();
var features_RiotCenter_5 = format_RiotCenter_5.readFeatures(json_RiotCenter_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiotCenter_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiotCenter_5.addFeatures(features_RiotCenter_5);
var lyr_RiotCenter_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiotCenter_5, 
                style: style_RiotCenter_5,
                popuplayertitle: "Riot Center",
                interactive: true,
    title: 'Riot Center<br />\
    <img src="styles/legend/RiotCenter_5_0.png" /> riot center<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleHybrid_2.setVisible(false);lyr_TravelTimeMinutesfromHotel_3.setVisible(true);lyr_Facilities_4.setVisible(true);lyr_RiotCenter_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatellite_1,lyr_GoogleHybrid_2,lyr_TravelTimeMinutesfromHotel_3,lyr_Facilities_4,lyr_RiotCenter_5];
lyr_TravelTimeMinutesfromHotel_3.set('fieldAliases', {'ObjectID': 'ObjectID', 'Name': 'Name', 'ToBreak': 'ToBreak', });
lyr_Facilities_4.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'KML_STYLE': 'KML_STYLE', 'koordinat': 'koordinat', 'Route': 'Route', });
lyr_RiotCenter_5.set('fieldAliases', {'NAME': 'NAME', 'label': 'label', });
lyr_TravelTimeMinutesfromHotel_3.set('fieldImages', {'ObjectID': 'TextEdit', 'Name': 'TextEdit', 'ToBreak': 'TextEdit', });
lyr_Facilities_4.set('fieldImages', {'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'KML_STYLE': 'TextEdit', 'koordinat': 'TextEdit', 'Route': 'TextEdit', });
lyr_RiotCenter_5.set('fieldImages', {'NAME': 'TextEdit', 'label': 'TextEdit', });
lyr_TravelTimeMinutesfromHotel_3.set('fieldLabels', {'ObjectID': 'hidden field', 'Name': 'hidden field', 'ToBreak': 'hidden field', });
lyr_Facilities_4.set('fieldLabels', {'NAME': 'inline label - always visible', 'LAYER': 'hidden field', 'KML_STYLE': 'hidden field', 'koordinat': 'inline label - always visible', 'Route': 'inline label - always visible', });
lyr_RiotCenter_5.set('fieldLabels', {'NAME': 'hidden field', 'label': 'inline label - always visible', });
lyr_RiotCenter_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});