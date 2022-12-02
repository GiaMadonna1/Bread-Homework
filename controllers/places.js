const router = require('express').Router()

router.post ('/', (req,res)=> {
    console.log(req.body)
    res.send('POST /places')
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/', (req,res) => {
    let places = [{
        name: 'KFC',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Chicken, kountry fried',
        pic: '/images/kountryfriedfish.avif'
    }, {
        name: 'Sleepy Beef',
        city: 'Pheonix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/goodbeef.avif'
    }]
    res.render ('places/index', {places})
})
module.exports = router

