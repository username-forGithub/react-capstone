import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import Single from '../pages/Single';
import '@testing-library/jest-dom/extend-expect';

test('Renders Single correctly', () => {
  const single = render(
    <Provider store={store}>
      <Router>
        <Single />
      </Router>
    </Provider>,
  );
  expect(single).toMatchSnapshot();
});
