console.log("hello");

let board = [];

function play(clickedID) {
  let playerSpan = document.getElementById("player");

  let clickedBox = document.getElementById(clickedID);

  if (playerSpan.innerText === "X") {
    playerSpan.innerText = "O";
    clickedBox.innerText = "X";
    board[clickedID] = "X";
  } else {
    playerSpan.innerText = "X";
    clickedBox.innerText = "O";
    board[clickedID] = "O";
  }

  let topL = board[0];
  let topC = board[1];
  let topR = board[2];
  let middleL = board[3];
  let middleC = board[4];
  let middleR = board[5];
  let bottomL = board[6];
  let bottomC = board[7];
  let bottomR = board[8];

  //horizontal
  if (topL !== undefined && topL === topC && topL === topR) {
    alert("winner");
  } else if (
    middleL !== undefined &&
    middleL === middleC &&
    middleL === middleR
  ) {
    alert("winner");
  } else if (
    bottomL !== undefined &&
    bottomL === middleC &&
    bottomL === bottomR
  ) {
    alert("winner");
  }
  //vertical
  else if (topL !== undefined && topL === middleL && topL === bottomL) {
    alert("winner");
  } else if (topL !== undefined && topL === middleL && topL === bottomL) {
    alert("winner");
  } else if (topL !== undefined && topL === middleL && topL === bottomL) {
    alert("winner");
  }
  //diagonal
  else if (topL !== undefined && topL === middleC && bottomR) {
    alert("winner");
  } else if (bottomL !== undefined && bottomL === middleC && bottomL === topR) {
    alert("winner");
  }
}

let boardFull = true;

for (let i = 0; i < board.length; i++) {
  if (board[i] === undefined) {
    boardFull = false;
  } else {
    alert("CAT's game");
  }
}
