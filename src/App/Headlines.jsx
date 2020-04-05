'use strict';

import React from 'react';
import css from './Headlines.scss';

const Headlines = () =>
  <div className={css.container}>
    <div>
      <div className={css.headline1}>We are all <span className={css.focusNumber}>1</span></div>
      <div className={css.headline2}>We are all&nbsp;
        <span className={css.focusWord}>human<span className={css.focusNumber}>1</span>ty</span>
      </div>
      <div className={css.subHeadline1}>We are all in this <span className={css.focusWord}>together</span></div>
      <div className={css.subHeadline2}>Let's start acting <span className={css.focusWord}>that way</span></div>
      <div className={css.subHeadline3}>Fear sucks, so be <span className={css.focusWord}>authentic</span></div>
      <div className={css.subHeadline4}>Don't wait. <span className={css.focusWord}>BE</span> the new day</div>
      <div>&nbsp;</div>
    </div>
  </div>;

export default Headlines;
