import { withTheme } from "./theme";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

/*
    MATERIAL USEFUL CLASSES:
        <Hidden xdDown> </Hidden>
        <Button variant="contained|outlined"> <IconButton>
        https://material-ui.com/components/drawers/  (lateral menus 4 mobile ) + <AppBar>
        <CircularProgress>
        <Badge badgeContent={4} color="primary">
        <Typography>  https://github.com/DecliningLotus/fontsource/blob/master/packages/roboto/README.md
        <Collapse|Fade|Grow|Slide in={checked|true}>

*/

function useIsSmall() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  return isSmall;
}

export { withTheme, useIsSmall };
