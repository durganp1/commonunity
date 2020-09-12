
// var calendar = require("calendar")

// var http = require('http')

// var cal = new Calendar()
//   ;

// var monthHTML = function monthHTML(year, month) {
//   if (typeof year === "undefined") {
//     var now = new Date();
//     year = now.getFullYear();
//     month = now.getMonth();
//   };
//   var getDayOrBlank = function getDayOrBlank(date) {
//     return date.getMonth() === month ? date.getDate().toString() : "&nbsp;";
//   };
//   var weeks = cal.monthDates(year, month, getDayOrBlank, function (week) {
//     return week.join("</td><td>")
//   });
//   return '<tr><td>'+weeks.join('</td></tr>\n<tr><td>')+'</td></tr>';
// }

// var page = function page(req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('<html><head><title>Calend‡rio</title>');
//   res.write('<style>td {text-align: center; border:1px solid #aaa;}</style>');
//   res.write('</head><body>');
//   res.write('<table>' + monthHTML() + '</table>');
//   res.end('</body></html>');
// }

// http.createServer(page).listen(1337, "127.0.0.1");
// console.log('Calendar server running at http://127.0.0.1:1337/');

// //does this need ane vent handler? 
// // document.querySelector('.new-event-form').addEventListener('submit', newEventHandler);
// import { Calendar } from '@fullcalendar/core';
// import dayGridPlugin from '@fullcalendar/daygrid';


// document.addEventListener('DOMContentLoaded', function() {
//   var calendarEl = document.getElementById('calendar');

//   var calendar = new Calendar(calendarEl, {
//     plugins: [ dayGridPlugin ]
//   });

//   calendar.render();
// });