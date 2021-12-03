import * as React from 'react';
import * as PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import LinuxFilter from './Filtres/LinuxFilter';
import AllFilter from './Filtres/AllFilter';
import PcFilter from './Filtres/PcFilter';
import PsFilter from './Filtres/PsFilter';
import XboxFilter from './Filtres/XboxFilter';
import IosFilter from './Filtres/IosFilter';
import AndroidFilter from './Filtres/AndroidFilter';
import NintendoFilter from './Filtres/NintendoFilter';
import AppleMacintoshFilter from './Filtres/AppleMacintoshFilter';

export default function NavBar(props) {
  const { setApiFilter } = props;
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      PLATEFORMES
      <List>
        {[
          <Link to="/all-filter">All</Link>,
          <Link to="/pc-filter">Pc</Link>,
          <Link to="/playstation-filter">PlayStation</Link>,
          <Link to="/xbox-filter">X Box</Link>,
          <Link to="/ios-filter">Ios</Link>,
          <Link to="/applemacintosh">Apple Macintosh</Link>,
          <Link to="/linux-filter">Linux</Link>,
          <Link to="/nintendo-filter">Nintendo</Link>,
          <Link to="/android-filter">Android</Link>,
        ].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Router>
      <div>
        {['menu'].map((anchor) => {
          return (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>
                <MenuIcon sx={{ color: '#171815' }} />
              </Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          );
        })}
        <Switch>
          <Route path="/linux-filter">
            <LinuxFilter setApiFilter={setApiFilter} />
          </Route>
          <Route exact path="/all-filter">
            <AllFilter setApiFilter={setApiFilter} />
          </Route>
          <Route path="/pc-filter">
            <PcFilter setApiFilter={setApiFilter} />
          </Route>
          <Route path="/playstation-filter">
            <PsFilter setApiFilter={setApiFilter} />
          </Route>
          <Route path="/xbox-filter">
            <XboxFilter setApiFilter={setApiFilter} />
          </Route>
          <Route path="/ios-filter">
            <IosFilter setApiFilter={setApiFilter} />
          </Route>
          <Route path="/android-filter">
            <AndroidFilter setApiFilter={setApiFilter} />
          </Route>
          <Route path="/nintendo-filter">
            <NintendoFilter setApiFilter={setApiFilter} />
          </Route>
          <Route path="/applemacintosh-filter">
            <AppleMacintoshFilter setApiFilter={setApiFilter} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
NavBar.propTypes = {
  setApiFilter: PropTypes.node.isRequired,
};
