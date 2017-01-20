// @flow weak

import React, { PropTypes } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import { GridList } from 'material-ui/GridList';

const styleSheet = createStyleSheet('SimpleGridList', () => ({
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default function SimpleGridList(props, context) {
  const classes = context.styleManager.render(styleSheet);
  return (
    <div className={classes.row}>
      <GridList>
        hey
      </GridList>
    </div>
  );
}

SimpleGridList.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};
