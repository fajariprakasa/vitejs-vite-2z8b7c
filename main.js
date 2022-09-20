import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import About from './src/pages/About';

const app = document.getElementById('app');
const page = window.location.pathname;

switch (page) {
  case '/':
    Home();
    break;

  case '/login':
    Login();
    break;

  case '/register':
    Register();
    break;

  case '/about':
    About();
    break;

  default:
    app.innerHTML += `<h1> Page Not Found</h1>`;
}
