$(document).ready(function(){
    let birdList = sessionStorage.getItem("birdList");
    if(!birdList) {
      console.log('Generating new bingo card...');
      birdList = [
        'Crow', 
        'White Cockatoo', 
        'Magpie', 
        'Butcher Bird',
        'Galah',
        'Noisy Miner',
        'Kookaburra',
        'Rainbow Lorikeet',
        'Australian Parrot',
        'Tawny Frogmouth',
        'Butcherbird',
        'Pigeon',
        'Duck',
        'Eagle'
      ];
      shuffle(birdList);
      sessionStorage.setItem("birdList", JSON.stringify(birdList));
    } else {
      birdList = JSON.parse(birdList);
    }
    console.log('birdList', birdList);

    $('#1').click(() => $('#1').toggleClass('active'));
    $('#2').click(() => $('#2').toggleClass('active'));
    $('#3').click(() => $('#3').toggleClass('active'));
    $('#4').click(() => $('#4').toggleClass('active'));
    $('#5').click(() => $('#5').toggleClass('active'));
    $('#6').click(() => $('#6').toggleClass('active'));
    $('#7').click(() => $('#7').toggleClass('active'));
    $('#8').click(() => $('#8').toggleClass('active'));
    $('#9').click(() => $('#9').toggleClass('active'));

    // Get first 9 elements in the randomised birdList array and them in the divs
    for (let index = 0; index < 9; index++) {
      const element = birdList[index];
      if (index === 4) {
        continue;
      }
      $(`#${index + 1}`).append(`<label>${element}</label>`);
    }
  });

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}