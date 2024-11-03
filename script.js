const moves = [
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
    [-1, 2],
    [-2, 1],
  ];
  const traveledMoves = []

function traveled(move) {
return traveledMoves.some((position) => {
     return position[0] === move[0] && position[1] === move[1]
})
}

function searchMoves(currentPosition) {
  const possibleMove = []

    moves.forEach(move => {
        const newMove = [currentPosition[0] + move[0], currentPosition[1] + move[1]]
        if (
            newMove[0] > 0 && newMove[0] < 8 &&
            newMove[1] > 0 && newMove[1] < 8 &&
            !traveled(newMove)
        ) {
            possibleMove.push(newMove)
        }
    })
    return possibleMove
}

function checkMoves (move, desiredPosition) {
    const queue = []
    const madeMoves = [0, []]

    queue.push(move)

    while(queue.length > 0){
        let currentPosition = queue.shift()

        madeMoves[1].push(currentPosition)
        
        if (currentPosition[0] === desiredPosition[0] && currentPosition[1] === desiredPosition[1]){
            //return (currentPosition)
            console.log(currentPosition, `Arrived in ${madeMoves[0]} moves`, `Here is the path you took:\n ${madeMoves[1].map(move => `[${move}]`).join('\n')}`)
        }

        traveledMoves.push(currentPosition)
        
        const nextMove = searchMoves(currentPosition)
        nextMove.forEach((move) => {
            if (!traveled(move)) {
                queue.push(move);
                traveledMoves.push(move); 
            }
        });
        madeMoves[0] += 1
    }
}

checkMoves([0,0], [3,3])