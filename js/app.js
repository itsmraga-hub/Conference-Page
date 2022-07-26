// Mobile nav Javascript
const burger = document.querySelector('.burger-menu');
const navMobileContainer = document.querySelector('.nav-mobile-container');
const navItems = document.querySelectorAll('.nav-list-item');

// Event listener for burger to open and close the mobile nav
burger.addEventListener('click', () => {
  const isVisible = navMobileContainer.getAttribute('data-visible');
  const isBurger = burger.getAttribute('aria-hidden');
  if (isVisible === 'false') {
    navMobileContainer.setAttribute('data-visible', true);
  } else if (isVisible === 'true') {
    navMobileContainer.setAttribute('data-visible', false);
  }
  if (isBurger === 'false') {
    burger.setAttribute('aria-hidden', true);
  } else if (isBurger === 'true') {
    burger.setAttribute('aria-hidden', false);
  }
});

// Event listener for nav list items to close the mobile nav
navItems.forEach((item) => {
  item.addEventListener('click', () => {
    const isVisible = navMobileContainer.getAttribute('data-visible');
    const isBurger = burger.getAttribute('aria-hidden');
    if (isVisible === 'true') {
      navMobileContainer.setAttribute('data-visible', false);
    }
    if (isBurger === 'false') {
      burger.setAttribute('aria-hidden', true);
    } else if (isBurger === 'true') {
      burger.setAttribute('aria-hidden', false);
    }
  });
});

// List more speakers
// More button to trigger larger speaker list
const more = document.querySelector('#more');
// Container to append the speakers to or at
const speakersContainer = document.querySelector('#speakersContainer');
let i = 0;
const speakers = [
  {
    speakerImg: '../assets/speakers/raga.jpg',
    speakerName: 'William Raga',
    speakertitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    speakerDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minus earum labore mollitia',
  },
  {
    speakerImg: '../assets/speakers/speaker-1.JPEG',
    speakerName: 'John Kamau',
    speakertitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    speakerDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minus earum labore mollitia',
  },
  {
    speakerImg: '../assets/speakers/speaker-2.JPEG',
    speakerName: 'Gertrude Kurgat',
    speakertitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    speakerDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minus earum labore mollitia',
  },
  {
    speakerImg: '../assets/speakers/speaker-3.JPEG',
    speakerName: 'Ruth Njeri',
    speakertitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    speakerDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minus earum labore mollitia',
  },
  {
    speakerImg: '../assets/speakers/speaker-4.JPEG',
    speakerName: 'Emmanuel Kiprono',
    speakertitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    speakerDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minus earum labore mollitia Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minus earum labore mollitia',
  },
  {
    speakerImg: '../assets/speakers/speaker-5.JPEG',
    speakerName: 'Evans',
    speakertitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    speakerDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minus earum labore mollitia Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minus earum labore mollitia',
  },
];

const createSpeakerOnLoad = (i) => {
  const speaker = document.createElement('div');
  speaker.className = 'speaker-content';
  speaker.innerHTML = `<img src="${speakers[i].speakerImg}" alt="" class="speaker-img" />
  <div class="speaker-details">
    <div>
      <h3 class="speaker-name">${speakers[i].speakerName}</h3>
      <p class="speaker-title">
      ${speakers[i].speakertitle}
      </p>
    </div>
    <p class="speaker-description">
    ${speakers[i].speakerDesc}
    </p>
  </div>`;
  speakersContainer.appendChild(speaker);
};

const createSpeaker = (i) => {
  const speaker = document.createElement('div');
  speaker.className = 'speaker-content';
  speaker.classList.add('created-child');
  speaker.innerHTML = `<img src="${speakers[i].speakerImg}" alt="" class="speaker-img" />
  <div class="speaker-details">
    <div>
      <h3 class="speaker-name">${speakers[i].speakerName}</h3>
      <p class="speaker-title">
      ${speakers[i].speakertitle}
      </p>
    </div>
    <p class="speaker-description">
    ${speakers[i].speakerDesc}
    </p>
  </div>`;
  speakersContainer.appendChild(speaker);
};

window.addEventListener('DOMContentLoaded', () => {
  for (; i < 2; i += 1) {
    createSpeakerOnLoad(i);
  }
});

more.addEventListener('click', () => {
  const isMore = more.getAttribute('data-visible');

  if (isMore === 'false') {
    more.setAttribute('data-visible', true);
    for (; i < speakers.length; i += 1) {
      createSpeaker(i);
    }
  } else if (isMore === 'true') {
    more.setAttribute('data-visible', false);
    const speakerChild = document.querySelectorAll('.created-child');
    speakerChild.forEach((speaker) => {
      speaker.style.display = 'none';
    });
  }
  i = 2;
});
