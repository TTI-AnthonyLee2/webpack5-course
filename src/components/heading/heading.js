import './heading.scss';

class Heading {
  render() {
    const h1 = document.createElement('h1');
    h1.textContent = 'Let\'s Webpack';
    document.body.appendChild(h1);
  }
}

export default Heading;