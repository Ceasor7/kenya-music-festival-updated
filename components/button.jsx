import PropTypes from 'prop-types';

const Button = ({ onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={`hover:bg-[#D9430D] hover:text-white hover:outline-none outline outline-[#D9430D] text-black py-2 px-4 transition ease-in-out delay-90 hover:-translate-y-1 hover:scale-110 duration-300 rounded outline-2 ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
