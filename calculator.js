window.onload = function() {
    // Restore values for calculator.js
    const savedCalves = localStorage.getItem('calves');
    const savedAge = localStorage.getItem('age');
    if (savedCalves !== null) {
        document.getElementById('calves').value = savedCalves;
    }
    if (savedAge !== null) {
        document.getElementById('age').value = savedAge;
    }
    calculateMilkReplacer();

    // Restore values for barrelCalculator.js
    const savedDiameter = localStorage.getItem('diameter');
    const savedVolume = localStorage.getItem('volume');
    if (savedDiameter !== null) {
        document.getElementById('diameter').value = savedDiameter;
    }
    if (savedVolume !== null) {
        document.getElementById('volume').value = savedVolume;
    }
    calculateWaterHeight();
}


// In calculator.js
document.getElementById('calves').addEventListener('input', function() {
    const calves = document.getElementById('calves').value;
    localStorage.setItem('calves', calves);
});
document.getElementById('age').addEventListener('input', function() {
    const age = document.getElementById('age').value;
    localStorage.setItem('age', age);
});

function calculateMilkReplacer() {
    const calves = document.getElementById('calves').value;
    const age = document.getElementById('age').value;

    let litersPerFeed;
    let feedsPerDay;

    switch (age) {
        case '4-7_days':
            litersPerFeed = 2;
            feedsPerDay = 3;
            break;
        case 'week_2':
        case 'week_3':
        case 'week_4':
        case 'week_5':
        case 'week_6':
        case 'week_7':
        case 'week_8':
            litersPerFeed = 3;
            feedsPerDay = 2;
            break;
        case 'week_9':
            litersPerFeed = 2;
            feedsPerDay = 1;
            break;
        default:
            litersPerFeed = 3;
            feedsPerDay = 2;
    }

    const totalLiters = calves * litersPerFeed * feedsPerDay;
    const powderPerLiter = 125; // in grams
    const waterPerLiter = 0.875; // in liters

    const totalPowder = totalLiters * powderPerLiter;
    const totalWater = totalLiters * waterPerLiter;

    const perFeedLiters = totalLiters / feedsPerDay;
    const perFeedPowder = totalPowder / feedsPerDay;
    const perFeedWater = totalWater / feedsPerDay;

    const result = `<b>Per Day:</b><br>Total Milk Replacer: ${totalLiters} L<br>Total Powder: ${(totalPowder / 1000).toFixed(2)} kg<br>Total Water: ${totalWater} L<br>Number of Feeds per Day: ${feedsPerDay}<br><b>Per Feed:</b><br>Milk Replacer: ${perFeedLiters.toFixed(2)} L<br>Powder: ${(perFeedPowder / 1000).toFixed(2)} kg<br>Water: ${perFeedWater.toFixed(2)} L`;
    document.getElementById('result').innerHTML = result;

    // Automatically fill the 'Volume of Water (in liters)' field in the barrel calculator
    document.getElementById('volume').value = perFeedWater.toFixed(2);

    // Recalculate barrel water height
    calculateWaterHeight();
}

// In barrelCalculator.js
document.getElementById('diameter').addEventListener('input', function() {
    const diameterCm = parseFloat(document.getElementById('diameter').value);
    localStorage.setItem('diameter', diameterCm);
});
document.getElementById('volume').addEventListener('input', function() {
    const volumeLiters = parseFloat(document.getElementById('volume').value);
    localStorage.setItem('volume', volumeLiters);
});

function calculateWaterHeight() {
    const diameterCm = parseFloat(document.getElementById('diameter').value);
    const volumeLiters = parseFloat(document.getElementById('volume').value);

    if (isNaN(diameterCm) || isNaN(volumeLiters)) {
        document.getElementById('barrelResult').innerText = "Please enter valid numbers for diameter and volume.";
        return;
    }

    const radiusCm = diameterCm / 2;
    const radiusM = radiusCm / 100;
    const volumeM3 = volumeLiters / 1000;

    const heightM = volumeM3 / (Math.PI * Math.pow(radiusM, 2));
    const heightCm = heightM * 100;

    document.getElementById('barrelResult').innerText = `Height of Water: ${heightCm.toFixed(2)} cm`;
}