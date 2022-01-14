
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

    // Now I will be making the function that will formulate the gaming board.
    function gameBoard () {
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
        //seaCreature.addEventListener('click', cardTurnover)

        // all these cards with different image elements will be placed in the div within the html using the appendChild.
        boardStructure.appendChild(seaCreature)

        }
    }

    // now call the function
    gameBoard()

})

