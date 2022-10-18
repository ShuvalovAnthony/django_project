/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './components/App';
import App2 from './components/App2';

render(() => <App />, document.getElementById('app'));
render(() => <App2 />, document.getElementById('app2'));