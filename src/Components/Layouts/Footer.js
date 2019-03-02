//from https://material-ui.com/demos/bottom-navigation/
import React from "react";
//import { Paper, Tabs, Tab } from "@material-ui/core";
//desired icons: Home, Art Gallery, Map, Scan

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

//import Home from "./icons/home.svg"; //why not working?
//import ArtGallery from "./icons/art-gallery.svg";
//import Walk from "./icons/walk.svg";
//import Scan from "./icons/camera.svg";
import Index from "./index";
import Home from "./icons/home.svg";

const styles = {
  root: {
    width: 500
  }
};

class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Home" icon={<Home />} />
      </BottomNavigation>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleBottomNavigation);
