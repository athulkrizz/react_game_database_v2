import { useAuth0 } from "@auth0/auth0-react";
import { Button, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    const navigate = useNavigate();
  
    useEffect(() => {
      if (isAuthenticated) {
        // Redirect to the Layout page when authenticated
        navigate("/app");
      }
    }, [isAuthenticated, loginWithRedirect, navigate]);

    return (
        <>
            <Heading>Please Login to Use the App</Heading>
            <Button colorScheme='teal' size='md' onClick={() => { loginWithRedirect() }}>
                Login
            </Button>
        </>
    )
};

export default LoginPage;