// Code your solutions in this file

function writeCards(namesArray, eventString){
    let cards = []
    for (let i = 0; i < namesArray.length; i++ ){
        cards.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventString} gift!`);
    }
    return cards
}

function countDown(int){
    while (int > -1) {
        console.log(int--) 
    }
}
