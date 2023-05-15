import React from 'react';

import Buy from '..';
import R from '../../../assets';
import {render} from '@testing-library/react-native';

describe('Buy screen tests', () => {
  it('should render correctly', () => {
    const {getByText} = render(<Buy />);

    expect(getByText(R.strings.buy.title)).toBeDefined();
  });
});
