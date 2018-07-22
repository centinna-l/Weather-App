const request = require('request');

var getWeather = (lat,lng,callback)=>{
request({
  url: `https://api.darksky.net/forecast/c8c178b98804aec54f8552c030d8cdfd/${lat},${lng}`,
  json: true
},(error,response,body)=>{
  if (!error && response.statusCode === 200) {
    callback(undefined,{
      temperature: body.currently.temperature,
      apparentTemperature: body.currently.apparentTemperature,
      cloudCover: body.currently.cloudCover,
      summary: body.currently.summary
    });
  }else {
    callback('unable to connect to servers');
  }
});
};

module.exports.getWeather = getWeather;
