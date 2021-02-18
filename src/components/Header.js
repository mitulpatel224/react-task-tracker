import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button';

const Header = (props) => {
    const disableAdd = useLocation().pathname !== '/';
    // To extract inputs
    const { title, showAdd, onAdd } = props;

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button disabled={disableAdd} color={showAdd ? 'gray' : 'blueviolet'} text={showAdd ? "Close" : "Add"} onClick={onAdd} />
        </header>
    )
}

// To assign default values
Header.defaultProps = {
    title: 'Task Tracker',
}

// To type cast properties
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
