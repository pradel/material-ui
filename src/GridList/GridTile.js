// @flow weak

import React, { PropTypes } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import classNames from 'classnames';

export const styleSheet = createStyleSheet('GridTile', () => {
  return {
    root: {
      boxSizing: 'border-box',
    },
  };
});

export default function GridTile(props, context) {
  const {
    className: classNameProp,
    children,
    ...other
  } = props;
  const classes = context.styleManager.render(styleSheet);
  const className = classNames(classes.root, classNameProp);
  return (
    <div className={className} {...other}>
      {children}
    </div>
  );
}

GridTile.propTypes = {
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

GridTile.defaultProps = {
  height: 'auto',
  padding: 4,
};

GridTile.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};
