import reactIcon from '../img/react-icon.png';

function addImg() {
  const img = document.createElement('img');
  img.alt = 'react';
  img.src = reactIcon;
  document.body.appendChild(img);
}

export default addImg;