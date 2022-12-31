import Heading from './components/heading/heading';
import HelloWorldBtn from './components/hello-world-btn/hello-world-btn';
import _ from 'lodash';

const heading = new Heading();
const helloWorldBtn = new HelloWorldBtn();

heading.render(_.upperFirst('hello world'));
helloWorldBtn.render();