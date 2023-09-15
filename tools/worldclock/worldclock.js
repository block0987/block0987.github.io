function updateClock() {
    const regionSelect = document.getElementById("region");
    const timeDisplay = document.getElementById("time");
    const isDateChecked = document.getElementById("isDate").checked;

    const selectedRegion = regionSelect.value;
    const options = { timeZone: selectedRegion, hour12: false };

    const now = new Date();
    const timeString = now.toLocaleTimeString(undefined, options);

    let displayString = timeString;
    if (isDateChecked) {
        const dateString = now.toLocaleDateString(undefined, { timeZone: selectedRegion });
        displayString = `${dateString} ${timeString}`;
    }

    timeDisplay.textContent = displayString;
}

updateClock();
setInterval(updateClock, 100);
