var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
const rp = require('request-promise');
const url = 'https://www.blogto.com/events/';
const $ = require('cheerio');

rp(url)
  .then(function(html){
    //success!
    console.log($('.event-info-box', html).length);
    console.log($('.event-info-box', html).text());
  })
  .catch(function(err){
    //handle error
  });

// app.listen('8081')
// console.log('Magic happens on port 8081');
// exports = module.exports = app;
