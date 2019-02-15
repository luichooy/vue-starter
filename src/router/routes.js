import authenticationRouter from './authentication';
import errorRouter from './error';
import homeRouter from './home';

const routes = [
  {
    path: '',
    redirect: '/home'
  }
].concat(homeRouter).concat(authenticationRouter).concat(errorRouter);

export default routes;
