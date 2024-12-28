import { HStack, Image, useColorMode } from "@chakra-ui/react";
import logo_light_mode from "../assets/logo_light_mode.svg";
import logo_dark_mode from "../assets/logo_dark_mode.svg"
import logo_name_light from "../assets/logo_name_light.svg";
import logo_name_dark from "../assets/Logo_name_dark.svg"
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const { colorMode } = useColorMode();
  const logo = colorMode === "dark" ? logo_dark_mode : logo_light_mode;
  const logoName = colorMode === "dark" ? logo_name_dark : logo_name_light;
  return (
    <HStack padding="10px" boxShadow="var(--boxShadow)" borderRadius={20}>
      <Link to="/">
        <Image
          src={logo}
          boxSize="60px" objectFit="cover"
        />
      </Link>
      <Image src=
        {logoName}
        boxSize="30px" width="200px"
        objectFit="cover" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};
