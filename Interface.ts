interface SquareConfig {
  color: string;
  width: number;
}

function createSquare(config: SquareConfig): { color: string; width: number } {
  let newSquare = { color: "white", width: 100 };
  newSquare.color = config.color;
  newSquare.width = config.width;
  return newSquare;
}


let square = createSquare({color:'red',width:100});