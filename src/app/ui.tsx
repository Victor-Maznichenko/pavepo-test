import { Route, RouterProvider } from 'atomic-router-react';
import '@/shared/assets/styles/index.scss';
import { UsersPage } from '@/pages';
import { appStarted, router, routes } from '@/shared/config';
import { UserPage } from '../pages/user';
import { NotFoundPage } from '../pages/not-found';

appStarted();
export const App: React.FC = () => (
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
