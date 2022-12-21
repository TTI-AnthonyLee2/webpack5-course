import reactIcon from '../img/react-icon.png';
import altText from './altText.txt';

function addImg() {
  const img = document.createElement('img');
  img.alt = altText;
  img.src = reactIcon;
  document.body.appendChild(img);
}

export default addImg;