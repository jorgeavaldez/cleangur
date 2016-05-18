import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

// Components
import Main from './Main';
import Album from './Album';
import Image from './Image';

import Normalize from 'normalize.css';
import main_css from './styles/main.css';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);
