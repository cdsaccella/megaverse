export function getAdjacents (matrix: object[][], row: number, column: number): object[] {
  const adjacentCells: object[] = []

  for (let i = row - 1; i <= row + 1; i++) {
    for (let j = column - 1; j <= column + 1; j++) {
      if (i === row && j === column) {
        continue
      }

      if (i >= 0 && i < matrix.length && j >= 0 && j < matrix[0].length) {
        adjacentCells.push(matrix[i][j])
      }
    }
  }

  return adjacentCells
}
