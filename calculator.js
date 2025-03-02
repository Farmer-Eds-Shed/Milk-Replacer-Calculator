function calculateMilkReplacer() {
    const calves = document.getElementById('calves').value;
    const litersPerCalf = 3;
    const totalLiters = calves * litersPerCalf;

    const powderPerLiter = 125; // in grams
    const waterPerLiter = 0.875; // in liters

    const totalPowder = totalLiters * powderPerLiter;
    const totalWater = totalLiters * waterPerLiter;

    const result = `Total Milk Replacer: ${totalLiters} Liters\nTotal Powder: ${totalPowder} grams\nTotal Water: ${totalWater} Liters`;
    document.getElementById('result').innerText = result;
}
