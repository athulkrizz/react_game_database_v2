import { useAuth0 } from "@auth0/auth0-react";
import { Button, HStack, Image, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo_name_dark from "../assets/Logo_name_dark.svg";
import logo_name_light from "../assets/logo_name_light.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import ProfileMenu from "./ProfileMenu";
import SearchInput from "./SearchInput";

export const NavBar = () => {
  const { colorMode } = useColorMode();
  const { user, loginWithRedirect, isAuthenticated } = useAuth0();
  const logoName = colorMode === "dark" ? logo_name_dark : logo_name_light;

  return (
    <HStack padding="10px" boxShadow="var(--boxShadow)" borderRadius={20}>
      <Link to="/">
        <Image src=
          {logoName}
          boxSize="35px" width="300px"
        />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
      {!isAuthenticated &&
        <Button onClick={() => loginWithRedirect()}>Login</Button>
      }
      {isAuthenticated &&
        <ProfileMenu user={user} />
      }
    </HStack>
  );
};
