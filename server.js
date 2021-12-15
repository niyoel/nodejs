#!/usr/bin/env node

const color = require('color');
const express = require('express');
const server = express();
server.get('/', function(req, res) {
    res.send('<h1>Hello World with Express and Node</h1>');
    res.end();
});
server.listen(3000, function() {
    console.log("server on 3000".blue);
});
let npxcard = require('npxcard')
let { overwrite, getName } = require('country-list');
overwrite = ([{
        "Date": "2021-01-01",
        "localName": "Neujahr",
        "name": "New Year's Day",
        "types": [
            "Public"
        ]

    },
    {
        "Date": "2021-04-04",
        "localName": "Pasen",
        "name": "Easter Sunday",
        "types": [
            "Public"
        ]

    },
    {
        "Date": "2021-04-05",
        "localName": "Paasmaandag",
        "name": "Easter Monday",
        "types": [
            "Public"
        ]

    },
    {
        "Date": "2021-05-01",
        "localName": "Dag van de arbeid",
        "name": "Labour Day",
        "types": [
            "Public"
        ]

    },
    {
        "Date": "2021-05-13",
        "localName": "Onze Lieve Heer hemel",
        "name": "Ascension Day",
        "types": [
            "Public"
        ]

    },
    {
        "Date": "2021-05-24",
        "localName": "Pinkstermaandag",
        "name": "Whit Monday",
        "types": [
            "Public"
        ]

    },
    {
        "Date": "2021-07-21",
        "localName": "Nationale feestdag",
        "name": "Belgian National Day",
        "types": [
            "Public"
        ]

    },
    {
        "Date": "2021-08-15",
        "localName": "Onze Lieve Vrouw hemelvaart",
        "name": "Assumption Day",
        "types": [
            "Public"
        ]

    },
    {
        "Date": "2021-11-01",
        "localName": "Allerheiligen",
        "name": "All Saints' Day",
        "types": [
            "Public"
        ]

    },
    {
        "Date": "2021-11-11",
        "localName": "Wapenstilstand",
        "name": "Armistice Day",
        "types": [
            "Public"
        ]

    },
    {
        "Date": "2021-12-25",
        "localName": "Kerstdag",
        "name": "Christmas Day",
        "types": [
            "Public"
        ]

    }

])


console.log(getName('BE'));
console.log(overwrite);