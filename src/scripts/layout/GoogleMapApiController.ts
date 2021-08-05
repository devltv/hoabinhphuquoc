// declare var google: any;

// let map: google.maps.Map;

// function initMap(){

//     // Map options
//     map = new google.maps.Map(document.getElementById("map") as HTMLElement , {
//         center: { lat: 10.212398668954327, lng: 103.97652478376206 },
//         zoom: 15,
//         styles:
        
//         [
            
//             {
//                 featureType: "poi",
//                 elementType: "all",
//                 stylers: [
//                     {
//                         visibility: "on",
                        
//                     },
//                     {
//                         scale: 1
//                     }
//                 ],
//             },
//             {
//                 featureType: "road.arterial",
//                 elementType: "labels.icon",
//                 stylers: [
//                     {
//                         visibility: "on",
//                     },
//                 ],
//             },
//             {
//                 featureType: "transit",
//                 elementType: "all",
//                 stylers: [
//                     {
//                         visibility: "off",
//                     },
//                 ],
//             },
//             {
//                 featureType: "water",
//                 elementType: "all",
//                 stylers: [
//                     {
//                         color: "#2786DE",
//                     },
//                     {
//                         visibility: "on",
//                     },
//                 ],
//             },
//         ]
//       });

//     var  imageMarker = {
//         url: '../assets/images/page/contact/location-map.png',
//         // scaledSize : new google.maps.Size(40, 40),
//     };

//     //   Add marker
//     var marker =  new google.maps.Marker({
//         position:{ lat: 10.210073502012387, lng: 103.96133308465446 },
//         map: map,
//         icon: imageMarker,
//     })

//     const contentMap =
//         '<div id="mapPopup">' +
//             '<image class="mapPopupImage" src="../assets/images/page/index/i5-img.png"></image>' +
//             '<p class="inforPopup">HÒA BÌNH PHÚ QUỐC RESORT</p>'
//         "</div>"
//     ;

//     var inforWindow = new google.maps.InfoWindow({
//         content: contentMap
//     })

//     marker.addListener('click',()=>{
//         inforWindow.open(map, marker)
//     })
//     google.maps.event.trigger(marker, "click");
// }


export const GoogleMapApiController = function (){
    // initMap();
}