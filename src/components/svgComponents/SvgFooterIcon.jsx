import PropTypes from 'prop-types';

const SvgFooterIcon = ({ fillColor, strokeColor }) => {
  return (
    <svg
      className='svg-arrow-icon'
      width='54'
      height='54'
      viewBox='0 0 54 54'
      fill={fillColor}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        className='path-arrow'
        d='M19.9285 34.0709L34.0705 19.9287M34.0705 19.9287H21.6962M34.0705 19.9287V32.3032'
        stroke={strokeColor}
        strokeWidth='3.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        className='path-circle'
        d='M27 52C40.807 52 52 40.807 52 27C52 13.1929 40.807 2 27 2C13.1929 2 2 13.1929 2 27C2 40.807 13.1929 52 27 52Z'
        stroke={strokeColor}
        strokeWidth='3.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

SvgFooterIcon.propTypes = {
  fillColor: PropTypes.string.isRequired,
  strokeColor: PropTypes.string.isRequired,
};

export default SvgFooterIcon;
