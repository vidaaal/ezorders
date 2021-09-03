import GlobalStyles from './styles/GlobalStyles';

import { Container } from './styles';

import logo from './images/logo.svg';
import Orders from './components/Orders';

function App() {
  return (
    <>
      <Container>
        <img src={logo} alt="ezOrders" />
        <Orders />
      </Container>

      <GlobalStyles />
    </>
  );
}

export default App;
