N. 1

loop2: while (true) {
  let player1 = prompt('Player1 - Paper, Rock or Scissors');
  let player2;
  if (player1 === null) break;
  player1 = player1.toLowerCase().trim();
  if (player1 !== 'paper' && player1 !== 'rock' 
  && player1 !== 'scissors') {
    alert('Invalid input, enter correct value.'); 
    continue;
  }
  while (true) {
    player2 = prompt('Player2 - Paper, Rock or Scissors');
    if (player2 === null) break loop2;
    player2 = player2.toLowerCase().trim();
    if (player2 !== 'paper' && player2 !== 'rock' 
    && player2 !== 'scissors' && player2 !== null) {
      alert('Invalid input, enter correct value.');
      continue;
    }
    break;
  }
  if (player1 === 'paper' && player2 === 'rock' 
   || player1 === 'rock' && player2 === 'scissors' 
   || player1 === 'scissors' && player2 === 'paper') {
     alert('Player1 Wins');
     break;
   } else if (player2 === 'paper' && player1 === 'rock' 
   || player2 === 'rock' && player1 === 'scissors' 
   || player2 === 'scissors' && player1 === 'paper') {
     alert('Player2 Wins');
     break;
   } else {
     alert('Draw! Enter new values.');
   }
   }

N 2.

function elemOnIndex(arr, count = 0) {
  let result = [];
  for (let i = 0; arr.length > count; i++) {
    if (arr.includes(i)) {
      result[i] = i;
      count++;
    } else {
    result[i] = undefined;
  }
  }
  return result;
}

N 3.

function isEmty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

N 4.

function sumAllAges(obj) {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key]
  }
  return sum;
}

N 5.

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') obj[key] *= 2;
  }
  return obj;
}

N 6.

function findMinForArray(arr, sum = 0) {
  arr.forEach(a => sum += a);
  return  1 - sum;
}

N 7.

function printXPattern(n) {
  let arr = ['*', '*'];
  let length = n * 2 - 2;
  for (let i = 3; i < n * 2; i++) {
    arr.splice(1, 0,' ');
  } 
  for (let i = 0; i < n * 2 - 1; i++) {
    console.log(arr.join(''));
    arr[i + 1] = '*';
    arr[i] = ' ';
    arr[length--] = ' ';
    arr[length] = '*';
  } 
}