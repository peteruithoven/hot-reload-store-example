import 'systemjs-hot-reloader/default-listener.js';
import getHotReloadStore from './utils/getHotReloadStore.js';
const hotStore = getHotReloadStore('d3d:store');

const state = hotStore.state || {
	counter: 0
};

console.log('state: ', state);
state.counter += 1;

hotStore.state = state;
