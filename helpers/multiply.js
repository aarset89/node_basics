'use strict';
const fs = require('fs');
const colors = require('colors');

// const times = (base, multiplier) => {
//   return new Promise((resolve, reject) => {
//     let output = "";

//     try {
//       for (let a = 1; a <= multiplier; a++) {
//         output += ` ${base} x ${a} = ${base * a}\n`;
//       }
//       resolve(output);
//     } catch (error) {
//       reject(`something were wrong...`);
//     }
//   });
// };

const createFile = async (base, multiplier, list) => {
  let output,
    consolePrint = '';
  try {
    for (let a = 1; a <= multiplier; a++) {
      consolePrint += ` ${base} ${'x'.green} ${a} ${'='.green} ${base * a}\n`;
      output += ` ${base} x ${a} = ${base * a}\n`;
    }

    if (list) {
      console.log(consolePrint);
    }
    fs.writeFileSync(`./results/${base} multiplicationTable.txt`, output);
    return `${base} multiplicationTable.txt has been created`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createFile,
};
