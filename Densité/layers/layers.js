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
var format_Densite_1 = new ol.format.GeoJSON();
var features_Densite_1 = format_Densite_1.readFeatures(json_Densite_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Densite_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Densite_1.addFeatures(features_Densite_1);
var lyr_Densite_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Densite_1, 
                style: style_Densite_1,
                popuplayertitle: 'Densite',
                interactive: true,
    title: 'Densite<br />\
    <img src="styles/legend/Densite_1_0.png" /> 0,8 - 3,3<br />\
    <img src="styles/legend/Densite_1_1.png" /> 3,3 - 6,1<br />\
    <img src="styles/legend/Densite_1_2.png" /> 6,1 - 12,8<br />\
    <img src="styles/legend/Densite_1_3.png" /> 12,8 - 22,9<br />\
    <img src="styles/legend/Densite_1_4.png" /> 22,9 - 53,8<br />' });
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

lyr_GoogleSatellite_0.setVisible(true);lyr_Densite_1.setVisible(true);lyr_MMM_MMM_PolesZonage_2.setVisible(false);
var layersList = [lyr_GoogleSatellite_0,lyr_Densite_1,lyr_MMM_MMM_PolesZonage_2];
lyr_Densite_1.set('fieldAliases', {'codcomm': 'codcomm', 'nom': 'nom', 'POLE': 'POLE', 'pop_2022_s': 'pop_2022_s', 'densite_co': 'densite_co', 'surface_m2': 'surface_m2', 'ratio_m2ha': 'ratio_m2ha', 'Ratiopopac': 'Ratiopopac', 'Pop_tampon_pop_2022_1': 'Pop_tampon_pop_2022_1', });
lyr_MMM_MMM_PolesZonage_2.set('fieldAliases', {'codcomm': 'codcomm', 'nom': 'nom', 'POLE': 'POLE', 'surface': 'surface', });
lyr_Densite_1.set('fieldImages', {'codcomm': 'TextEdit', 'nom': 'TextEdit', 'POLE': 'TextEdit', 'pop_2022_s': 'TextEdit', 'densite_co': 'TextEdit', 'surface_m2': 'TextEdit', 'ratio_m2ha': 'TextEdit', 'Ratiopopac': '', 'Pop_tampon_pop_2022_1': 'TextEdit', });
lyr_MMM_MMM_PolesZonage_2.set('fieldImages', {'codcomm': 'TextEdit', 'nom': 'TextEdit', 'POLE': 'TextEdit', 'surface': '', });
lyr_Densite_1.set('fieldLabels', {'codcomm': 'no label', 'nom': 'no label', 'POLE': 'hidden field', 'pop_2022_s': 'hidden field', 'densite_co': 'no label', 'surface_m2': 'hidden field', 'ratio_m2ha': 'hidden field', 'Ratiopopac': 'hidden field', 'Pop_tampon_pop_2022_1': 'hidden field', });
lyr_MMM_MMM_PolesZonage_2.set('fieldLabels', {'codcomm': 'hidden field', 'nom': 'hidden field', 'POLE': 'hidden field', 'surface': 'hidden field', });
lyr_MMM_MMM_PolesZonage_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});