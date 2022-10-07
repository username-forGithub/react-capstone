import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import Listing from '../pages/Listing';
import '@testing-library/jest-dom/extend-expect';

test('Renders Listing correctly', () => {
  const listing = render(
    <Provider store={store}>
      <Router>
        <Listing />
      </Router>
    </Provider>,
  );
  expect(listing).toMatchSnapshot();
});
