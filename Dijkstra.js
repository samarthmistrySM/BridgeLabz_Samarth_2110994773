const Graph = require('./Graph')

const g = new Graph();

g.addVertex("1");
g.addVertex("2");
g.addVertex("3");
g.addVertex("4");
g.addVertex("5");
g.addVertex("6");

g.addEdge("1","2",4)
g.addEdge("1","3",2)
g.addEdge("2","4",7)
g.addEdge("2","5",1)
g.addEdge("3","6",5)
g.addEdge("5","6",3)


function dijkstra(start, end) {
    const distances = {};
    const previous = {};
    const path = [];
    let smallest;

    const nodes = {
        values: [],
        enqueue(val, priority) {
            this.values.push({ val, priority });
            this.values.sort((a, b) => a.priority - b.priority);
        },
        dequeue() {
            return this.values.shift();
        },
    };

    for (let vertex in g.adjacencyList) {
        distances[vertex] = vertex === start ? 0 : Infinity;
        nodes.enqueue(vertex, distances[vertex]);
        previous[vertex] = null;
    }


    
    while (nodes.values.length) {
        smallest = nodes.dequeue().val;

        if (smallest === end) {
            while (previous[smallest]) {
                path.push(smallest);
                smallest = previous[smallest];
            }
            break;
        }

        
        

        if (smallest || distances[smallest] !== Infinity) {
            for (let neighbor in g.adjacencyList[smallest]) {
                let nextNode = g.adjacencyList[smallest][neighbor];
                let candidate = distances[smallest] + nextNode.weight;
                let nextNeighbor = nextNode.node;

                if (candidate < distances[nextNeighbor]) {
                    distances[nextNeighbor] = candidate;
                    previous[nextNeighbor] = smallest;
                    nodes.enqueue(nextNeighbor, candidate);
                }
            }
        }
    }
    distances[end] += parseInt(smallest);
    console.log(distances);

    
    return path.concat(smallest).reverse();
}


console.log(dijkstra("1", "6")); 