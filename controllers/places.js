const router = require('express').Router()

router.get('/', (req,res) => {
    let places = [{
        name: 'KFC',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Chicken, kountry fried',
        pic: 'http://placekitten.com/250/250'
    }, {
        name: 'Sleepy Beef',
        city: 'Pheonix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'https://placekitten.com/250/250'
    }]
    res.render ('places/index', {places})
})
module.exports = router