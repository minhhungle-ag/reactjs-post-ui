import React from 'react';
import PropTypes from 'prop-types';
import { Container, Divider } from '@material-ui/core';

Footer.propTypes = {};

function Footer(props) {
  return (
    <Container>
      <div style={{ textAlign: 'center', padding: 16 }}>
        <small>
          Created by HungLe with <i class="fas fa-heart"></i>
        </small>
      </div>
    </Container>
  );
}

export default Footer;
