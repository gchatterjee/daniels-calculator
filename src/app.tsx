import React from 'react'
import { Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom'
import View from './components/view'
import { PAGE_KEYS, NOT_FOUND_KEY } from './app.constant'
import kebabCase from 'lodash.kebabcase'

export default function App() {
  const [defaultUrl] = PAGE_KEYS
  const notFoundRoute = `/${kebabCase(NOT_FOUND_KEY)}`
  const defaultRoute = `/${kebabCase(defaultUrl || NOT_FOUND_KEY)}`

  const routes = [
    ...PAGE_KEYS.map(key => ({
      path: kebabCase(key),
      element: <View pageKey={key} />,
    })),
    {
      path: notFoundRoute,
      element: <View pageKey={NOT_FOUND_KEY} />,
    },
    {
      path: '/',
      element: <Navigate to={defaultRoute} />,
    },
    {
      path: '*',
      element: <Navigate to={notFoundRoute} />,
    },
  ]

  const router = createBrowserRouter(routes)

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}
