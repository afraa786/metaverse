export function nQueensAlgorithm(grid, size = 8) {
  const boardSize = Math.min(size, grid.length, grid[0].length);
  const queens = [];
  const animations = []; // Local animation storage

  // Reset grid statuses
  for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col < boardSize; col++) {
      if (grid[row][col].status !== "wall") {
        grid[row][col].status = "unvisited";
      }
    }
  }

  function isSafe(row, col) {
    if (grid[row][col].status === "wall") return false;
    
    for (const [qRow, qCol] of queens) {
      if (qCol === col || qRow - qCol === row - col || qRow + qCol === row + col) {
        return false;
      }
    }
    return true;
  }

  function solve(row = 0) {
    if (row === boardSize) return true;

    for (let col = 0; col < boardSize; col++) {
      if (isSafe(row, col)) {
        queens.push([row, col]);
        const node = grid[row][col];
        node.status = "queen";
        animations.push({
          node: {...node},
          type: "queen"
        });
        
        if (solve(row + 1)) return true;

        // Backtrack
        queens.pop();
        node.status = "visited";
        animations.push({
          node: {...node},
          type: "visited"
        });
      }
    }
    return false;
  }

  solve();
  return { success: queens.length === boardSize, animations };
}