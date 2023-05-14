import {getIconName} from '../helpers';
import Screen from '../Screens';

describe('getIconName tests', () => {
  it('gets Home Icon name', () => {
    expect(getIconName(Screen.Home)).toEqual('home');
  });
  it('gets Buy Icon name', () => {
    expect(getIconName(Screen.Buy)).toEqual('storefront');
  });
  it('gets Transaction Icon name', () => {
    expect(getIconName(Screen.Transactions)).toEqual('payments');
  });
  it('gets Profile Icon name', () => {
    expect(getIconName(Screen.Profile)).toEqual('person');
  });
  it('gets default Icon name', () => {
    expect(getIconName('')).toEqual('home');
  });
});
