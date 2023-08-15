const d = new Date();

var time = d.getHours() + ":" + d.getMinutes()
var date = d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear()

document.getElementById('date').innerHTML = date 
document.getElementById('time').innerHTML = time



fetch('https://www.boredapi.com/api/activity/')
 .then(res => res.json())
 .then(data => document.getElementById('data').innerHTML = data.activity)
 