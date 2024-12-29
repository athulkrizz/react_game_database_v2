import { useAuth0 } from '@auth0/auth0-react';
import { Avatar, Center, Menu, MenuButton, MenuGroup, MenuItem, MenuList } from '@chakra-ui/react'
import { useLocation, Link } from 'react-router-dom';

interface Props {
    user: any;
}

const ProfileMenu = ({ user }: Props) => {
    const location = useLocation();
    const { logout } = useAuth0();

    const logoutWithRedirect = () => {
        logout({
            logoutParams: {
                returnTo: window.location.origin,
            }
        });
    }
    return (
        <Menu>
            <MenuButton marginLeft={4}>
                <Avatar size='sm' name={user?.name} src={user?.picture} />
            </MenuButton>
            <MenuList>
                <Center paddingBottom={2} paddingTop={2}>
                    <Avatar
                        size={'md'}
                        src={user?.picture}
                    />
                </Center>
                <Center>
                    <p>{user?.name}</p>
                </Center>
                <br />
                <MenuGroup title='Profile'>
                    {location.pathname !== "/profile" && (
                        <MenuItem>
                            <Link to="/profile">My Profile</Link>
                        </MenuItem>
                    )}
                    <MenuItem onClick={() => logoutWithRedirect()}>Logout</MenuItem>
                </MenuGroup>
            </MenuList>
        </Menu>
    )
}

export default ProfileMenu;