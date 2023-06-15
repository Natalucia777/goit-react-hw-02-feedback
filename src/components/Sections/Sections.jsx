import PropTypes from 'prop-types';
// import { Component } from 'react';

const Sections = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

Sections.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default Sections;
