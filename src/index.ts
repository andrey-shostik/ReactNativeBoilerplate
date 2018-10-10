import { AppRegistry } from 'react-native';
import React from 'react';
import { whyDidYouUpdate } from 'why-did-you-update';

import { App } from './app/App';
import { name as appName } from '../app.json';

if (process.env.NODE_ENV !== 'production') {
    whyDidYouUpdate(React);
}

AppRegistry.registerComponent(appName, () => App);
