# Routing Refactor Proposal (React Router v6)

Goal: Extract routing into modular files separating layouts, pages, and route configuration.

## Proposed Structure

```
src/
  routes/
    routes.jsx         # central route config (array of route objects)
    AppRouter.jsx      # BrowserRouter + <Routes> mapping from config
  layouts/
    RootLayout.jsx     # sidebar + <Outlet />
    AuthLayout.jsx     # optional auth/public layout
  pages/
    Dashboard/
      DashboardPage.jsx
    Clients/
      ClientsPage.jsx
      ClientDetailPage.jsx
    Jobs/
      JobsPage.jsx
    Auth/
      LoginPage.jsx
```

## Example Route Config

```jsx
// src/routes/routes.jsx
import RootLayout from '../layouts/RootLayout';
import DashboardPage from '../pages/Dashboard/DashboardPage';
import ClientsPage from '../pages/Clients/ClientsPage';
import ClientDetailPage from '../pages/Clients/ClientDetailPage';
import JobsPage from '../pages/Jobs/JobsPage';
import LoginPage from '../pages/Auth/LoginPage';

export const routes = [
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <DashboardPage /> },
      { path: '/clients', element: <ClientsPage /> },
      { path: '/clients/:clientId', element: <ClientDetailPage /> },
      { path: '/jobs', element: <JobsPage /> }
    ]
  },
  { path: '/login', element: <LoginPage /> }
];
```

## Router Wrapper

```jsx
// src/routes/AppRouter.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './routes';

const renderRoutes = (items) =>
  items.map((r, i) =>
    r.children ? (
      <Route key={i} element={r.element}>
        {renderRoutes(r.children)}
      </Route>
    ) : (
      <Route key={r.path || i} path={r.path} element={r.element} />
    )
  );

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>{renderRoutes(routes)}</Routes>
    </BrowserRouter>
  );
}
```

## Notes

- Add `react-router-dom` to dependencies when you implement this refactor:
  ```bash
  npm i react-router-dom
  ```
- Replace conditional rendering in `App.js` with `<AppRouter />` and, if needed, protected-route wrappers to redirect unauthenticated users to `/login`.