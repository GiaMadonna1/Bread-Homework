const router = require('express').Router()
const places = require('../modules/places.js')

router.get('/', (req,res) => {
    res.render ('places/index', {places})
})

router.post ('/', (req,res)=> {
    if (!req.body.pic) {
        //default image if one not required
        req.body.pic = "http://placekiteen.com/400/400"
    }
    if (!req.body.city) {
        //default town
        req.body.city= "Anytown"
    }
    if (!req.body.state) {
        //default state
        req.body.state = "USA"
    }
    places.push(req.body)
    res.redirect('/places')
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/:id', (req,res)=> {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render ('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        res.render ('places/show')
    }
    res.render('places/show', {place: places[id], id})
})

module.exports = router

