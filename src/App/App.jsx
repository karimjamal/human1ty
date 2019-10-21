'use strict'

import React from "react";
import Headlines from './Headlines';
import Grid from './Grid';
import css from './App.scss';

const App = () =>
  <div className={css.container}>
    <Grid />
    <Headlines />
  </div>;

export default App;