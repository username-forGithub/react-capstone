import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import Subnav from '../components/Subnav';
import '@testing-library/jest-dom/extend-expect';


test('Renders Subnav correctly', () => {
  const subnav = render(    
      <Provider store={store}>
        <Router>
          <Subnav />
        </Router>
      </Provider>,
  );
  expect(subnav).toMatchSnapshot();
});