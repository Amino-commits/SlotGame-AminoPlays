const spin = document.getElementById('spin');
spin.addEventListener("click", () => {
    console.log("Spin is working");
    SpinReels();
});

const symbols = [
    {symbolId: 0, symbolName: "Wild", src: "img/Wild.jpg"}, 
    {symbolId: 1, symbolName: "High1", src: "img/high1.jpg"},
    {symbolId: 2, symbolName: "High2", src: "img/high2.jpg"},
    {symbolId: 3, symbolName: "High3", src: "img/high3.jpg"},
    {symbolId: 4, symbolName: "High4", src: "img/high4.jpg"},
    {symbolId: 5, symbolName: "High5", src: "img/high5.jpg"},
    {symbolId: 6, symbolName: "Ace", src: "img/A.jpg"},
    {symbolId: 7, symbolName: "King", src: "img/K.jpg"},
    {symbolId: 8, symbolName: "Queen", src: "img/Q.jpg"},
    {symbolId: 9, symbolName: "Jack", src: "img/J.jpg"},
    {symbolId: 10, symbolName: "Scatter", src: "img/Scatter.jpg"},
    {symbolId: 11, symbolName: "Bonus", src: "img/Bonus.jpg"}
];
const reelPlacement = ["Reel1Row1", "Reel1Row2", "Reel1Row3", "Reel2Row1", "Reel2Row2", "Reel2Row3", "Reel3Row1", "Reel3Row2", "Reel3Row3"];

let symbolPlacement = [];
function SpinReels(){
   for(let i = 0; i < reelPlacement.length; i++){
        // Get the random number   
        let random = Math.floor(Math.random()*12);
        console.log("Math Random " + random);
        
        // Match the random number with a src file
        let placement = symbols.find(symbol => symbol.symbolId === random);

        // Display the pic
        let displayImage = document.getElementById(i.toString()).src=placement.src;
        
        //symbolPlacement.push(random);   
   } 
    
}
//document.getElementById("imageid").src="../template/save.png";