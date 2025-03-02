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

    const result = `Total Milk Replacer: ${totalLiters} Liters\nTotal Powder: ${(totalPowder / 1000).toFixed(2)} kg\nTotal Water: ${totalWater} Liters\nNumber of Feeds per Day: ${feedsPerDay}\n\nPer Feed: ${perFeedLiters.toFixed(2)} Liters, ${(perFeedPowder / 1000).toFixed(2)} kg of powder, ${perFeedWater.toFixed(2)} Liters of water`;
    document.getElementById('result').innerText = result;
}