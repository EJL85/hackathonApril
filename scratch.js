const theSurprise = document.getElementById('random');
const thePineapple = document.getElementById('pineapple');

theSurprise.addEventListener('click', displayWhiskey);

function displayWhiskey(event) {
  event.preventDefault();
  const $img = document.createElement('img');
  const $h1 = document.createElement('h1');
  const $section = document.getElementById('recipe');

  $img.src = '/pics/scotch.jpg';
  $img.id = 'whiskey'
  $h1.id = 'birthdayH1'
  $section.appendChild($h1);
  $section.appendChild($img);

  $h1.textContent = "Happy Birthday, Jeff!"

}
