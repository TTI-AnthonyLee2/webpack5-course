import './hello-world-btn.scss';

class HelloWorldBtn {
  #greeting: string = 'Hello World';

  render() {
    const btn = document.createElement('button');
    btn.classList.add('hello-world-button');
    btn.textContent = this.#greeting;
    document.body.appendChild(btn);

    btn.onclick = () => {
      const p = document.createElement('p');
      p.classList.add('hello-world-text');
      p.textContent = this.#greeting;
      document.body.appendChild(p);
    }
  }
}

export default HelloWorldBtn;