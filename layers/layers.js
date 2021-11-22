var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_NASASEDACEarthquakeHazardFrequencyandDistribution_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://sedac.ciesin.org/geoserver/ows?",
    attributions: ' &middot; <a href="">NASA, CIESIN</a>',
                              params: {
                                "LAYERS": "ndh:ndh-earthquake-frequency-distribution",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "NASA SEDAC Earthquake Hazard Frequency and Distribution",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_NASASEDACEarthquakeHazardFrequencyandDistribution_1, 0]);

        var lyr_OSMStandard_2 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ica_limite_distrito_3 = new ol.format.GeoJSON();
var features_ica_limite_distrito_3 = format_ica_limite_distrito_3.readFeatures(json_ica_limite_distrito_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ica_limite_distrito_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ica_limite_distrito_3.addFeatures(features_ica_limite_distrito_3);
var lyr_ica_limite_distrito_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ica_limite_distrito_3, 
                style: style_ica_limite_distrito_3,
                interactive: true,
    title: 'ica_limite_distrito<br />\
    <img src="styles/legend/ica_limite_distrito_3_0.png" /> <br />\
    <img src="styles/legend/ica_limite_distrito_3_1.png" /> CHINCHA<br />\
    <img src="styles/legend/ica_limite_distrito_3_2.png" /> ICA<br />\
    <img src="styles/legend/ica_limite_distrito_3_3.png" /> NASCA<br />\
    <img src="styles/legend/ica_limite_distrito_3_4.png" /> PALPA<br />\
    <img src="styles/legend/ica_limite_distrito_3_5.png" /> PISCO<br />'
        });
var format_ica_rios_4 = new ol.format.GeoJSON();
var features_ica_rios_4 = format_ica_rios_4.readFeatures(json_ica_rios_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ica_rios_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ica_rios_4.addFeatures(features_ica_rios_4);
var lyr_ica_rios_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ica_rios_4, 
                style: style_ica_rios_4,
                interactive: true,
                title: '<img src="styles/legend/ica_rios_4.png" /> ica_rios'
            });
var format_ica_sitios_arqueologicos_5 = new ol.format.GeoJSON();
var features_ica_sitios_arqueologicos_5 = format_ica_sitios_arqueologicos_5.readFeatures(json_ica_sitios_arqueologicos_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ica_sitios_arqueologicos_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ica_sitios_arqueologicos_5.addFeatures(features_ica_sitios_arqueologicos_5);
var lyr_ica_sitios_arqueologicos_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ica_sitios_arqueologicos_5, 
                style: style_ica_sitios_arqueologicos_5,
                interactive: true,
                title: '<img src="styles/legend/ica_sitios_arqueologicos_5.png" /> ica_sitios_arqueologicos'
            });

lyr_OSMStandard_0.setVisible(true);lyr_NASASEDACEarthquakeHazardFrequencyandDistribution_1.setVisible(true);lyr_OSMStandard_2.setVisible(true);lyr_ica_limite_distrito_3.setVisible(true);lyr_ica_rios_4.setVisible(true);lyr_ica_sitios_arqueologicos_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_NASASEDACEarthquakeHazardFrequencyandDistribution_1,lyr_OSMStandard_2,lyr_ica_limite_distrito_3,lyr_ica_rios_4,lyr_ica_sitios_arqueologicos_5];
lyr_ica_limite_distrito_3.set('fieldAliases', {'CCDD': 'CCDD', 'NOMBDEP': 'NOMBDEP', 'CCPP': 'CCPP', 'NOMBPROV': 'NOMBPROV', 'CCDI': 'CCDI', 'NOMBDIST': 'NOMBDIST', 'CAPITAL': 'CAPITAL', 'UBIGEO': 'UBIGEO', 'IDPROV': 'IDPROV', 'CODIGO': 'CODIGO', 'CNT_CCPP': 'CNT_CCPP', 'DESCRIPCIO': 'DESCRIPCIO', });
lyr_ica_rios_4.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'CLASIFICAC': 'CLASIFICAC', 'NOMBRE': 'NOMBRE', 'UBIGEO': 'UBIGEO', 'NOMDEP': 'NOMDEP', 'CCDD': 'CCDD', 'NOMPROV': 'NOMPROV', 'CCPP': 'CCPP', 'NOMDIST': 'NOMDIST', 'CCDI': 'CCDI', 'IDPROV': 'IDPROV', 'Shape_STLe': 'Shape_STLe', 'ORIG_FID': 'ORIG_FID', 'Shape_Leng': 'Shape_Leng', 'Tipo': 'Tipo', });
lyr_ica_sitios_arqueologicos_5.set('fieldAliases', {'Dpto': 'Dpto', 'Prov': 'Prov', 'Dist': 'Dist', 'Nombre': 'Nombre', 'Fuente': 'Fuente', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_ica_limite_distrito_3.set('fieldImages', {'CCDD': 'TextEdit', 'NOMBDEP': 'TextEdit', 'CCPP': 'TextEdit', 'NOMBPROV': 'TextEdit', 'CCDI': 'TextEdit', 'NOMBDIST': 'TextEdit', 'CAPITAL': 'TextEdit', 'UBIGEO': 'TextEdit', 'IDPROV': 'TextEdit', 'CODIGO': 'TextEdit', 'CNT_CCPP': 'TextEdit', 'DESCRIPCIO': 'TextEdit', });
lyr_ica_rios_4.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'CLASIFICAC': 'TextEdit', 'NOMBRE': 'TextEdit', 'UBIGEO': 'TextEdit', 'NOMDEP': 'TextEdit', 'CCDD': 'TextEdit', 'NOMPROV': 'TextEdit', 'CCPP': 'TextEdit', 'NOMDIST': 'TextEdit', 'CCDI': 'TextEdit', 'IDPROV': 'TextEdit', 'Shape_STLe': 'TextEdit', 'ORIG_FID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_ica_sitios_arqueologicos_5.set('fieldImages', {'Dpto': 'TextEdit', 'Prov': 'TextEdit', 'Dist': 'TextEdit', 'Nombre': 'TextEdit', 'Fuente': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_ica_limite_distrito_3.set('fieldLabels', {'CCDD': 'no label', 'NOMBDEP': 'no label', 'CCPP': 'no label', 'NOMBPROV': 'no label', 'CCDI': 'no label', 'NOMBDIST': 'no label', 'CAPITAL': 'no label', 'UBIGEO': 'no label', 'IDPROV': 'no label', 'CODIGO': 'no label', 'CNT_CCPP': 'no label', 'DESCRIPCIO': 'no label', });
lyr_ica_rios_4.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'CLASIFICAC': 'no label', 'NOMBRE': 'no label', 'UBIGEO': 'no label', 'NOMDEP': 'no label', 'CCDD': 'no label', 'NOMPROV': 'no label', 'CCPP': 'no label', 'NOMDIST': 'no label', 'CCDI': 'no label', 'IDPROV': 'no label', 'Shape_STLe': 'no label', 'ORIG_FID': 'no label', 'Shape_Leng': 'no label', 'Tipo': 'no label', });
lyr_ica_sitios_arqueologicos_5.set('fieldLabels', {'Dpto': 'no label', 'Prov': 'no label', 'Dist': 'no label', 'Nombre': 'no label', 'Fuente': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', });
lyr_ica_sitios_arqueologicos_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});