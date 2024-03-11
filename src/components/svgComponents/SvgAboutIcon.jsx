import PropTypes from 'prop-types';

const SvgAboutIcon = ({ fillColor, strokeColor }) => {
  return (
    <svg width='53' height='53' viewBox='0 0 53 53' fill={fillColor} xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M16.7727 26.7727H36.7727M36.7727 26.7727L28.0227 18.0227M36.7727 26.7727L28.0227 35.5227M26.7727 51.7727C40.5802 51.7727 51.7727 40.5802 51.7727 26.7727C51.7727 12.9652 40.5802 1.77271 26.7727 1.77271C12.9652 1.77271 1.77271 12.9652 1.77271 26.7727C1.77271 40.5802 12.9652 51.7727 26.7727 51.7727Z'
        stroke={strokeColor}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

SvgAboutIcon.propTypes = {
  fillColor: PropTypes.string.isRequired,
  strokeColor: PropTypes.string.isRequired,
};

export default SvgAboutIcon;
