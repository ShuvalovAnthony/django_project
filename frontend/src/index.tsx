/* @refresh reload */
import { render } from 'solid-js/web';

import App from './App';
import FormApp from './Form'

// render(() => <App />, document.getElementById('root') as HTMLElement);
render(() => <FormApp />, document.getElementById('form') as HTMLElement);