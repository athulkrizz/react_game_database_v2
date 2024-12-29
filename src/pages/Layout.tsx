import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Box, Spinner } from "@chakra-ui/react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

const Layout = () => {

  return (
    <>
      <Box padding={5}>
        <NavBar />
        <Outlet />
      </Box>
    </>
  );
};

// export default Layout;

export default withAuthenticationRequired(Layout, {
  onRedirecting: () => <Spinner />
})
