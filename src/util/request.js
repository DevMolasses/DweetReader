const $ = require("jquery");

// function requestJSON(channelName) {
//   console.log($.getJSON(`https://dweet.io/get/latest/dweet/for/${channelName}`));
//   return $.getJSON(`https://dweet.io/get/latest/dweet/for/${channelName}`);
// }

function requestJSON(channelName) {
  var jsonResponse = $.getJSON(`https://dweet.io/get/latest/dweet/for/${channelName}`);
  console.log(jsonResponse);
  return jsonResponse;
}

module.exports = requestJSON;
