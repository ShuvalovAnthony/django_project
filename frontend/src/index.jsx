/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './components/App';
import Select_topic from './components/Select_topic';
import Post_topic from './components/Post_topic';

// render(() => <App />, document.getElementById('app'));
render(() => <Post_topic />, document.getElementById('Post_topic'));
// render(() => <Select_topic />, document.getElementById('Select_topic'));