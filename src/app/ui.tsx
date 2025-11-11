import { Route, RouterProvider } from 'atomic-router-react';
import { appStarted, router, routes } from '@/shared/config';
import { UsersPage, UserPage, NotFoundPage } from '@/pages';
import '@/shared/assets/styles/index.scss';

appStarted();
export const App = () => (
  <div className="App">
    <div className="container">
      <RouterProvider router={router}>
        <Route route={routes.user} view={UserPage} />
        <Route route={routes.users} view={UsersPage} />
        <Route route={routes.notFound} view={NotFoundPage} />
      </RouterProvider>
    </div>
    <div className="noise" />
  </div>
);
