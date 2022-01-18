
//const numberArray = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8] 

// all of my javaScript will be created in a dom event listener.

document.addEventListener('DOMContentLoaded', () => {

    // I will now start off my making an array of cards and then later on I will give them names.
    const gameArr = [
         {
             name: 'dolphin',
             img: 'Sea-World-Images/dolphin.png'
         },
         {
            name: 'dolphin',
            img: 'Sea-World-Images/dolphin.png'
         },
         {
             name: 'shark',
             img: 'Sea-World-Images/shark.png'
         },
         {
            name: 'shark',
            img: 'Sea-World-Images/shark.png'
         },
         {
            name: 'jellyfish',
            img: 'Sea-World-Images/jellyFish.png'
         },
         {
            name: 'jellyfish',
            img: 'Sea-World-Images/jellyFish.png'
         },
         {
             name: 'turtle',
             img: 'Sea-World-Images/turtle.png'
         },
         {
             name: 'turtle',
             img: 'Sea-World-Images/turtle.png'
         },
         {
             name: 'octopus',
             img: 'Sea-World-Images/Octopus.png'
         },
         {
            name: 'octopus',
            img: 'Sea-World-Images/Octopus.png'
         },
         {
             name: 'seahorse',
             img: 'Sea-World-Images/seahorse.png'
         },
         {
            name: 'seahorse',
            img: 'Sea-World-Images/seahorse.png'
         }
    ]

    // now I will pick out the element from my html with the class name of mind-game-dimensions with a query selector.
    const boardStructure = document.querySelector('.mind-game-dimensions');
    const showThatResult = document.querySelector('#outcome');
    // creating an empty array with the name of choiceOfCards
    let choiceOfCards = [];
    // making another seperate card id empty array.
    let cardIdArr = [];
    let winningCards = [];

    // Now I will be making the function that will formulate the gaming board.
    function gameBoard () {

         // I will randomise the card array using sort method and Math.random.
         // This will sort the cards to shuffle them in any order.
         gameArr.sort(() => 0.5 - Math.random())


        //I will now use a for loop which will iterate thru my array of cards.
        for (let i = 0; i < gameArr.length; i++){
        //for each card i will make an image element and calling it sea creature.
        let seaCreature = document.createElement('img')
        // then I will set an attribute which links it to the most relevent path
        seaCreature.setAttribute('src', 'Sea-World-Images/blank-jelly-fish.png')
        // I will give each image/card a data id which will iterate thru 0 - 11.
        seaCreature.setAttribute('data-id', i)
        // I will create another add event listener which will listen out to the cards that have been clicked on.
        // this will provoke a cardTurnover function.
        seaCreature.addEventListener('click', cardTurnover)

        // all these cards with different image elements will be placed in the div within the html using the appendChild.
        boardStructure.appendChild(seaCreature)

        }
    }

    // a function will be included to check all of the matched image cards.
    function inspectingForMatch(){
        let theCards = document.querySelectorAll('img')
        // I am saying I want the first value of my array.
        const firstOptionId = cardIdArr[0]
        const secondOptionId = cardIdArr[1]
        // checking that my first item in the array will deeply equal the second item of the array
        if(choiceOfCards[0] === choiceOfCards[1]){
            // if the answer is true then I will create an alert with a pop up comment.
            alert('Yay You have Matched the correct sea creature')
            theCards[firstOptionId].setAttribute('src', 'Sea-World-Images/empty-sea-with-starfish.png')
            theCards[secondOptionId].setAttribute('src', 'Sea-World-Images/empty-sea-with-starfish.png')
            winningCards.push(choiceOfCards)
        } else {
          // if the cards do not match then I will want them to be flipped straight over for the user to then play again.
          theCards[firstOptionId].setAttribute('src', 'Sea-World-Images/blank-jelly-fish.png')
          theCards[secondOptionId].setAttribute('src', 'Sea-World-Images/blank-jelly-fish.png')
          alert('OOOOOOPs I think you got the wrong sea life creature')
        }
        // if either these results happen then I will still need to clear the array and the arrays will start to turn over once again.
        choiceOfCards = []
        cardIdArr = []
        showThatResult.textContent = winningCards.length
        if(winningCards === gameArr.length/2) {
            // this will show that I have collected all the possible cards in my array.
            showThatResult.textContent = 'YAAAAAY Congrats You have found all the Sea Life'
        }
    }

    //creating the card turnover function which will interact with the user to actually flip over the card that ther user has chosen.
    function cardTurnover(){
        let idOfCard = this.getAttribute('data-id')
        //pushing the image cards 
        choiceOfCards.push(gameArr[idOfCard].name)
        cardIdArr.push(idOfCard)
        // will let me have an image to the square itself based on the card id that it holds.
        this.setAttribute('src', gameArr[idOfCard].img)
        // I now need to say that if that cards in the choiceOfCards array are equal to two
        if(choiceOfCards.length === 2) {
            //to make sure it all doesnt happen to quickly I will want it to check for a match in under 500 ms.
            setTimeout(inspectingForMatch, 500)
        }
    }

    // now call the function
    gameBoard()

})

