import './heading.scss';

class Heading {
  render(fileName) {
    const h1 = document.createElement('h1');
    h1.textContent = `Let's Webpack. This is ${fileName} page.`;
    document.body.appendChild(h1);
  }
}

export default Heading;