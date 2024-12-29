import { useAuth0 } from '@auth0/auth0-react';
import { Avatar, Card, CardBody, CardHeader, Heading, Text } from '@chakra-ui/react';

const ProfilePage = () => {
    const { user } = useAuth0();
    return (
        <Card align='center' marginTop={4} borderRadius="20px" boxShadow="var(--boxShadow)">
            <CardHeader>
                <Avatar
                    size='xlg'
                    src={user?.picture}
                />
            </CardHeader>
            <CardBody>
                <Heading>{user?.name}</Heading>
                <Text colorScheme='blue' textAlign="center">{user?.email}</Text>
            </CardBody>
        </Card>
    )
}

export default ProfilePage;