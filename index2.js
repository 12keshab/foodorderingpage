"use strict";

const calAmplitude = function (temps) {
  let max = 0;
  let min = temps[0];
  for (let i = 0; i < temp.length; i++) {
    if (temps[i] > max) {
      max = temps[i];
    }
    if (temps[i] < min) {
      min = temps[i];
    } else {
      continue;
    }
  }
  return max - min;
};

const temp = [3, -2, -6, -1, 9, 13, 17, , "error", 15, 14, 9, 5];
console.log(calAmplitude(temp));
