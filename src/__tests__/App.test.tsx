import React from 'react';
import {render} from '@testing-library/react-native';

import App from '../App';

/**
 * A high level test that ensures App renders without errors
 * Component and code level detailed unit tests can be found under their
 * respectively directory
 */
it('should render app with errors and match initial snapshot', () => {
  const {toJSON} = render(<App />);

  expect(toJSON()).toMatchSnapshot();
});
