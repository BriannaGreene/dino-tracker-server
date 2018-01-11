var express = require('express');
var router = express.Router();
const DarkSky = require('dark-sky')
const darksky = new DarkSky(process.env.DARK_SKY)

router.get('/', async (req, res, next) => {
  // code goes here
  console.log('hitting weather route');

    try {
    const { latitude, longitude } = req.body
    const forecast = await darksky
      .options({
        latitude: 37.8267,
        longitude: -122.423
      })
      .get()
    res.status(200).json(forecast)
  } catch (err) {
    console.log(err);
    next(err)
  }

})

router.get('/:id', (req, res, next) => {
  const id = req.params.id
  // code goes here
})


module.exports = router;
