import styled from 'react-emotion';
import Toolbar from 'material-ui/Toolbar';
import AppBar from 'material-ui/AppBar';
import Tabs from 'material-ui/Tabs';
import theme from 'theme';

export const SecondaryAppBar = styled(AppBar)`
  position: static;
`;

export const SecondaryToolbar = styled(Toolbar)`
  background-color: ${theme.palette.secondary[700]};
  min-height: 5rem;
  color: ${theme.palette.getContrastText(theme.palette.secondary[700])};
`;

export const SecondaryTabs = styled(Tabs)`
  background-color: ${theme.palette.secondary[700]};
  min-height: 5rem;
  color: ${theme.palette.getContrastText(theme.palette.secondary[700])};
`;
