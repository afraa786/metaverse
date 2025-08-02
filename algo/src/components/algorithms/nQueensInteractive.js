export function nQueensInteractive(grid, nodesToAnimate) {
  const size = grid.length;
  const queens = [];
  const attackPaths = []; // Stores all attack paths

  // Reset grid
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      if (grid[row][col].status !== "wall") {
        grid[row][col].status = "unvisited";
      }
    }
  }

  function showAttackPaths(row, col) {
    const paths = [];
    // Highlight row
    for (let c = 0; c < size; c++) {
      if (c !== col) paths.push({row, col: c, type: "row"});
    }
    // Highlight column
    for (let r = 0; r < size; r++) {
      if (r !== row) paths.push({row: r, col, type: "col"});
    }
    // Highlight diagonals
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (Math.abs(r - row) === Math.abs(c - col) && !(r === row && c === col)) {
          paths.push({row: r, col: c, type: "diagonal"});
        }
      }
    }
    attackPaths.push(...paths);
    return paths;
  }

  return {
    placeQueen(row, col) {
      if (grid[row][col].status === "wall") return false;
      
      // Check if position is safe
      for (const q of queens) {
        if (q.row === row || q.col === col || 
            Math.abs(q.row - row) === Math.abs(q.col - col)) {
          return false;
        }
      }
      
      queens.push({row, col});
      grid[row][col].status = "queen";
      
      // Show attack paths
      const paths = showAttackPaths(row, col);
      nodesToAnimate.push(
        {node: {...grid[row][col]}, type: "queen"},
        ...paths.map(p => ({
          node: {...grid[p.row][p.col]}, 
          type: "attack",
          attackType: p.type
        }))
      );
      
      return true;
    },
    removeQueen(row, col) {
      queens = queens.filter(q => !(q.row === row && q.col === col));
      grid[row][col].status = "unvisited";
      // Recalculate all attack paths
      attackPaths.length = 0;
      queens.forEach(q => showAttackPaths(q.row, q.col));
    },
    getAttackPaths() {
      return [...attackPaths];
    }
  };
}