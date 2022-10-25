// Set the date we're counting down to
var countDownDate = new Date('2022/12/3 00:00:00').getTime()

// Update the count down every 1 second
var x = setInterval(function () {
	// Get today's date and time
	var now = new Date().getTime()

	// Find the distance between now and the count down date
	var distance = countDownDate - now

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24))
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
	var seconds = Math.floor((distance % (1000 * 60)) / 1000)

	// Output the result in an element with id="demo"
	// document.getElementById('clock').innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's '
    const daysElm = document.querySelector('#days')
    const hoursElm = document.querySelector('#hours')
    const minutesElm = document.querySelector('#minutes')
    const secondsElm = document.querySelector('#seconds')
    daysElm.innerHTML = `<span class='count'>${days}</span> <span class='unit'>NGÀY</span>`
    hoursElm.innerHTML = `<span class='count'>${hours}</span> <span class='unit'>GIỜ</span>`
    minutesElm.innerHTML = `<span class='count'>${minutes}</span> <span class='unit'>PHÚT</span>`
    secondsElm.innerHTML = `<span class='count'>${seconds}</span> <span class='unit'>GIÂY</span>`
   
	// If the count down is over, write some text
	if (distance < 0) {
		clearInterval(x)
		document.getElementById('clock').innerHTML = 'EXPIRED'
	}
}, 1000)
