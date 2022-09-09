function thePyramidOfKingDjoser(base, increment) {
    let requiredStone = 0;
    let requiredMarble = 0;
    let requiredLapis = 0;
    let requiredGold = 0;
    let step = 0

    if (base % 2 === 1) {
        requiredGold = Math.ceil(1 * increment);
    } else {
        requiredGold = Math.ceil(4 * increment);
    }

    for (let i = base; i > 2; i -= 2) {
        requiredStone += (i - 2) * (i - 2) * increment;
        step++;

        if (step % 5 === 0) {
            requiredLapis += (i * 4 - 4) * increment;
        } else {
            requiredMarble += (i * 4 - 4) * increment;
        }

    }

    let height = Math.floor((step + 1) * increment);
    console.log(`Stone required: ${Math.ceil(requiredStone)}`);
    console.log(`Marble required: ${Math.ceil(requiredMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(requiredLapis)}`);
    console.log(`Gold required: ${requiredGold}`);
    console.log(`Final pyramid height: ${height}`)
}

thePyramidOfKingDjoser(12, 1)
thePyramidOfKingDjoser(11, 0.75)
thePyramidOfKingDjoser(12, 1)
thePyramidOfKingDjoser(23, 0.5)