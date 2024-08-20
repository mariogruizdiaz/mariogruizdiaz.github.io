import React, { createContext } from 'react';
import { Snackbar, Alert as MuiAlert } from '@mui/material';

const SnackbarContext = createContext();

class SnackbarProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snackbarOpen: false,
      snackbarMessage: '',
      snackbarSeverity: 'success',
    };
  }

  showSnackbar = (message, severity = 'success') => {
    this.setState({
      snackbarOpen: true,
      snackbarMessage: message,
      snackbarSeverity: severity,
    });
  };

  handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ snackbarOpen: false });
  };

  render() {
    const { children } = this.props;
    const { snackbarOpen, snackbarMessage, snackbarSeverity } = this.state;
    return (
      <SnackbarContext.Provider value={{ showSnackbar: this.showSnackbar }}>
        {children}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={5000}
          onClose={this.handleSnackbarClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={this.handleSnackbarClose}
            severity={snackbarSeverity}
          >
            {snackbarMessage}
          </MuiAlert>
        </Snackbar>
      </SnackbarContext.Provider>
    );
  }
}

export { SnackbarProvider, SnackbarContext };
