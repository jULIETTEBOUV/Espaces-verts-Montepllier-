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
var format_Taux_accessibilit_1 = new ol.format.GeoJSON();
var features_Taux_accessibilit_1 = format_Taux_accessibilit_1.readFeatures(json_Taux_accessibilit_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Taux_accessibilit_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Taux_accessibilit_1.addFeatures(features_Taux_accessibilit_1);
var lyr_Taux_accessibilit_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Taux_accessibilit_1, 
                style: style_Taux_accessibilit_1,
                popuplayertitle: 'Taux_accessibilité',
                interactive: true,
    title: 'Taux_accessibilité<br />\
    <img src="styles/legend/Taux_accessibilit_1_0.png" /> 0 - 1,1<br />\
    <img src="styles/legend/Taux_accessibilit_1_1.png" /> 1,1 - 7,6<br />\
    <img src="styles/legend/Taux_accessibilit_1_2.png" /> 7,6 - 17,6<br />\
    <img src="styles/legend/Taux_accessibilit_1_3.png" /> 17,6 - 28,3<br />\
    <img src="styles/legend/Taux_accessibilit_1_4.png" /> 28,3 - 54,7<br />' });
var format_MMM_MMM_PolesZonage_2 = new ol.format.GeoJSON();
var features_MMM_MMM_PolesZonage_2 = format_MMM_MMM_PolesZonage_2.readFeatures(json_MMM_MMM_PolesZonage_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MMM_MMM_PolesZonage_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MMM_MMM_PolesZonage_2.addFeatures(features_MMM_MMM_PolesZonage_2);
var lyr_MMM_MMM_PolesZonage_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MMM_MMM_PolesZonage_2, 
                style: style_MMM_MMM_PolesZonage_2,
                popuplayertitle: 'MMM_MMM_PolesZonage',
                interactive: true,
                title: '<img src="styles/legend/MMM_MMM_PolesZonage_2.png" /> MMM_MMM_PolesZonage'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Taux_accessibilit_1.setVisible(true);lyr_MMM_MMM_PolesZonage_2.setVisible(false);
var layersList = [lyr_GoogleSatellite_0,lyr_Taux_accessibilit_1,lyr_MMM_MMM_PolesZonage_2];
lyr_Taux_accessibilit_1.set('fieldAliases', {'codcomm': 'codcomm', 'nom': 'nom', 'POLE': 'POLE', 'pop_2022_s': 'pop_2022_s', 'densite_co': 'densite_co', 'surface_m2': 'surface_m2', 'ratio_m2ha': 'ratio_m2ha', 'Tamp_inter': 'Tamp_inter', 'tx_acces': 'tx_acces', });
lyr_MMM_MMM_PolesZonage_2.set('fieldAliases', {'codcomm': 'codcomm', 'nom': 'nom', 'POLE': 'POLE', 'surface': 'surface', });
lyr_Taux_accessibilit_1.set('fieldImages', {'codcomm': 'TextEdit', 'nom': 'TextEdit', 'POLE': 'TextEdit', 'pop_2022_s': 'TextEdit', 'densite_co': 'TextEdit', 'surface_m2': 'TextEdit', 'ratio_m2ha': 'TextEdit', 'Tamp_inter': 'TextEdit', 'tx_acces': 'TextEdit', });
lyr_MMM_MMM_PolesZonage_2.set('fieldImages', {'codcomm': 'TextEdit', 'nom': 'TextEdit', 'POLE': 'TextEdit', 'surface': '', });
lyr_Taux_accessibilit_1.set('fieldLabels', {'codcomm': 'hidden field', 'nom': 'inline label - visible with data', 'POLE': 'hidden field', 'pop_2022_s': 'hidden field', 'densite_co': 'hidden field', 'surface_m2': 'hidden field', 'ratio_m2ha': 'hidden field', 'Tamp_inter': 'hidden field', 'tx_acces': 'inline label - visible with data', });
lyr_MMM_MMM_PolesZonage_2.set('fieldLabels', {'codcomm': 'hidden field', 'nom': 'hidden field', 'POLE': 'hidden field', 'surface': 'hidden field', });
lyr_MMM_MMM_PolesZonage_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});