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

    // Save to localStorage
    localStorage.setItem('diameter', diameterCm);
    localStorage.setItem('volume', volumeLiters);
}
