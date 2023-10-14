const gameboard = document.querySelector('#gameboard')
const infoDispley = document.querySelector('#info')
const startcelle = [
    '','','','','','','','',''
]
let go = 'circle';
infoDispley.textContent = 'Circle goes First'

function createBoard(){
    startcelle.forEach((cell,index) => {
        const cellElement = document.createElement('div')
        cellElement.classList.add('square')
        cellElement.id = index;
        cellElement.addEventListener('click',addGo )
        gameboard.append(cellElement)
        
    })
}
createBoard()

function addGo(elem){
    const goDisplay = document.createElement('div')
    goDisplay.classList.add(go);
    elem.target.append(goDisplay)
    console.log(elem.target);
    go = go === 'circle'? 'cross' : 'circle';
    if(go === 'circle'){
        infoDispley.style.color = 'blue'
    }else{
        infoDispley.style.color = 'red'
    }
    infoDispley.textContent = `it is now ${go} 's go`
    elem.target.removeEventListener('click',addGo)
    checkscore()
}

function checkscore(){
    const allSquares = document.querySelectorAll('.square')
    const winningCombos = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ]
        winningCombos.forEach(array => {
            console.log(array);
            const circleWins = array.every(cell =>
                // console.log(cell)
                allSquares[cell].firstChild?.classList.contains('circle'))
    
                if(circleWins){
                    infoDispley.textContent = 'Circle Wins!'
                     allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
                     return;
                }
            })
    
        winningCombos.forEach(array => {
            console.log(array);
            const crossWins = array.every(cell =>
                // console.log(cell)
                allSquares[cell].firstChild?.classList.contains('cross'))
    
                if(crossWins){
                    infoDispley.textContent = 'cross Wins!'
                     allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
                     return;
                }
            })
    }


