/**
 * Created by Aamir on 4/22/17.
 */
const waterBlocks =  (blocks) => {
    let count = 0;
    for(let i=0; i< blocks.length-2 ; i++){
        for(let j= i+2; j < blocks.length ; j++ ) {
            for(let n = i+1; n < j ; n++){
                count+= (Math.min(blocks[i], blocks[j]) - blocks[n] < 0) ? 0 : Math.min(blocks[i], blocks[j]) - blocks[n];
                blocks[n] = (Math.min(blocks[i], blocks[j]) - blocks[n] < 0) ? blocks[n] : Math.min(blocks[i], blocks[j]);
            }
        }

    }
    return count;
};

//Test
console.log(waterBlocks([1, 4, 1, 3, 1, 5, 3, 1, 4, 3, 1, 2, 3, 2, 2, 3, 4]));
// 23 Answer

// Water Blocks
//
// You are given an input array where each element represents the height of a line of towers.
//
//     The width of every tower is 1.
// It starts raining. How much water is collected between the towers?
//     Eg. Input: [5, 2, 3, 2, 1, 3]
// Output: 4
// Visualization:
//
//     '-' is water
// '#' is a block
//
// #
// #
// # - # -  - #
// # # # # - #
// # # # # # #
