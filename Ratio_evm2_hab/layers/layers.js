var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_MMM_MMM_PolesZonage_1 = new ol.format.GeoJSON();
var features_MMM_MMM_PolesZonage_1 = format_MMM_MMM_PolesZonage_1.readFeatures(json_MMM_MMM_PolesZonage_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MMM_MMM_PolesZonage_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MMM_MMM_PolesZonage_1.addFeatures(features_MMM_MMM_PolesZonage_1);
var lyr_MMM_MMM_PolesZonage_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MMM_MMM_PolesZonage_1, 
                style: style_MMM_MMM_PolesZonage_1,
                popuplayertitle: 'MMM_MMM_PolesZonage',
                interactive: true,
                title: '<img src="styles/legend/MMM_MMM_PolesZonage_1.png" /> MMM_MMM_PolesZonage'
            });
var format_Evm2_hab_2 = new ol.format.GeoJSON();
var features_Evm2_hab_2 = format_Evm2_hab_2.readFeatures(json_Evm2_hab_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Evm2_hab_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Evm2_hab_2.addFeatures(features_Evm2_hab_2);
var lyr_Evm2_hab_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Evm2_hab_2, 
                style: style_Evm2_hab_2,
                popuplayertitle: 'Evm2_hab',
                interactive: true,
    title: 'Evm2_hab<br />\
    <img src="styles/legend/Evm2_hab_2_0.png" /> 0 - 4,4<br />\
    <img src="styles/legend/Evm2_hab_2_1.png" /> 4,4 - 12,9<br />\
    <img src="styles/legend/Evm2_hab_2_2.png" /> 12,9 - 19,5<br />\
    <img src="styles/legend/Evm2_hab_2_3.png" /> 19,5 - 38,5<br />\
    <img src="styles/legend/Evm2_hab_2_4.png" /> 38,5 - 65,6<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_MMM_MMM_PolesZonage_1.setVisible(false);lyr_Evm2_hab_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_MMM_MMM_PolesZonage_1,lyr_Evm2_hab_2];
lyr_MMM_MMM_PolesZonage_1.set('fieldAliases', {'codcomm': 'codcomm', 'nom': 'nom', 'POLE': 'POLE', 'surface': 'surface', });
lyr_Evm2_hab_2.set('fieldAliases', {'codcomm': 'codcomm', 'nom': 'nom', 'POLE': 'POLE', 'pop_2022_s': 'pop_2022_s', 'densite_co': 'densite_co', 'surface_m2': 'surface_m2', 'surface_ha': 'surface_ha', 'Ratio_evm2': 'Ratio_evm2', });
lyr_MMM_MMM_PolesZonage_1.set('fieldImages', {'codcomm': 'TextEdit', 'nom': 'TextEdit', 'POLE': 'TextEdit', 'surface': '', });
lyr_Evm2_hab_2.set('fieldImages', {'codcomm': 'TextEdit', 'nom': 'TextEdit', 'POLE': 'TextEdit', 'pop_2022_s': 'TextEdit', 'densite_co': 'TextEdit', 'surface_m2': 'TextEdit', 'surface_ha': 'TextEdit', 'Ratio_evm2': 'TextEdit', });
lyr_MMM_MMM_PolesZonage_1.set('fieldLabels', {'codcomm': 'hidden field', 'nom': 'hidden field', 'POLE': 'hidden field', 'surface': 'hidden field', });
lyr_Evm2_hab_2.set('fieldLabels', {'codcomm': 'hidden field', 'nom': 'no label', 'POLE': 'hidden field', 'pop_2022_s': 'header label - always visible', 'densite_co': 'hidden field', 'surface_m2': 'hidden field', 'surface_ha': 'hidden field', 'Ratio_evm2': 'header label - always visible', });
lyr_Evm2_hab_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});