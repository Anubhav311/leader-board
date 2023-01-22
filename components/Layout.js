import * as React from "react";
// import Router from "next/router";
// import { useAuth } from "../auth/AuthContext";
// import { useRouter } from "next/router";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import {
  Image,
  Flex,
  Button,
  HStack,
  chakra,
  Container,
  Heading,
  Divider,
  Box,
  Text,
} from "@chakra-ui/react";

const data = [
  {
    label: "profile",
  },
];
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
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

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "flex-end",
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(["width", "margin"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: "20px",
//     // width: `calc(100% - ${drawerWidth}px)`,// To overlap headerS
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: "nowrap",
//   boxSizing: "border-box",
//   ...(open && {
//     ...openedMixin(theme),
//     "& .MuiDrawer-paper": openedMixin(theme),
//   }),
//   ...(!open && {
//     ...closedMixin(theme),
//     "& .MuiDrawer-paper": closedMixin(theme),
//   }),
// }));
function Header() {
  return (
    <>
      <chakra.header
        w="100%"
        id="header"
        position="fixed"
        backgroundColor="rgba(255, 255, 255, 0.8)"
        backdropFilter="saturate(180%) blur(5px)"
        zIndex='200'
      >
        <Flex h='70px' w="100%" px="6" py="5" align="center" justify="space-between">
          <Heading ml='20px' as="h2" size="md">
            LeaderBoard
          </Heading>
          {/* <HStack as="nav" spacing="5">
            {data.map((item, i) => (
              <Button variant="nav"> {item.label} </Button>
            ))}
          </HStack> */}
          <HStack mr='20px'>
            <Button colorScheme='green' mr='20px'>Create</Button>
            <Button variant='link'>Profile</Button>
          </HStack>
        </Flex>
        <Divider />
      </chakra.header>
    </>
  );
}

export default function Layout({ userRole, children }) {
  return (
    <>
      <div
        style={{
          margin: "0",
          width: "100%"
        }}
        >
        <Header />
        <div
          style={{
            height: "100%",
            display: "flex",
            position: "fixed",
            width: "100%",
            zIndex: "0"
          }}
        >
          <Box w="20%" p={5} h="100%" display='flex' flexDirection='column' pt="90px">
            <Text fontWeight='500' fontSize=".875rem"> Teams </Text>
            <Text fontWeight='500' fontSize=".875rem"> Teams </Text>
            <Text fontWeight='500' fontSize=".875rem"> Teams </Text>
            <Text fontWeight='500' fontSize=".875rem"> Teams </Text>
          </Box>
          {children}
        </div>
      </div>
      {/* </Box> */}
    </>
  );
}


// function SideDrawer({ userRole }) {
//   const theme = useTheme();
//   // const state = useCount();
//   const { logout } = useAuth();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };
//   const handleDrawerClose = () => {
//     setOpen(false);
//   };
//   const handleOnClick = () => {
//     // logs the user out and redirects to home page
//     logout();
//     Router.push("/login");
//     return <p>Logging out...</p>;
//   };
//   const { asPath, pathname } = useRouter();
//   // console.log(pathname)
//   const handleClickOne = (index) => {
//     if (index === 0) Router.push("/");
//     if (index === 1) Router.push("/customercomplaint");
//     if (index === 2) Router.push("/devices");
//   };
//   const handleClickTwo = (index) => {
//     if (index === 0) Router.push("/users");
//     if (index === 1) Router.push("/sub");
//     if (index === 2) Router.push("/customerdata/information");
//   };
//   const styling = {
//     color: "#556cd6",
//   };
//   // console.log(window.location.href)
//   return (
//     <>
//       <Drawer variant="permanent" open={open}>
//         <DrawerHeader
//           sx={{
//             marginTop: "60px",
//             "@media only screen  and (max-width: 730px)": {
//               marginTop: "32vh",
//             },
//           }}
//         >

//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{
//               ...(open && { display: "none" }),
//               marginRight: "5px",
//               color: "black",
//               "@media only screen  and (max-width: 730px)": {
//                 marginRight: "0",
//               },
//             }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <IconButton
//             sx={open ? { display: "block" } : { display: "none" }}
//             onClick={handleDrawerClose}
//           >
//             {theme.direction === "ltl" ? (
//               <ChevronRightIcon />
//             ) : (
//               <ChevronLeftIcon />
//             )}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List sx={{ backgroundColor: "white" }}>
//           {["Dashboard", "Customer Complaint", "Devices"].map((text, index) =>
//             userRole === "admin" || userRole === "support" ? (
//               <ListItem
//                 onClick={() => handleClickOne(index)}
//                 key={text}
//                 disablePadding
//                 sx={{ display: "block" }}
//               >
//                 <ListItemButton
//                   sx={{
//                     minHeight: 48,
//                     justifyContent: open ? "initial" : "center",
//                     px: 2.5,
//                   }}
//                 >
//                   <ListItemIcon
//                     sx={{
//                       minWidth: 0,
//                       mr: open ? 3 : "auto",
//                       justifyContent: "center",
//                     }}
//                   >
//                     {index === 0 ? (
//                       <DashboardIcon sx={pathname === "/" ? styling : null} />
//                     ) : null}
//                     {index === 1 ? (
//                       <InboxIcon
//                         sx={pathname === "/customercomplaint" ? styling : null}
//                       />
//                     ) : null}
//                     {index === 2 ? (
//                       <DevicesIcon
//                         sx={pathname === "/devices" ? styling : null}
//                       />
//                     ) : null}
//                   </ListItemIcon>
//                   <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
//                 </ListItemButton>
//               </ListItem>
//             ) : null
//           )}
//           {/* {["Insights", "Sales", "Advertisement", "Reach"].map((text, index) =>
//             userRole === "admin" || userRole === "marketing" ? (
//               <ListItem key={text} disablePadding sx={{ display: "block" }}>
//                 <ListItemButton
//                   sx={{
//                     minHeight: 48,
//                     justifyContent: open ? "initial" : "center",
//                     px: 2.5,
//                   }}
//                 >
//                 <ListItemIcon
//                     sx={{
//                       minWidth: 0,
//                       mr: open ? 3 : "auto",
//                       justifyContent: "center",
//                     }}
//                   >
//                     {index === 0 ? <InsightsIcon /> : null}
//                     {index === 1 ? <MonetizationOnIcon /> : null}
//                     {index === 2 ? <AddPhotoAlternateIcon /> : null}
//                     {index === 3 ? <InstagramIcon /> : null}
//                   </ListItemIcon>
//                   <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
//                 </ListItemButton>
//               </ListItem>
//             ) : null */}
//           {/* )} */}
//           {["Users", "MqttData", "Customer Data"].map((text, index) =>
//             userRole === "admin" || userRole === "developer" ? (
//               <ListItem
//                 onClick={() => handleClickTwo(index)}
//                 key={text}
//                 disablePadding
//                 sx={{ display: "block" }}
//                 >
//                 <ListItemButton
//                   sx={{
//                     minHeight: 48,
//                     justifyContent: open ? "initial" : "center",
//                     px: 2.5,
//                   }}
//                 >
//                   <ListItemIcon
//                     sx={{
//                       minWidth: 0,
//                       mr: open ? 3 : "auto",
//                       justifyContent: "center",
//                     }}
//                   >
//                     {index === 0 ? (
//                       <ContactPageIcon
//                         sx={pathname === "/users" ? styling : null}
//                       />
//                     ) : null}
//                     {index === 1 ? (
//                       <SettingsApplicationsIcon
//                         sx={pathname === "/sub" ? styling : null}
//                       />
//                     ) : null}
//                     {index === 2 ? (
//                       <IntegrationInstructionsIcon
//                         sx={
//                           pathname === "/customerdata/information" ||
//                           pathname === "/customerdata/premise" ||
//                           pathname === "/customerdata/raiseticket" ||
//                           pathname === "/customerdata/service" ||
//                           pathname === "/customerdata/tracking"
//                             ? styling
//                             : null
//                           }
//                       />
//                     ) : null}
//                     {/* {index === 3 ? <AdminPanelSettingsIcon /> : null} */}
//                   </ListItemIcon>
//                   <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
//                 </ListItemButton>
//               </ListItem>
//             ) : null
//           )}
//           {["Logout"].map((text, index) => (
//             <ListItem
//               onClick={handleOnClick}
//               key={text}
//               disablePadding
//               sx={{ display: "block" }}
//               >
//               <ListItemButton
//                 sx={{
//                   minHeight: 48,
//                   justifyContent: open ? "initial" : "center",
//                   px: 2.5,
//                 }}
//               >
//                 <ListItemIcon
//                   sx={{
//                     minWidth: 0,
//                     mr: open ? 3 : "auto",
//                     justifyContent: "center",
//                   }}
//                 >
//                   <LogoutIcon />
//                 </ListItemIcon>
//                 <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//       <DrawerHeader />

//     </>
//   );
// }

function DrawerExample() {
  // const { isOpen, onOpen, onClose } = useDisclosure()
  const [isOpen, setIsOpen] = React.useState(true);
  const btnRef = React.useRef();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  const onClose = () => {
    console.log("closed");
    setIsOpen(false);
  };

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={toggleDrawer}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"xs"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <p>this is awesome</p>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
