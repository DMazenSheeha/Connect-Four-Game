export default function waysToWin(cols, handleWin, turn, index, c) {
  let a = 0;
  let b = 0;
  let d = 0;
  let e = 0;
  // ?   Vertical method
  for (let i = 3; i < 6; i++) {
    let arr = [];
    if (cols[index][i] !== "") {
      arr.push({ col: index, row: i });
      for (let k = i - 1; k >= i - 3; k--) {
        if (cols[index][i].turn === cols[index][k].turn) {
          arr.push({ col: index, row: k });
          a++;
          if (a === 3 && k === i - 3) {
            handleWin(turn, arr, index);
          }
        } else {
          a = 0;
        }
      }
    }
  }

  // ?   Horizontal method
  for (let i = 3; i < 7; i++) {
    let arr = [];
    arr.push({ col: i, row: c - 1 });
    if (cols[i][c - 1] !== "") {
      for (let j = i - 1; j >= i - 3; j--) {
        if (cols[i][c - 1].turn === cols[j][c - 1].turn) {
          arr.push({ col: j, row: c - 1 });
          b++;
          if (j === i - 3 && b === 3) {
            handleWin(turn, arr, index);
          }
        } else {
          b = 0;
        }
      }
    }
  }

  // ? Other ways
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      d = 0;
      let arr = [];
      if (cols[i][j] !== "") {
        for (let r = 1; r < 4; r++) {
          if (cols[i + (r - 1)][j + (r - 1)].turn === cols[i + r][j + r].turn) {
            d++;
            arr.push({ col: i + (r - 1), row: j + (r - 1) });
            if (d === 3) {
              arr.push({ col: i + 3, row: j + 3 });
              handleWin(turn, arr, index);
            }
          } else {
            d = 0;
          }
        }
      }
    }
  }

  for (let i = 3; i < 7; i++) {
    for (let j = 0; j < 3; j++) {
      e = 0;
      let arr = [];
      if (cols[i][j] !== "") {
        for (let r = 1; r < 4; r++) {
          if (cols[i][j].turn === cols[i - r][j + r].turn) {
            e++;
            arr.push({ col: i - r, row: j + r });
            if (e === 3) {
              arr.push({ col: i, row: j });
              handleWin(turn, arr, index);
            }
          }
        }
      }
    }
  }

  // (function () {
  //   if (cols[0][0] !== "") {
  //     if (
  //       cols[0][0].turn === cols[1][1].turn &&
  //       cols[1][1].turn === cols[2][2].turn &&
  //       cols[2][2].turn === cols[3][3].turn
  //     ) {
  //       handleWin(turn, [], index);
  //     }
  //   }
  //   if (cols[0][1] !== "") {
  //     if (
  //       cols[0][1].turn === cols[1][2].turn &&
  //       cols[1][2].turn === cols[2][3].turn &&
  //       cols[2][3].turn === cols[3][4].turn
  //     ) {
  //       handleWin(turn, [], index);
  //     }
  //   }
  //   if (cols[0][2] !== "") {
  //     if (
  //       cols[0][2].turn === cols[1][3].turn &&
  //       cols[1][3].turn === cols[2][4].turn &&
  //       cols[2][4].turn === cols[3][5].turn
  //     ) {
  //       handleWin(turn, [], index);
  //     }
  //   }
  //   if (cols[1][0] !== "") {
  //     if (
  //       cols[1][0].turn === cols[2][1].turn &&
  //       cols[2][1].turn === cols[3][2].turn &&
  //       cols[3][2].turn === cols[4][3].turn
  //     ) {
  //       handleWin(turn, [], index);
  //     }
  //   }
  //   if (cols[1][1] !== "") {
  //     if (
  //       cols[1][1].turn === cols[2][2].turn &&
  //       cols[2][2].turn === cols[3][3].turn &&
  //       cols[3][3].turn === cols[4][4].turn
  //     ) {
  //       handleWin(turn, [], index);
  //     }
  //   }
  //   if (cols[1][2] !== "") {
  //     if (
  //       cols[1][2].turn === cols[2][3].turn &&
  //       cols[2][3].turn === cols[3][4].turn &&
  //       cols[3][4].turn === cols[4][5].turn
  //     ) {
  //       handleWin(turn, [], index);
  //     }
  //   }
  //   if (cols[2][0] !== "") {
  //     if (
  //       cols[2][0].turn === cols[3][1].turn &&
  //       cols[3][1].turn === cols[4][2].turn &&
  //       cols[4][2].turn === cols[5][3].turn
  //     ) {
  //       handleWin(turn, [], index);
  //     }
  //   }
  //   if (cols[2][1] !== "") {
  //     if (
  //       cols[2][1].turn === cols[3][2].turn &&
  //       cols[3][2].turn === cols[4][3].turn &&
  //       cols[4][3].turn === cols[5][4].turn
  //     ) {
  //       handleWin(turn, [], index);
  //     }
  //   }
  //   if (cols[2][2] !== "") {
  //     if (
  //       cols[2][2].turn === cols[3][3].turn &&
  //       cols[3][3].turn === cols[4][4].turn &&
  //       cols[4][4].turn === cols[5][5].turn
  //     ) {
  //       handleWin(turn, [], index);
  //     }
  //   }
  //   if (cols[3][0] !== "") {
  //     if (
  //       (cols[3][0].turn === cols[4][1].turn &&
  //         cols[4][1].turn === cols[5][2].turn &&
  //         cols[5][2].turn === cols[6][3].turn) ||
  //       (cols[3][0].turn === cols[2][1].turn &&
  //         cols[2][1].turn === cols[1][2].turn &&
  //         cols[1][2].turn === cols[0][3].turn)
  //     ) {
  //       handleWin(turn, [], index);
  //     }
  //   }
  //   if (cols[3][1] !== "") {
  //     if (
  //       (cols[3][1].turn === cols[4][2].turn &&
  //         cols[4][2].turn === cols[5][3].turn &&
  //         cols[5][3].turn === cols[6][4].turn) ||
  //       (cols[3][1].turn === cols[2][2].turn &&
  //         cols[2][2].turn === cols[1][3].turn &&
  //         cols[1][3].turn === cols[0][4].turn)
  //     ) {
  //       handleWin(turn, [], index);
  //     }
  //   }
  //   if (cols[3][2] !== "") {
  //     if (
  //       (cols[3][2].turn === cols[4][3].turn &&
  //         cols[4][3].turn === cols[5][4].turn &&
  //         cols[5][4].turn === cols[6][5].turn) ||
  //       (cols[3][2].turn === cols[2][3].turn &&
  //         cols[2][3].turn === cols[1][4].turn &&
  //         cols[1][4].turn === cols[0][5].turn)
  //     ) {
  //       handleWin(turn, [], index);
  //     }
  //   }
  //   if (cols[4][0] !== "") {
  //     if (
  //       cols[4][0].turn === cols[3][1].turn &&
  //       cols[3][1].turn === cols[2][2].turn &&
  //       cols[2][2].turn === cols[1][3].turn
  //     ) {
  //       handleWin(turn, [], index);
  //     }
  //   }
  //   if (cols[4][1] !== "") {
  //     if (
  //       cols[4][1].turn === cols[3][2].turn &&
  //       cols[3][2].turn === cols[2][3].turn &&
  //       cols[2][3].turn === cols[1][4].turn
  //     ) {
  //       handleWin(turn, [], index);
  //     }
  //   }
  //   if (cols[4][2] !== "") {
  //     if (
  //       cols[4][2].turn === cols[3][3].turn &&
  //       cols[3][3].turn === cols[2][4].turn &&
  //       cols[2][4].turn === cols[1][5].turn
  //     ) {
  //       handleWin(turn, [], index);
  //     }
  //   }
  //   if (cols[5][0] !== "") {
  //     if (
  //       cols[5][0].turn === cols[4][1].turn &&
  //       cols[4][1].turn === cols[3][2].turn &&
  //       cols[3][2].turn === cols[2][3].turn
  //     ) {
  //       handleWin(turn, [], index);
  //     }
  //   }
  //   if (cols[5][1] !== "") {
  //     if (
  //       cols[5][1].turn === cols[4][2].turn &&
  //       cols[4][2].turn === cols[3][3].turn &&
  //       cols[3][3].turn === cols[2][4].turn
  //     ) {
  //       handleWin(turn, [], index);
  //     }
  //   }
  //   if (cols[5][2] !== "") {
  //     if (
  //       cols[5][2].turn === cols[4][3].turn &&
  //       cols[4][3].turn === cols[3][4].turn &&
  //       cols[3][4].turn === cols[2][5].turn
  //     ) {
  //       handleWin(turn, [], index);
  //     }
  //   }
  //   if (cols[6][0] !== "") {
  //     if (
  //       cols[6][0].turn === cols[5][1].turn &&
  //       cols[5][1].turn === cols[4][2].turn &&
  //       cols[4][2].turn === cols[3][3].turn
  //     ) {
  //       handleWin(turn, [], index);
  //     }
  //   }
  //   if (cols[6][1] !== "") {
  //     if (
  //       cols[6][1].turn === cols[5][2].turn &&
  //       cols[5][2].turn === cols[4][3].turn &&
  //       cols[4][3].turn === cols[3][4].turn
  //     ) {
  //       handleWin(turn, [], index);
  //     }
  //   }
  //   if (cols[6][2] !== "") {
  //     if (
  //       cols[6][2].turn === cols[5][3].turn &&
  //       cols[5][3].turn === cols[4][4].turn &&
  //       cols[4][4].turn === cols[3][5].turn
  //     ) {
  //       handleWin(turn, [], index);
  //     }
  //   }
  // })();
}
