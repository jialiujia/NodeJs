window.onload=function(){
	var map=new BMap.Map("map_container");

    var EXAMPLE_URL = "http://api.map.baidu.com/library/MarkerClusterer/1.2/examples/";

	var point1=new BMap.Point(104.072196,30.663491);
	var point2=new BMap.Point(104.073803,30.646894);
	var point3=new BMap.Point(104.049944,30.648634);
	map.addControl(new BMap.NavigationControl({
		anchor:BMAP_ANCHOR_TOP_LEFT,
		type: BMAP_NAVIGATION_CONTROL_LARGE,
	    enableGeolocation: true}));

	map.addControl(new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT}));
	map.addControl(new BMap.MapTypeControl({anchor:BMAP_ANCHOR_TOP_RIGHT}));
	map.enableScrollWheelZoom(true);
	var marker1=new BMap.Marker(point1);
	var marker2=new BMap.Marker(point2);
	var marker3=new BMap.Marker(point3);
	map.centerAndZoom(point1, 15);

	var markers=[];
	markers.push(marker1);
	markers.push(marker2);
    markers.push(marker3);

	var markerCluster=new BMapLib.MarkerClusterer(map,{markers:markers,girdSize:120});
	markerCluster.setMaxZoom(17);
};