import styled from 'styled-components';

const style = (Component, styles = '', attrs = {}) =>
  styles
    ? styled(Component).attrs(attrs)`
        ${styles}
      `
    : Component;

export { style };
