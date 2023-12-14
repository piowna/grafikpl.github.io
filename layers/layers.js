var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PL2019_1 = new ol.format.GeoJSON();
var features_PL2019_1 = format_PL2019_1.readFeatures(json_PL2019_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PL2019_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PL2019_1.addFeatures(features_PL2019_1);
var lyr_PL2019_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PL2019_1, 
                style: style_PL2019_1,
                interactive: true,
    title: 'PL 2019<br />\
    <img src="styles/legend/PL2019_1_0.png" /> industri<br />\
    <img src="styles/legend/PL2019_1_1.png" /> lahan terbuka<br />\
    <img src="styles/legend/PL2019_1_2.png" /> laut dangkal<br />\
    <img src="styles/legend/PL2019_1_3.png" /> mangrove<br />\
    <img src="styles/legend/PL2019_1_4.png" /> permukiman<br />\
    <img src="styles/legend/PL2019_1_5.png" /> rataan lumpur<br />\
    <img src="styles/legend/PL2019_1_6.png" /> sawah<br />\
    <img src="styles/legend/PL2019_1_7.png" /> semak<br />\
    <img src="styles/legend/PL2019_1_8.png" /> sungai<br />\
    <img src="styles/legend/PL2019_1_9.png" /> tambak<br />\
    <img src="styles/legend/PL2019_1_10.png" /> tanggul<br />\
    <img src="styles/legend/PL2019_1_11.png" /> <br />'
        });
var format_TOL_2 = new ol.format.GeoJSON();
var features_TOL_2 = format_TOL_2.readFeatures(json_TOL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TOL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TOL_2.addFeatures(features_TOL_2);
var lyr_TOL_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TOL_2, 
                style: style_TOL_2,
                interactive: true,
                title: '<img src="styles/legend/TOL_2.png" /> TOL'
            });
var format_BATASADM_3 = new ol.format.GeoJSON();
var features_BATASADM_3 = format_BATASADM_3.readFeatures(json_BATASADM_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASADM_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASADM_3.addFeatures(features_BATASADM_3);
var lyr_BATASADM_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BATASADM_3, 
                style: style_BATASADM_3,
                interactive: true,
                title: '<img src="styles/legend/BATASADM_3.png" /> BATAS ADM'
            });
var format_TITIKSURVEI_4 = new ol.format.GeoJSON();
var features_TITIKSURVEI_4 = format_TITIKSURVEI_4.readFeatures(json_TITIKSURVEI_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TITIKSURVEI_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TITIKSURVEI_4.addFeatures(features_TITIKSURVEI_4);
var lyr_TITIKSURVEI_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TITIKSURVEI_4, 
                style: style_TITIKSURVEI_4,
                interactive: true,
                title: '<img src="styles/legend/TITIKSURVEI_4.png" /> TITIK SURVEI'
            });
var format_PL2023_5 = new ol.format.GeoJSON();
var features_PL2023_5 = format_PL2023_5.readFeatures(json_PL2023_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PL2023_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PL2023_5.addFeatures(features_PL2023_5);
var lyr_PL2023_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PL2023_5, 
                style: style_PL2023_5,
                interactive: true,
    title: 'PL 2023<br />\
    <img src="styles/legend/PL2023_5_0.png" /> lahan terbuka<br />\
    <img src="styles/legend/PL2023_5_1.png" /> mangrove<br />\
    <img src="styles/legend/PL2023_5_2.png" /> permukiman<br />\
    <img src="styles/legend/PL2023_5_3.png" /> Tambak<br />\
    <img src="styles/legend/PL2023_5_4.png" /> Waduk Multi Guna<br />\
    <img src="styles/legend/PL2023_5_5.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_PL2019_1.setVisible(true);lyr_TOL_2.setVisible(true);lyr_BATASADM_3.setVisible(true);lyr_TITIKSURVEI_4.setVisible(true);lyr_PL2023_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_PL2019_1,lyr_TOL_2,lyr_BATASADM_3,lyr_TITIKSURVEI_4,lyr_PL2023_5];
lyr_PL2019_1.set('fieldAliases', {'id': 'id', 'PL_2019': 'PL_2019', 'LUAS_HA': 'LUAS_HA', });
lyr_TOL_2.set('fieldAliases', {'id': 'id', 'jalan tol': 'jalan tol', });
lyr_BATASADM_3.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_TITIKSURVEI_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'pdfmaps_ph': 'pdfmaps_ph', 'Photo Name': 'Photo Name', 'Photo Date': 'Photo Date', 'Photo Time': 'Photo Time', 'Photo Loca': 'Photo Loca', 'Photo Orie': 'Photo Orie', 'Device Typ': 'Device Typ', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'LUASWH': 'LUASWH', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Titik': 'Titik', 'Foto': 'Foto', 'Luas_Ha': 'Luas_Ha', 'layer': 'layer', 'path': 'path', });
lyr_PL2023_5.set('fieldAliases', {'id': 'id', 'PL_2019': 'PL_2019', 'PL_2023': 'PL_2023', 'Perubaahan': 'Perubaahan', 'Luas_Ha_23': 'Luas_Ha_23', });
lyr_PL2019_1.set('fieldImages', {'id': 'TextEdit', 'PL_2019': 'TextEdit', 'LUAS_HA': 'TextEdit', });
lyr_TOL_2.set('fieldImages', {'id': '', 'jalan tol': '', });
lyr_BATASADM_3.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_TITIKSURVEI_4.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'pdfmaps_ph': '', 'Photo Name': '', 'Photo Date': '', 'Photo Time': '', 'Photo Loca': '', 'Photo Orie': '', 'Device Typ': '', 'NAMOBJ': '', 'REMARK': '', 'LUASWH': '', 'LCODE': '', 'METADATA': '', 'WADMKD': '', 'WADMKC': '', 'WADMKK': '', 'WADMPR': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'Titik': '', 'Foto': '', 'Luas_Ha': '', 'layer': '', 'path': '', });
lyr_PL2023_5.set('fieldImages', {'id': 'TextEdit', 'PL_2019': 'TextEdit', 'PL_2023': 'TextEdit', 'Perubaahan': 'TextEdit', 'Luas_Ha_23': 'TextEdit', });
lyr_PL2019_1.set('fieldLabels', {'id': 'inline label', 'PL_2019': 'inline label', 'LUAS_HA': 'inline label', });
lyr_TOL_2.set('fieldLabels', {'id': 'inline label', 'jalan tol': 'no label', });
lyr_BATASADM_3.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_TITIKSURVEI_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'pdfmaps_ph': 'no label', 'Photo Name': 'no label', 'Photo Date': 'no label', 'Photo Time': 'no label', 'Photo Loca': 'no label', 'Photo Orie': 'no label', 'Device Typ': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'LUASWH': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'WADMKD': 'inline label', 'WADMKC': 'inline label', 'WADMKK': 'inline label', 'WADMPR': 'inline label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Titik': 'inline label', 'Foto': 'inline label', 'Luas_Ha': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_PL2023_5.set('fieldLabels', {'id': 'inline label', 'PL_2019': 'inline label', 'PL_2023': 'inline label', 'Perubaahan': 'inline label', 'Luas_Ha_23': 'inline label', });
lyr_PL2023_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});