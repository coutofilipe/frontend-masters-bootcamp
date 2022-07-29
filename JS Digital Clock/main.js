function updateTime() {
    // get all parts of the current time
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let timeOfDay;
    // add leading zero's to minutes and seconds
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    // get time of day (am or pm)
    if (hours >= 12 && hours < 24) {
        timeOfDay = 'pm';
    }
    else {
        timeOfDay = 'am';
    }
    // convert hours from 24-hour time to 12-hour time
    if (hours > 12) {
        hours = hours - 12;
    }
    // splice them together into a character string named "currentTime"
    let currentTime = `${hours}h:${minutes}m:${seconds} ${timeOfDay}`;
    // get the clock div
    let myClock = document.getElementById('clock');
    // write the currentTime string to the clock div
    myClock.innerHTML = currentTime;
}

function toggleClock() {
    // get the clock
    let myClock = document.getElementById('clock');

    // get the current value of the clock's display property
    let displaySetting = myClock.style.display;
    console.log(displaySetting);

    // also get the clock button, so we can change what it says
    let clockButton = document.getElementById('clockButton');

    // now toggle the clock and the button text, depending on current state
    if (displaySetting == 'block') {
      // clock is visible. hide it
      myClock.style.display = 'none';
      // change button text
      clockButton.innerHTML = 'Show clock';
    }
    else {
      // clock is hidden. show it
      myClock.style.display = 'block';
      // change button text
      clockButton.innerHTML = 'Hide clock';
    }
  }