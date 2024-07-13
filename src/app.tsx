import React from 'react'
import { BrowserRouter as Router, Route, Navigate } from 'react-router-dom'
import View from './components/view/view'
import { PAGE_KEYS, NOT_FOUND_KEY } from './app.constant'

export default function App() {
  const [defaultUrl] = PAGE_KEYS
  const defaultRoute = `/${defaultUrl || NOT_FOUND_KEY}`
  const notFoundRoute = `/${NOT_FOUND_KEY}`
  const PUBLIC_URL = '/react-static-github-pages' // change this to your repo name

  return (
    <div className='container'>
      <Router basename={PUBLIC_URL}>
        {PAGE_KEYS.map(key => (
          <Route key={key} path={`/${key}`}>
            <View pageKey={key} />
          </Route>
        ))}
        <Route path={notFoundRoute}>
          <View pageKey={NOT_FOUND_KEY} />
        </Route>
        <Route path='/'>
          <Navigate to={defaultRoute} />
        </Route>
        <Route path='*'>
          <Navigate to={notFoundRoute} />
        </Route>
      </Router>
    </div>
  )
}
