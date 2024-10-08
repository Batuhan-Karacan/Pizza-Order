import { Route, Switch } from 'react-router-dom';
import Main from './Main';
import OrderPage from './OrderPage';
import OrderSuccessPage from './OrderSuccessPage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/order" component={OrderPage} />
      <Route path="/order-success" component={OrderSuccessPage} />
    </Switch>
  );
};

export default Routes;