class Cell {
    cellValue: number;
    htmlElement: HTMLElement;
    constructor(cell: HTMLElement) {
    this.htmlElement = cell;
    gameRunning: boolean = true;
    }
   
     
    Setstatus(status:number){
        this.cellValue = status;
        if (status== -1){
        this.htmlElement.innerHTML = "O";
    }
    else if (status == 1){
        this.htmlElement.innerHTML = "X"
        
    }
}

  ClickCell(x: number, y: number){

    this.Board.innerHTML = "X";
    this.board[p] = 1;
    if (this.win(this.board) == 1) {
        this.gameRunning = false;
        alert("You have won!");

  }
  
    
 
    class Board {
        x: Cell[];
        currentSymbol: number;
      constructor(){
      this.currentSymbol=-1
      this.x = new Array(9);
      this.x[0] = new Cell(<HTMLElement>document.getElementById("x11"));
      this.x[1] = new Cell(<HTMLElement>document.getElementById("x12"));
      this.x[2] = new Cell(<HTMLElement>document.getElementById("x13"));
      this.x[3] = new Cell(<HTMLElement>document.getElementById("x21"));
      this.x[4] = new Cell(<HTMLElement>document.getElementById("x22"));
      this.x[5] = new Cell(<HTMLElement>document.getElementById("x23"));
      this.x[6] = new Cell(<HTMLElement>document.getElementById("x31"));
      this.x[7] = new Cell(<HTMLElement>document.getElementById("x32"));
      this.x[8] = new Cell(<HTMLElement>document.getElementById("x33"));
       let cellx: Cell[];
      this.x[0].onclick = (e) => { cellx.ClickCell(1, 1); }
      this.x[1].onclick = (e) => { cellx.ClickCell(1, 2); }
      this.x[2].onclick = (e) => { cellx.ClickCell(1, 3); }
      this.x[3].onclick = (e) => { cellx.ClickCell(2, 1); }
      this.x[4].onclick = (e) => { cellx.ClickCell(2, 2); }
      this.x[5].onclick = (e) => { cellx.ClickCell(2, 3); }
      this.x[6].onclick = (e) => { cellx.ClickCell(3, 1); }
      this.x[7].onclick = (e) => { cellx.ClickCell(3, 2); }
      this.x[8].onclick = (e) => { cellx.ClickCell(3, 3); }
     

      }
    }

      makeMove(cellNumber: number){
        this.x[cellNumber].Setstatus(this.currentSymbol);
        this.currentSymbol = this.currentSymbol === -1 ? 1: -1;
      };

      Reset() {
      
      }
   