import React from 'react';

import Buy from '..';
import {render} from '@testing-library/react-native';

describe('Buy screen tests', () => {
  it('should render correctly', () => {
    const {getByText} = render(<Buy />);

    expect(getByText('Buy screen')).toBeDefined();
  });
});
