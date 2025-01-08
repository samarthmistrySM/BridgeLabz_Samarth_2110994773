class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.adjList = new Map();
    }

    addVertex(v) {
        this.adjList.set(v, []);
    }

    addEdge(v, w) {
        this.adjList.get(v).push(w);
    }

    topologicalSortDFS() {
        const visited = new Set();
        const stack = [];

        const dfs = (vertex) => {
            visited.add(vertex);
            const neighbors = this.adjList.get(vertex);
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    dfs(neighbor);
                }
            }
            stack.push(vertex);
        };

        for (const vertex of this.adjList.keys()) {
            if (!visited.has(vertex)) {
                dfs(vertex);
            }
        }

        return stack.reverse();
    }

    topologicalSortKahn() {
        const inDegree = new Map();
        const queue = [];
        const result = [];

        for (const [vertex, neighbors] of this.adjList.entries()) {
            if (!inDegree.has(vertex)) {
                inDegree.set(vertex, 0);
            }
            for (const neighbor of neighbors) {
                inDegree.set(neighbor, (inDegree.get(neighbor) || 0) + 1);
            }
        }

        for (const [vertex, degree] of inDegree.entries()) {
            if (degree === 0) {
                queue.push(vertex);
            }
        }

        while (queue.length > 0) {
            const vertex = queue.shift();
            result.push(vertex);

            for (const neighbor of this.adjList.get(vertex)) {
                inDegree.set(neighbor, inDegree.get(neighbor) - 1);
                if (inDegree.get(neighbor) === 0) {
                    queue.push(neighbor);
                }
            }
        }

        if (result.length !== this.vertices) {
            throw new Error("Graph has a cycle");
        }

        return result;
    }
}


const graph = new Graph(6);
const vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

vertices.forEach(vertex => graph.addVertex(vertex));

graph.addEdge('A', 'C');
graph.addEdge('B', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('E', 'F');
graph.addEdge('D', 'F');

console.log("Topological Sort using DFS: ", graph.topologicalSortDFS());
console.log("Topological Sort using Kahn's Algorithm: ", graph.topologicalSortKahn());