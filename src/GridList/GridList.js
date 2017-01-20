// @flow weak

import React, { PropTypes } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import classNames from 'classnames';

export const styleSheet = createStyleSheet('GridList', () => {
  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  };
});

export default function GridList(props, context) {
  const {
    className: classNameProp,
    children,
    padding,
    ...other
  } = props;
  const classes = context.styleManager.render(styleSheet);
  const className = classNames(classes.root, classNameProp);
  const style = { margin: -padding / 2 };
  return (
    <div className={className} style={style} {...other}>
      {children}
    </div>
  );
}

GridList.propTypes = {
  /**
   * Number of px for one cell height.
   * You can set `'auto'` if you want to let the children determine the height.
   */
  cellHeight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(['auto']),
  ]),
  /**
   * Grid Tiles that will be in Grid List.
   */
  children: PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: PropTypes.string,
  /**
   * Number of columns.
   */
  cols: PropTypes.number,
  /**
   * Number of px for the padding/spacing between items.
   */
  padding: PropTypes.number,
};

GridList.defaultProps = {
  height: 'auto',
  padding: 4,
};

GridList.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};
