const speaksList = [
    {
      name: 'Kareem Abdul Jabar',
      image: 'images/speakers/kareem.jpg',
      description: 'The highest scorer in NBA history',
      status: 'The fisrt icon in the NBA history',
    },
    {
      name: 'Earvin "Magic" Johnson',
      image: 'images/speakers/magic.jpg',
      description: 'The greatest guard in NBA history',
      status: 'The fisrt icon in the NBA history',
    },
    {
      name: 'Hakeem Olajuwon',
      image: 'images/speakers/hakeem.png',
      description: 'The greatest Afrian player in NBA history',
      status: 'The fisrt icon in the NBA history',
    },
    {
      name: 'Michael Jordan',
      image: 'images/speakers/michael-jordan-playing-PNG.png',
      description: 'The greatest Player in the history of Basketball',
      status: 'Biggest sports icon worldwide ',
    },
  ];

  const speakers = document.querySelector('.top-speakers');
for (let i = 0; i < speaksList.length; i += 1) {
  const el = document.createElement('div');
  el.classList.add('speaker');
  el.innerHTML = `
  <div>
     <img
         class="speaker-img";
         src="${speaksList[i].image}";
         alt="Speakers foto";
      />
  </div>
  <div>
     <h2>${speaksList[i].name}</h2>
     <h3>${speaksList[i].description}</h3>
        <p>
        ${speaksList[i].status}
        </p>
   </div>
`;
  speakers.appendChild(el);
}

/* drop down menu */
 
const menuButton = document.querySelector('.menu-button');
const navmenu = document.querySelector('.drop-menu');
const main = document.querySelector('.mainscroll');
menuButton.addEventListener('click', () => {
  navmenu.classList.toggle('active');
  main.classList.toggle('active');
  menuButton.classList.toggle('active');
});