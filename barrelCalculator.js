function calculateWaterHeight() {
    const diameterCm = parseFloat(document.getElementById('diameter').value);
    const volumeLiters = parseFloat(document.getElementById('volume').value);

    if (isNaN(diameterCm) || isNaN(volumeLiters)) {
        document.getElementById('barrelResult').innerText = "Please enter valid numbers for diameter and volume.";
        return;
    }

    const radiusCm = diameterCm / 2; // Radius in centimeters
    const radiusM = radiusCm / 100; // Convert radius to meters
    const volumeM3 = volumeLiters / 1000; // Convert liters to cubic meters

    const heightM = volumeM3 / (Math.PI * Math.pow(radiusM, 2)); // Height in meters
    const heightCm = heightM * 100; // Convert height to centimeters

    document.getElementById('barrelResult').innerText = `Height of Water: ${heightCm.toFixed(2)} cm`;
}