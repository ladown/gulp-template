'use strict';

import Sliders from './sliders/sliders';

class AppClass {
	constructor() {}

	init() {
		Sliders();

		console.log('App has been initialized');
		return this;
	}
}

export default AppClass;
