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
var format_Ratio_pop_acc_1 = new ol.format.GeoJSON();
var features_Ratio_pop_acc_1 = format_Ratio_pop_acc_1.readFeatures(json_Ratio_pop_acc_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ratio_pop_acc_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ratio_pop_acc_1.addFeatures(features_Ratio_pop_acc_1);
var lyr_Ratio_pop_acc_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ratio_pop_acc_1, 
                style: style_Ratio_pop_acc_1,
                popuplayertitle: 'Ratio_pop_acc',
                interactive: true,
    title: 'Ratio_pop_acc<br />\
    <img src="styles/legend/Ratio_pop_acc_1_0.png" /> 0 - 20<br />\
    <img src="styles/legend/Ratio_pop_acc_1_1.png" /> 20 - 40<br />\
    <img src="styles/legend/Ratio_pop_acc_1_2.png" /> 40 - 60<br />\
    <img src="styles/legend/Ratio_pop_acc_1_3.png" /> 60 - 80<br />\
    <img src="styles/legend/Ratio_pop_acc_1_4.png" /> 80 - 85,4<br />' });
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

lyr_GoogleSatellite_0.setVisible(true);lyr_Ratio_pop_acc_1.setVisible(true);lyr_MMM_MMM_PolesZonage_2.setVisible(false);
var layersList = [lyr_GoogleSatellite_0,lyr_Ratio_pop_acc_1,lyr_MMM_MMM_PolesZonage_2];
lyr_Ratio_pop_acc_1.set('fieldAliases', {'codcomm': 'codcomm', 'nom': 'nom', 'POLE': 'POLE', 'pop_2022_s': 'pop_2022_s', 'densite_co': 'densite_co', 'surface_m2': 'surface_m2', 'ratio_m2ha': 'ratio_m2ha', 'Ratiopopac': 'Ratiopopac', 'Pop_tampon_pop_2022_1': 'Pop_tampon_pop_2022_1', });
lyr_MMM_MMM_PolesZonage_2.set('fieldAliases', {'codcomm': 'codcomm', 'nom': 'nom', 'POLE': 'POLE', 'surface': 'surface', });
lyr_Ratio_pop_acc_1.set('fieldImages', {'codcomm': 'TextEdit', 'nom': 'TextEdit', 'POLE': 'TextEdit', 'pop_2022_s': 'TextEdit', 'densite_co': 'TextEdit', 'surface_m2': 'TextEdit', 'ratio_m2ha': 'TextEdit', 'Ratiopopac': 'TextEdit', 'Pop_tampon_pop_2022_1': 'TextEdit', });
lyr_MMM_MMM_PolesZonage_2.set('fieldImages', {'codcomm': 'TextEdit', 'nom': 'TextEdit', 'POLE': 'TextEdit', 'surface': '', });
lyr_Ratio_pop_acc_1.set('fieldLabels', {'codcomm': 'hidden field', 'nom': 'inline label - visible with data', 'POLE': 'hidden field', 'pop_2022_s': 'hidden field', 'densite_co': 'hidden field', 'surface_m2': 'hidden field', 'ratio_m2ha': 'hidden field', 'Ratiopopac': 'inline label - visible with data', 'Pop_tampon_pop_2022_1': 'hidden field', });
lyr_MMM_MMM_PolesZonage_2.set('fieldLabels', {'codcomm': 'hidden field', 'nom': 'hidden field', 'POLE': 'hidden field', 'surface': 'hidden field', });
lyr_MMM_MMM_PolesZonage_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});