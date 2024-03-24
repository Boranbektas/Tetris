
document.addEventListener('DOMContentLoaded',() =>{
    const grid=document.querySelector('.grid');
    let squares =Array.from(document.querySelectorAll('.Grid div'));
    const width=10;
    const score = document.querySelector('#score')
    const StartButton=document.querySelector('#StartButton');

    //tetrominos
    const lTetromino=[
        [1,width+1,width*2+1,2],
        [width,width+1,width+2,width*2+2],
        [1,width+1,width*2+1,width*2],
        [width,width*2,width*2+1,width*2+2]
    ]
    const oTetromino=[
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1]
    ]
    const zTetromino=[
        [0,width,width+1,width*2+1],
        [width+1,width+2,width*2,width*2+1],
        [0,width,width+1,width*2+1]
        [width+1,width+2,width*2,width*2+1]
    ]

    const tTetromino=[
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1]
    ]
    
    const iTetromino =[
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3],
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3]

    ]

    const theTetrominos = [lTetromino,zTetromino,tTetromino,oTetromino,iTetromino]


    let currentPosition = 4
    //random tetromino selection in its first rotation
    let random=Math.floor(Math.random()*theTetrominos.length)
    let current = theTetrominos[random][0]   //random tetromino,first rotation



    function draw(){
        current.forEach(index =>{
            squares[currentPosition + index].classList.add('tetromino')
        })
    }

    draw()


})
