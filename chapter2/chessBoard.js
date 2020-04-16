let board = "";
let size = 3;
for(let y = 0; y < size; y++){
    for(let x = 0; x < size; x++){
        
        // modulo is used to determine the 'exact' location of a square
        // due to the nature of a chess board, an even/odd check is more than satisfactory
        if((x + y) % 2 == 0){
            board += " ";
        }
        else{
            board += "#";
        }
    }
    board += "\n";
}
console.log(board);