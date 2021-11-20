import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';

import routes from './router'
import store from './store';
import HYAppPlayerBar from './pages/player/app-player-bar' 
import HYAppHeader from '@/components/app-header';
import HYAppFooter from '@/components/app-footer';
import { HashRouter } from 'react-router-dom';

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <HYAppHeader/>
        {renderRoutes(routes)}
      <HYAppFooter/>
      <HYAppPlayerBar/>
    </HashRouter>
    </Provider>
    
  )
})

