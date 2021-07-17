const speakers = [
  {
    id: 1,
    image: 'https://yt3.ggpht.com/ytc/AKedOLQ8_s3syn7SG6XchSYZ08uK7Z5-1YRrrAtbCmYk=s900-c-k-c0x00ffffff-no-rj',
    name: 'Millard Ayo',
    organization: 'CEO OF Ayo Tv',
    background:
      'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
  {
    id: 2,
    image:
      'https://images.daznservices.com/di/library/GOAL/1b/c5/ronaldinho-barcelona_1slsxexo4gn5z1m0cln77mlj3h.jpg?t=100890353&quality=60&w=1200&h=800',
    name: 'Ronaldinho Gaucho',
    organization: 'brazilian footballer',
    background:
      'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
  {
    id: 3,
    image:
      'https://e0.365dm.com/20/09/2048x1152/skysports-mbwana-samatta-football_5107735.jpg',
    name: 'Mbwana Samatta',
    organization: 'Tanzanian Best Footballer',
    background:
      'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
  {
    id: 4,
    image: 'https://media.newyorker.com/photos/5ba177da9eb2f7420aadeb98/master/pass/Cohen-Linus-Torvalds.jpg',
    name: 'linus torvalds',
    organization: 'CEO of linux',
    background:
      'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
  {
    id: 5,
    image:
      'https://eshop.macsales.com/blog/wp-content/uploads/2015/03/TimCookTwitter.jpg',
    name: 'Tim Cook',
    organization: 'CEO of Apple',
    background:
      'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
  {
    id: 6,
    image:
      'https://www.glusea.com/wp-content/uploads/2020/11/M-FEJMZ0_400x400.jpg',
    name: 'Sunder Pichai',
    organization: 'CEO of Google',
    background:
      'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
];

const speakerUl = document.querySelector('.speakerUl');

for (let i = 0; i < 6; i += 1) {
  const speakerli = document.createElement('li');
  speakerli.classList.add('speakerli');
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');
  const imgSpeaker = document.createElement('img');
  imgSpeaker.classList.add('imgSpeaker');
  const speakerText = document.createElement('div');
  speakerText.classList.add('speaker-text');
  const speakerName = document.createElement('h3');
  speakerName.classList.add('speaker-name');
  const speakerTitle = document.createElement('p');
  speakerTitle.classList.add('speaker-title');
  const speakerInfo = document.createElement('p');
  speakerInfo.classList.add('speaker-info');

  imgSpeaker.src = speakers[i].image;
  speakerName.textContent = speakers[i].name;
  speakerTitle.textContent = speakers[i].organization;
  speakerInfo.textContent = speakers[i].background;

  imgContainer.appendChild(imgSpeaker);
  speakerText.appendChild(speakerName);
  speakerText.appendChild(speakerTitle);
  speakerText.appendChild(speakerInfo);
  speakerli.appendChild(imgContainer);
  speakerli.appendChild(speakerText);
  speakerUl.appendChild(speakerli);
}
