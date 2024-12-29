import { Box, Flex, Grid, GridItem, Show, Spinner } from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import GameHeading from "../components/GameHeading";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import GameGrid from "../components/GameGrid";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

const HomePage = () => {
  const {user, isLoading, error}= useAuth0();
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}
          boxShadow="var(--boxShadow)"
          marginTop={2}
          borderRadius="20px">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main" boxShadow="var(--boxShadow)"
        marginTop={2}
        borderRadius="20px"
        marginLeft={5}
        paddingLeft="10px"
      >
        <Box paddingLeft={2}>
          <GameHeading />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector />
            </Box>
            <SortSelector />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

  export default HomePage;

// export default withAuthenticationRequired(HomePage, {
//   onRedirecting: () => <Spinner />
// })
