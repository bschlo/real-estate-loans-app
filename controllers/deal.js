import express from 'express'
const router = express.Router();

import User from '../models/user.js';
import Deal from '../models/deal.js';

const userRequired = (req, res, next) => {
    if (req.session.user) return next();
    res.redirect('/auth');
};  


router.get('/', async (req, res) => {
    
    const allDeals = await Deal.find({ owner: req.session.user._id })
    res.render('deals/index.ejs', { deals: allDeals})
})

router.get('/new', userRequired, (req, res) => {
    res.render('deals/new.ejs')
})

router.get('/:dealId', userRequired, async (req, res) => {
    try {
        const dealFound = await Deal.findById(req.params.dealId)
        res.render('deals/show.ejs', { deal: dealFound })    
    } catch (error) {
        console.error(error)
    }
})

router.get('/:dealId/edit', userRequired, async (req, res) => {
    try {
        const dealFound = await Deal.findById(req.params.dealId)
        res.render('deals/edit.ejs', { deal: dealFound })    
    } catch (error) {
        console.error(error)
    }
})

router.post('/', userRequired, async (req, res) => {
try {
    const currentUser = req.session.user
    req.body.owner = currentUser._id
    await Deal.create(req.body)
    res.redirect('/deal')
} catch (error) {
    console.error(error)
}
})

router.put('/:dealId', userRequired, async (req, res) => {
    const id = req.params.dealId
    const updateData = req.body
    const updatedDeal = await Deal.findByIdAndUpdate(id, updateData)
    res.redirect('/deal')
})


router.delete('/:dealId', userRequired, async (req, res) => {
    await Deal.findByIdAndDelete(req.params.dealId)
    res.redirect('/deal')
})


export default router