const request=require('request');
var lati,long;
var geocodeAddress = (address,callback)=>{
var encodedAddress = encodeURIComponent(address);

request({
 url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&YOURKEY=AIzaSyBzEndhGmqogVq53-pRda0Zz8AisFSIUdM`,
 json: true
},(error,response,body) =>{
 if (error) {
   callback('unable to connect to server');
 }
 else if (body.status === 'ZERO_RESULTS') {
   callback('invalid address');
 }
 else if (body.status ==='OK') {
   callback(undefined,{
     address:body.results[0].formatted_address,
     Latitude: body.results[0].geometry.location.lat,
     Longitude: body.results[0].geometry.location.lng
   });
 // console.log(`Address: ${body.results[0].formatted_address}`);
 // console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
 // console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
}
});
};
// request({
//   url: `https://api.darksky.net/forecast/c8c178b98804aec54f8552c030d8cdfd/${lati},${long}`,
//   json: true
// },(error,response,body)=>{
//   console.log(body);
// });
module.exports.geocodeAddress=geocodeAddress;
