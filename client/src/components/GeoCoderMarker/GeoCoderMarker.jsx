import React, { useEffect, useState } from 'react'
import { Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import "leaflet/dist/leaflet.css"
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import * as ELG from 'esri-leaflet-geocoder'
import PropTypes from 'prop-types';

let DefaulIcon = L.icon ({
    iconUrl : icon, 
    shadowUrl: iconShadow
})
L.Marker.prototype.options.icon = DefaulIcon



const GeoCoderMarker = ({address}) => {
    
    const apiKey="62263460b345f14c7234e63b38b23e9b";
    const cityUrl="https://api.openweathermap.org/geo/1.0/direct?q="+c+"&appid="+apiKey;
    var lat=weatherData[0].lat;
    var lon=weatherData[0].lon;
    console.log({lat,lon});
    https.get(cityUrl,function(response){
    response.on("data",function(data){
      const weatherData=JSON.parse(data);
         
  });
  });

  
    const map = useMap()
    const [position, setPosition] = useState([22.719568, 75.857727])
    address="Kalpana Nagar,Bhopal,India";
    
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          var latitude = results[0].geometry.location.lat();
          var longitude = results[0].geometry.location.lng();
          alert(latitude);
        } 
      }); 
    // useEffect(()=> {
    //       console.log(address);
    //       const getResults = async () => {
    //         const results = await ELG.geocode().text(address).run();
    //         return results;
    //       }
    //       const results =  getResults();
    //       console.log(results);
    //           if(results?.results?.length > 0){
    //               const {lat, lng} = results?.results[0].latlng || { lat: 0, lng: 0 };
    //               console.log({lat,lng});
    //               setPosition([lat, lng]);
    //               map.flyTo([lat, lng], 6)
    //           }
    //   }, [address, map]);

  return (
    <Marker position={position} icon={DefaulIcon}>
        <Popup/>
    </Marker>
  )
}
GeoCoderMarker.propTypes = {
    address: PropTypes.string.isRequired,
};
export default GeoCoderMarker