import express from 'express'
const router = express.Router();

import User from '../models/user.js';
import Deal from '../models/deal.js';

router.get('/', async (req, res) => {
    const allDeals = await Deal.find({})
    res.render('deals/index.ejs', { deals: allDeals})
})

router.get('/new', (req, res) => {
    res.render('deals/new.ejs')
})

router.get('/:dealId', async (req, res) => {
    try {
        const dealFound = await Deal.findById(req.params.dealId)
        res.render('deals/show.ejs', { deal: dealFound })    
    } catch (error) {
        console.error(error)
    }
})

router.get('/:dealId/edit', async (req, res) => {
    try {
        const dealFound = await Deal.findById(req.params.dealId)
        res.render('deals/edit.ejs', { deal: dealFound })    
    } catch (error) {
        console.error(error)
    }
})

router.post('/', async (req, res) => {
try {
    const currentUser = req.session.user
    req.body.owner = currentUser._id
    await Deal.create(req.body)
    res.redirect('/deal')
} catch (error) {
    console.error(error)
}
})

router.put('/:dealId', async (req, res) => {
    const id = req.params.dealId
    const updateData = req.body
    const updatedDeal = await Deal.findByIdAndUpdate(id, updateData)
    res.redirect('/deal')
})


router.delete('/:dealId', async (req, res) => {
    await Deal.findByIdAndDelete(req.params.dealId)
    res.redirect('/deal')
})





export default router