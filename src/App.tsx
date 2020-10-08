import React from 'react';
import { Route, Redirect, withRouter, RouteComponentProps } from 'react-router-dom';
import AppLayout from './layouts/components/AppLayout';
import { primaryNavigationRoutes } from './layouts/contants';
import Home from './home/Home';
import Instructions from './instructions/Instructions';
import About from './about/About';

const app = [
  {
    path: primaryNavigationRoutes.home,
    exact: true,
    component: Home,
  },
  {
    path: primaryNavigationRoutes.instructions,
    exact: true,
    component: Instructions,
  },
  {
    path: primaryNavigationRoutes.about,
    exact: true,
    component: About,
  }
];

class App extends React.Component<RouteComponentProps> {
  getRoutes = () => {
    return (
      <AppLayout>
        <Route
          exact
          path="/"
          render={() => {
            return <Redirect to={primaryNavigationRoutes.home} />;
          }}
        />
        {app.map(({ component, path, exact }, index: number) => (
          <Route exact={exact} path={path} key={index} component={component} />
        ))}
      </AppLayout>
    );
  };

  render() {
    return <React.Fragment>{this.getRoutes()}</React.Fragment>;
  }
}

export default withRouter(App);
