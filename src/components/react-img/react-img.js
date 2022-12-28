import reactIcon from '../img/react-icon.png';
import './react-img.scss';

class ReactImg {
  render() {
    const img = document.createElement('img');
    img.classList.add('react-img');
    img.alt = 'react';
    img.src = reactIcon;
    document.body.appendChild(img);
  }
}

export default ReactImg;