const express = require('express');

const router = express.Router();

const { employee } = require('./Controllers.js/employee');

router.get('/', (req, res) => {

    res.status(200).json("I did It here.");

});

router.get('/:employeeId', (req, res) => {

    
    res.status(200).json("I did it for particular employee here.");

});


router.post('/', (req, res) => {

    const emp = {
        Name: req.body.Name,
        Ph_no: req.body.Name,
        Address: req.body.Name,
        Surname: req.body.Name,
        pincode: req.body.Name,
        Designation: req.body.Name,
        Company: req.body.Name,
        City: req.body.Name,
        State: req.body.Name,
        Country: req.body.Name

    }

    res.status(200).json({

        message: 'post successful',
        em: emp

    });

});

router.patch('/', (req, res) => {

    res.status(200).json({

        message: 'patch successful',

    });

});

router.put('/', (req, res) => {

    res.status(200).json({

        message: 'put successful',

    });

});

router.delete('/', (req, res) => {


    res.status(200).json({

        message: 'delete successful',

    });
});