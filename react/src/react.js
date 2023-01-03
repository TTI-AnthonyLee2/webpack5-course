import Heading from './components/heading/heading';
import ReactImg from './components/react-img/react-img';
import _ from 'lodash';

const heading = new Heading();
const reactImg = new ReactImg();

heading.render(_.upperFirst('react'));
reactImg.render();