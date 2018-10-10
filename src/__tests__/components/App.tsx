import 'react-native';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { App } from '../../app/App';

it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
});
