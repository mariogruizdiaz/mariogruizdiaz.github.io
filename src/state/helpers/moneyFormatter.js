import React from 'react';
import PropTypes from 'prop-types';

const MoneyFormatter = ({ value, country, locale }) => {
  const formatOptions = {
    style: 'currency',
    currency: country,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  // Convertir el valor a formato monetario
  const formatter = new Intl.NumberFormat(locale, formatOptions);
  const formattedValue = formatter.format(value);

  // Dividir la parte entera y los decimales
  const [integerPart] = formattedValue.split(',');

  return (
    <React.Fragment>
      {integerPart}
      {/* <span style={{ fontSize: '0.8em',
            verticalAlign: 'baseline',
            lineHeight: '1',
            position: 'relative',
            top: '-0.2em', }}>{decimalPart && `${decimalPart}`}</span> */}
    </React.Fragment>
  );
};

// Definir las propiedades esperadas
MoneyFormatter.propTypes = {
  value: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
};

export default MoneyFormatter;
