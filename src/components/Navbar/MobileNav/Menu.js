import React from "react"
import Drawer from "@material-ui/core/Drawer"
import IconButton from "@material-ui/core/IconButton"
import List from "@material-ui/core/List"
import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from "@material-ui/icons/Close"
import FolderIcon from "@material-ui/icons/Folder"
import HomeIcon from "@material-ui/icons/Home"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"
import withStyles from "@material-ui/core/styles/withStyles"
import { Link } from "gatsby-theme-material-ui"
import { useIsSmall } from "../../../theme"

const MyLink = ({ link, children }) => {
  const local = link[0] === "/"
  return (
    <div>
      {local ? (
        <Link to={link}>{children}</Link>
      ) : (
        <a href={link} target="_blank" rel="noreferrer">
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
  const isSmall = useIsSmall()
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
          paper: { width: isSmall ? "70%" : "30%" },
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
          <Link to="/">
            <ListItem className={classes.white}>
              <ListItem button>
                <ListItemIcon>
                  {" "}
                  <HomeIcon />{" "}
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </ListItem>
          </Link>
          <Divider />
          <br />

          <h3 style={{ textAlign: "center" }}>Projects</h3>
          {projList.map(({ name, link, Icon }) => (
            <Item name={name} link={link} Icon={Icon} key={name} />
          ))}
        </List>
      </Drawer>
    </>
  )
}

const styles = {
  close__btn: {
    position: "absolute",
    right: "10px",
    fontSize: "30px",
  },
  white: {
    color: "#fff",
  },
  close: {
    backgroundColor: "#656569",
    width: "100%",
    position: "relative",
    height: "45px",
  },
}

export default withStyles(styles)(Menu)
