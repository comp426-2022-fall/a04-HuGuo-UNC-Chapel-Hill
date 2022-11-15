
function sum_dices(s_in, d_in) {
    var sum = 0;
    for (let i = 0; i < d_in; i++) {
        sum += Math.floor(Math.random() * s_in) + 1;
    }
    return sum
}

export function roll(side_in, dice_in, rolls_in) {
    var sum_arr = []
    for (let i = 0; i < rolls_in; i++) {
        sum_arr.push(sum_dices(side_in, dice_in))
    }
    var data = {
        "sides" : side_in,
        "dice" : dice_in,
        "rolls" : rolls_in,
        "results" : sum_arr
    }
    // console.log(JSON.stringify(data))
    return data
}


