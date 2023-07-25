import * as React from "react";
import {
  styled,
  useTheme,
  Theme,
  CSSObject,
} from "@mui/material/styles";
import { SearchBar } from "../searchBar/Search";
import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import DrawerHeader from "../../utilities/drawerHeader.utilities";
import AppBar from "../../utilities/appBar.utilities";
import drawerWidth from "../../utilities/drawerWith.utilities";

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

type isShowCardType = (text: string, show: boolean) => void;
export const AppBarDesktop = ({ showCards }: { showCards: isShowCardType }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  const actions = [
    { icon: <HomeIcon />, name: "Inicio", route: "/" },
    { icon: <TravelExploreIcon />, name: "Búsqueda Gráfica", route: "/graphic-search" },
    { icon: <NoteAddIcon />, name: "Nuevo Documento", route: "/new-document" },
  ];

  const searchParam = (search: string) => {
    showCards(search, true);
  };

  const handleNavigation = (route: string) => {
    navigate(route);
  };

  return (
    <>
      <AppBar
        position="fixed"
        open={open}
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        <Toolbar>
          <IconButton
            size="large"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              mr: 2,
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            VallesConnect
          </Typography>
          <SearchBar searchfunction={searchParam} />
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        open={open}
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <ChevronRightIcon /> : <CloseIcon />}
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              textAlign: "center",
            }}
          >
            Menú
          </Typography>
        </DrawerHeader>

        <Divider />
        <List>
          {actions.map((action) => (
            <ListItem key={action.name} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={() => handleNavigation(action.route)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {action.icon}
                </ListItemIcon>
                <ListItemText primary={action.name} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};
