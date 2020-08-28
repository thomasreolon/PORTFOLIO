import React from "react"
import NotificationsIcon from "@material-ui/icons/Notifications"
import { Badge, Menu, MenuItem, IconButton } from "@material-ui/core"
import contexts from "../../contexts"

const DEF_MSG = "No Messages"

function PopupIcon(props) {
  const [{ hasSeenPopup }, dispatch] = contexts.user.useContext()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [{ NBadges, msg }, setInfos] = React.useState({
    NBadges: 0,
    msg: DEF_MSG,
  })

  // opening: remove badges and show menu
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
    setInfos({ NBadges: 0, msg: msg })
    event.preventDefault()
  }

  // closong: hide menu
  const handleClose = event => {
    setAnchorEl(null)
    event.preventDefault()
  }

  //didMount: if hasn't seenPopup --> add popup after 10 sec
  React.useEffect(() => {
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setInfos({ NBadges: 1, msg: "Press Here to say Hello" })
        dispatch({
          type: "SEEN",
        })
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [hasSeenPopup, dispatch])
  return (
    <>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Badge badgeContent={NBadges} color="error">
          <NotificationsIcon style={{ color: "#fff" }} />
        </Badge>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem children={msg} />
      </Menu>
    </>
  )
}

export default PopupIcon
