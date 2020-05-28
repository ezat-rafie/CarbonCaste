var isRevealed = false;
//reveals all the tiles
function RevealAll(){
    if(isRevealed == false){
        document.getElementById('reveal').innerHTML = `<style>
        .flip-box .flip-box-inner {
            transform: rotateY(180deg);
        }
        </style>`;
        isRevealed = true;
    }
    //if already revealed rotates back to symbols
    else{
        document.getElementById('reveal').innerHTML = `<style>
        .flip-box .flip-box-inner {
            transform: rotateY(0deg);
        }
        </style>`;
        isRevealed = false;
    }
}