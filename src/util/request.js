const $ = require("jquery");

function requestJSON() {
  console.log($.getJSON("https://dweet.io/get/latest/dweet/for/ThingSpeakNotifierPi"));
  return $.getJSON("https://dweet.io/get/latest/dweet/for/ThingSpeakNotifierPi");
}

module.exports = requestJSON;
