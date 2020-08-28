import React from "react"
import Drawer from "@material-ui/core/Drawer"
import IconButton from "@material-ui/core/IconButton"
import List from "@material-ui/core/List"
import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from "@material-ui/icons/Close"
import FolderIcon from "@material-ui/icons/Folder"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import withStyles from "@material-ui/core/styles/withStyles"
import { Link } from "gatsby-theme-material-ui"

const MyLink = ({ link, children }) => {
  const local = link[0] === "/"
  return (
    <div>
      {local ? (
        <Link to={link}>{children}</Link>
      ) : (
        <a href={link} target="_blank">
          {children}
        </a>
      )}
    </div>
  )
}

const Item = ({ Icon, name, link }) => {
  return (
    <MyLink link={link}>
      <ListItem>
        <ListItem button>
          <ListItemIcon> {Icon ? <Icon /> : <FolderIcon />} </ListItemIcon>
          <ListItemText primary={name} />
        </ListItem>
      </ListItem>
    </MyLink>
  )
}

function Menu({ classes, projList }) {
  const [state, setState] = React.useState(false)
  const toggleDrawer = event => {
    setState(st => !st)
    event.preventDefault()
  }

  return (
    <>
      <IconButton onClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>
      <Drawer
        type="temporary"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
        open={state}
        onClose={toggleDrawer}
      >
        <div className={classes.close}>
          <IconButton className={classes.close__btn} onClick={toggleDrawer}>
            <CloseIcon />
          </IconButton>
        </div>
        <List>
          {projList.map(({ name, link, Icon }) => (
            <Item name={name} link={link} Icon={Icon} key={name} />
          ))}
        </List>
      </Drawer>
    </>
  )
}

const styles = {
  drawerPaper: {
    width: "70%",
  },
  close__btn: {
    position: "absolute",
    right: "10px",
    fontSize: "30px",
  },
  close: {
    backgroundColor: "#656569",
    width: "100%",
    position: "relative",
    height: "45px",
  },
}

export default withStyles(styles)(Menu)
