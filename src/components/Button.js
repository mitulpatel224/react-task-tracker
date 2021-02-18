import PropTypes from 'prop-types';

function Button({ text, color, onClick, disabled }) {
    const style = {
        backgroundColor: disabled ? 'gray' : color,
        cursor: disabled ? "no-drop" : "pointer"
    }
    return (
        <button disabled={disabled} className="btn" style={style}
            onClick={onClick}>
            {text}
        </button>
    )
}

// To assign default values
Button.defaultProps = {
    color: 'blueviolet'
}

// To type cast properties
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
}

export default Button
