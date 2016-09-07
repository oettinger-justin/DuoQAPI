/* https://developer.amazon.com/public/community/post/Tx213D2XQIYH864/Announcing-the-Alexa-Skills-Kit-for-Node-js for reference*/
const Alexa = require('alexa-sdk');
const league = require('./league.js');

exports.handler = function(event, context, callback){
    const alexa = Alexa.handler(event, context);
    alexa.appId = 'APPID';/*TODO*/
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {};


