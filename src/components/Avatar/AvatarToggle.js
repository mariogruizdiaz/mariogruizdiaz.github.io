import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { genericAction } from "../../state/actions";
import { actionTypes } from "../../state/actionTypes";
import { useHistory } from 'react-router-dom';
import 'react-languages-select/css/react-languages-select.css';

const AvatarToggle = props => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    props.genericAction(actionTypes.LOGOUT, {});
    setAnchorEl(null);
  };

  const handleSignUp = () => {
    history.push(`/SignUp`);
  }

  const handleLogin = () => {
    history.push(`/Login`);
  }

  const handleAddCompany = () => {
    history.push(`/SignUp`);
  }

  const handleEditProfile = () => {
     history.push(`/editProfile`);
  }

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
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            {
              props.security.authenticated ? 
              props.security.company.thumbnail ?
              <Avatar src={props.security.company.thumbnail} />
              :
              <Avatar {...stringAvatar(`${props.security.firstName} ${props.security.lastName} `)} />
              :
              <Avatar />
            }
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {
          !props.security.authenticated &&
          <MenuItem onClick={handleLogin}>
            <ListItemIcon>
              <LoginIcon fontSize="small" />
            </ListItemIcon>
            Login
          </MenuItem>
        }
        {
          props.security.authenticated &&
          <MenuItem onClick={handleEditProfile}>
            <ListItemIcon>
              {props.security.company.thumbnail ?
                <Avatar src={props.security.company.thumbnail} />
              :
                <Avatar fontSize="small" />}
            </ListItemIcon>
            Profile
          </MenuItem>
        }
        {/* <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem> */}
        {
          props.security.authenticated && !props.security.company.id &&
          <MenuItem onClick={handleAddCompany}>
            <ListItemIcon>
              <AddBusinessIcon fontSize="small" />
            </ListItemIcon>
            Add Company
          </MenuItem>
        }
        {
          !props.security.authenticated &&
          <>
            <Divider />
            <MenuItem onClick={handleSignUp}>
            <ListItemIcon>
              <PersonAddIcon fontSize="small" />
            </ListItemIcon>
            SignUp
            </MenuItem>
          </>
          
        }
        {
          props.security.authenticated &&
          <MenuItem onClick={handleLogOut}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        }
      </Menu>
    </React.Fragment>
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