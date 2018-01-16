var express = require('express');
var router = express.Router();
const DarkSky = require('dark-sky')
const darksky = new DarkSky(process.env.DARK_SKY)

router.get('/', async (req, res, next) => {
    try {
    const { latitude, longitude } = req.body
    const forecast = await darksky
      .options({
        latitude: 40.0150,
        longitude: -105.270
      })
      .get()
      .then(info => {
        let weather = {}
        if (info) {
          console.log(info.currently);
          weather = {
            currentSummary: info.currently.summary,
            currentIcon: info.currently.icon,
            currentTemperature: info.currently.temperature,
            daily1Summary: info.daily.data[0].summary,
            daily1Icon: info.daily.data[0].icon,
            daily1TempHigh: info.daily.data[0].temperatureHigh,
            daily1TempLow: info.daily.data[0].temperatureLow,
            daily2Summary: info.daily.data[1].summary,
            daily2Icon: info.daily.data[1].icon,
            daily2TempHigh: info.daily.data[1].temperatureHigh,
            daily2TempLow: info.daily.data[1].temperatureLow,
            daily3Summary: info.daily.data[2].summary,
            daily3Icon: info.daily.data[2].icon,
            daily3TempHigh: info.daily.data[2].temperatureHigh,
            daily3TempLow: info.daily.data[2].temperatureLow,
            daily4Summary: info.daily.data[3].summary,
            daily4Icon: info.daily.data[3].icon,
            daily4TempHigh: info.daily.data[3].temperatureHigh,
            daily4TempLow: info.daily.data[3].temperatureLow,
            daily5Summary: info.daily.data[4].summary,
            daily5Icon: info.daily.data[4].icon,
            daily5TempHigh: info.daily.data[4].temperatureHigh,
            daily5TempLow: info.daily.data[4].temperatureLow,
            daily6Summary: info.daily.data[5].summary,
            daily6Icon: info.daily.data[5].icon,
            daily6TempHigh: info.daily.data[5].temperatureHigh,
            daily6TempLow: info.daily.data[5].temperatureLow,
            daily7Summary: info.daily.data[6].summary,
            daily7Icon: info.daily.data[6].icon,
            daily7TempHigh: info.daily.data[6].temperatureHigh,
            daily7TempLow: info.daily.data[6].temperatureLow,
          }
        }
        res.status(200).json(weather)
      })
  } catch (err) {
    next(err)
  }
})

module.exports = router;
