import React, { Fragment, Suspense } from 'react';
import { Route, Routes } from "react-router-dom"
import { PATH } from "../config"

// layout
import { Template1 } from '../layouts/template1';
// import { Template2 } from '../layouts/template2';

// routes
import AuthRoute from './auth-route';
import GuestRoute from './guest-route';

// page
const Dashboard = React.lazy(() => import('../pages/dashboard').then(module => ({ default: module.Dashboard })));
const Login = React.lazy(() => import('../pages/login').then(module => ({ default: module.Login })));
const Register = React.lazy(() => import('../pages/register').then(module => ({ default: module.Register })));
const UserCreate = React.lazy(() => import('../pages/user').then(module => ({ default: module.Create })));
const UserList = React.lazy(() => import('../pages/user').then(module => ({ default: module.List })));
const UserShow = React.lazy(() => import('../pages/user').then(module => ({ default: module.Show })));
const UserEdit = React.lazy(() => import('../pages/user').then(module => ({ default: module.Edit })));

const routesConfig = [
  {
    path: PATH.ROOT,
    component: Dashboard,
    layout: Template1,
    guard: AuthRoute
  },
  {
    path: PATH.LOGIN,
    component: Login,
    guard: GuestRoute
  },
  {
    path: PATH.REGISTER,
    component: Register,
    guard: GuestRoute
  },
  {
    path: PATH.USER_LIST,
    component: UserList,
    layout: Template1,
    guard: AuthRoute
  },
  {
    path: PATH.USER_CREATE,
    component: UserCreate,
    layout: Template1,
    guard: AuthRoute
  },
  {
    path: PATH.USER_SHOW,
    component: UserShow,
    layout: Template1,
    guard: AuthRoute
  },
  {
    path: PATH.USER_EDIT,
    component: UserEdit,
    layout: Template1,
    guard: AuthRoute
  }
]

function renderRoutes() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        {routesConfig.map((route, index) => {
          const Component: any = route.component || Fragment;
          const Layout: any = route.layout || Fragment;
          const Authenticate: any = route.guard || Fragment;
          return (
            <Route 
              key={`routes-${index}`}
              path={route.path} 
              element={
                <Authenticate>
                  <Layout>
                    <Component />
                  </Layout>
                </Authenticate>
              } 
            />
          )
        })}
        <Route path="*" element={<>page not found</>} />
      </Routes>
    </Suspense>
    
  )
}

export const RoutesMain = () => {
    return renderRoutes()
}