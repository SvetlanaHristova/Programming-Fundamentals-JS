function bitcoinMining(input) {
    let day = 0;
    let totalGold = 0;
    let firstDay = 0;
    let bitcoin = false;
    let money = 0;

    for (let i = 0; i < input.length; i++) {
        let goldPerDay = Number(input[i]);
        day++;

        if (day % 3 === 0) {
            goldPerDay = goldPerDay * 0.7;
        }

        totalGold += goldPerDay;
        money = totalGold * 67.51;

        if (money >= 11949.16 && !bitcoin) {
            firstDay = day;
            bitcoin = true;
        }

    }

    let count = Math.floor(money / 11949.16);
    let leftMoney = (money - count * 11949.16).toFixed(2);
    console.log(`Bought bitcoins: ${count}`);

    if (bitcoin) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    
    console.log(`Left money: ${leftMoney} lv.`);
}
bitcoinMining([100,200,300])