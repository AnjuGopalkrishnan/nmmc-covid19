const router = require('express').Router();
let Cases = require('../models/daily-count.model');
let Visits = require('../models/visits.model');
let Total = require('../models/total-count.model');
let DailyTotal = require('../models/total-count-daily.model');

router.route('/').get((req, res) => {
    Cases.find()
        .then(cases => res.json(cases))
        .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/total').get((req, res) => {
    Total.find()
        .then(cases => res.json(cases))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/totalDaily').get((req, res) => {
    DailyTotal.find()
        .then(cases => res.json(cases))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const date = req.body.date;
    const placesCount = req.body.placesCount;
    var dailytotalPosiive=0;
    var dailytotalRecovered=0;
    req.body.placesCount.forEach(element => {
        dailytotalPosiive = dailytotalPosiive + element.Positive;
        dailytotalRecovered = dailytotalRecovered + element.Recovered;
    });

    //add place-wise data
    const newCases = new Cases({
        date,
        placesCount
    });
    newCases.save()
    .then(() => res.json('Cases added!'))
    .catch(err => res.status(400).json('Error: ' + err));

    //add daily total
    const dailytotal = new DailyTotal({
        date,
        dailytotalPosiive,
        dailytotalRecovered
    });
    dailytotal.save()
    .then(() => res.json('Daily total added!'))
    .catch(err => res.status(400).json('Error: ' + err));

    //calculate & update overall total
    Total.update({},{$inc: { totalPosiive: dailytotalPosiive, totalRecovered: dailytotalRecovered, totalDeceased: parseInt(req.body.deceasedToday) } }, 
    {new: true },function(err, response) {
    if (err) {
        res.status(400).json('Error: ' + err);
    } else {
        res.json('Overall total calculated and updated!')
    }
    });
});

router.route('/addDailyTotal').post((req, res) => {
    const date = req.body.date;
    const dailytotalPosiive = req.body.dailytotalPosiive;;
    const dailytotalRecovered = req.body.dailytotalRecovered;;
    const dailyDeceased = req.body.dailyDeceased;;

    const dailytotal = new DailyTotal({
        date,
        dailytotalPosiive,
        dailytotalRecovered,
        dailyDeceased
    });
    dailytotal.save()
    .then(() => res.json('Daily total added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/totaladd').post((req, res) => {
    
    const total = new Total({
        totalPosiive : req.body.totalPosiive,
        totalRecovered : req.body.totalRecovered,
        totalDeceased : req.body.totalDeceased
    });

    total.save()
    .then(() => res.json('Total cases added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/today').get((req, res) => {
    Cases.find().sort({"date":-1}).limit(1)
        .then(cases => res.json(cases))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/hits').post((req, res) => {   
    Visits.update({},{ hits : req.body.hits }, 
    {upsert: true},function(err, response) {
    if (err) {
        res.status(400).json('Error: ' + err);
    } else {
        res.json('Hits updated!')
    }
    });
});


module.exports = router;