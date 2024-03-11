import PropTypes from 'prop-types';

const SvgResumeIcon = ({ fillColor, strokeColor }) => {
  return (
    <svg width='39' height='38' viewBox='0 0 39 38' fill={fillColor} xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M14.75 26.9166H24.25'
        stroke={strokeColor}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M19.5 9.5V20.5833M19.5 20.5833L25.0417 15.0417M19.5 20.5833L13.9583 15.0417'
        stroke={strokeColor}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

SvgResumeIcon.propTypes = {
  fillColor: PropTypes.string.isRequired,
  strokeColor: PropTypes.string.isRequired,
};

export default SvgResumeIcon;
