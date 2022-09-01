import { Home } from './pages/Home';
import { Routes } from 'react-router-dom';
import { Theme } from './themes/theme';

export const App = () => {
  return (
    <Theme>
      <Routes/>
    </Theme>
  );
}

export default App;
