export function unweightedSearchAlgorithm(grid, start, target, nodesToAnimate, name) {
    // Input validation
    if (!grid || !start || !target) {
        console.error("Invalid grid or nodes");
        return false;
    }

    let structure = [start];
    let exploredNodes = { [start.id]: true }; // Use bracket notation for dynamic keys
    
    while (structure.length) {
        let currentNode = name === "BFS" ? structure.shift() : structure.pop();
        
        // Validate current node
        if (!currentNode || currentNode.row === undefined || currentNode.col === undefined) {
            continue;
        }

        nodesToAnimate.push(currentNode);
        currentNode.status = "visited";

        // Ending condition
        if (currentNode.id === target.id) return "success!";

        // Get and process neighbors
        let currentNeighbors = getNeighbors(currentNode, grid, name);
        currentNeighbors.forEach(neighbor => {
            if (!neighbor || !neighbor.id) return; // Skip invalid neighbors
            
            if (!exploredNodes[neighbor.id]) {
                if (name === "BFS") exploredNodes[neighbor.id] = true;
                
                if (neighbor.id !== start.id) {
                    neighbor.previousNode = currentNode;
                }
                
                // Only push valid neighbors that are within grid bounds
                if (neighbor.row >= 0 && 
                    neighbor.row < grid.length && 
                    neighbor.col >= 0 && 
                    neighbor.col < grid[0].length) {
                    structure.push(neighbor);
                }
            }
        });
    }
    return false;
}

function getNeighbors(node, grid, name) {
    const neighbors = [];
    if (!node || !grid) return neighbors;

    const {col, row} = node;
    
    // Check grid boundaries safely
    if (row > 0) {
        addNeighbor(grid[row - 1][col], neighbors, name);
    }
    if (row < grid.length - 1) {
        addNeighbor(grid[row + 1][col], neighbors, name);
    }
    if (col > 0) {
        addNeighbor(grid[row][col - 1], neighbors, name);
    }
    if (col < grid[0].length - 1) {
        addNeighbor(grid[row][col + 1], neighbors, name);
    }

    // Fixed typo: stutus → status
    return neighbors.filter(neighbor => 
        neighbor && neighbor.status !== "visited" && neighbor.status !== "wall"
    );
}

function addNeighbor(neighbor, neighbors, name) {
    if (!neighbor) return;
    
    if (name === "BFS") {
        neighbors.push(neighbor);
    } else {
        neighbors.unshift(neighbor);
    }
}