import './hello-world-btn.css';

class HelloWorldBtn {
  render() {
    const btn = document.createElement('button');
    btn.classList.add('hello-world-button');
    btn.textContent = 'Hello World';
    document.body.appendChild(btn);
    
    btn.onclick = () => {
      const p = document.createElement('p');
      p.classList.add('hello-world-text');
      p.textContent = 'Hello World!';
      document.body.appendChild(p);
    }
  }
}

export default HelloWorldBtn;