import {render, waitFor} from '@testing-library/react-native';
import React from 'react';
import {createStore, DefaultState} from '../../redux/store';
import {Provider} from 'react-redux';

export const Wrapper = ({
  children,
  defaultState,
}: {
  children: JSX.Element;
  defaultState: DefaultState;
}) => {
  const store = createStore({defaultState, enableMocks: true});
  return <Provider store={store}>{children}</Provider>;
};

export const renderWithStore = (
  ui: React.ReactElement,
  state: DefaultState,
) => {
  return render(<Wrapper defaultState={state}>{ui}</Wrapper>);
};

export {waitFor};
