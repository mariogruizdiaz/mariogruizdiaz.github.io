import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { genericAction } from "../../state/actions";
import { actionTypes } from "../../state/actionTypes";
import 'react-languages-select/css/react-languages-select.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';


const AvatarToggle = props => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        props.genericAction(actionTypes.LOGOUT, {});
        setAnchorEl(null);
    };

    const stringAvatar = (name) => {
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }

    const stringToColor = (string) => {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <Avatar {...stringAvatar(`${props.security.firstName} ${props.security.lastName} `)} />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>Logout</MenuItem>
                {/* <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem> */}
            </Menu>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    genericAction: bindActionCreators(genericAction, dispatch)
});
const mapStateToProps = state => {
    return {
        dictionary: state.i18n.dictionary,
        security: state.security
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(AvatarToggle);