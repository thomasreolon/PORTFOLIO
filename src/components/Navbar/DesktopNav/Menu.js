import React from "react"
import MenuIcon from "@material-ui/icons/Menu"
import IconButton from "@material-ui/core/IconButton"
import withStyles from "@material-ui/core/styles/withStyles"
import Menu from "@material-ui/core/Menu"
import Typography from "@material-ui/core/Typography"

const StyledMenu = withStyles({
  paper: {
    backgroundColor: "rgba(0,0,0,0.3)",
    marginTop: "30px",
    padding: "0 15px",
  },
})(props => <Menu {...props} />)

const Item = withStyles({
  item: {
    width: "20vw",
    textAlign: "center",
    "&:hover": {
      color: "grey",
    },
  },
  divider: {
    border: "1px solid lightgrey",
    borderRadius: "50%",
    marginBottom: "25px",
  },
})(({ name, link, classes }) => (
  <a href={link} target="_blank" rel="noreferrer">
    <Typography className={classes.item}>{name}</Typography>
    <div className={classes.divider}></div>
  </a>
))

function ToggableMenu({ projList }) {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    if (!anchorEl) setAnchorEl(event.currentTarget)
    else setAnchorEl(null)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <StyledMenu
        id="simple-menu"
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorEl={anchorEl}
      >
        {projList.map(({ name, link }) => {
          if (!name || !link) return <></>
          return <Item name={name} link={link} key={name} />
        })}
      </StyledMenu>
    </div>
  )
}

export default ToggableMenu
