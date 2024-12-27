import { Button, Heading, Link, SimpleGrid } from "@chakra-ui/react";
import { FaAppStore, FaPlaystation, FaSteam, FaXbox } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { SiEpicgames, SiNintendo } from "react-icons/si";
import useStores from "../hooks/useStores";

interface Props {
  gameId: number;
}

const GameStores = ({ gameId }: Props) => {
  const { data, error, isLoading } = useStores(gameId);
  console.log(data)

  if (error) {
    throw error;
  }

  if (isLoading) {
    return null;
  }

  if (data?.results.length === 0) {
    return null;
  }

  const storeMap: { [key: string]: any } = {
    1: { name: "Steam", icon: <FaSteam /> },
    2: { name: "Xbox Store", icon: <FaXbox /> },
    3: { name: "PlayStation Store", icon: <FaPlaystation /> },
    4: { name: "App Store", icon: <FaAppStore /> },
    5: { name: "GOG", icon: null },
    6: { name: "Nintendo", icon: <SiNintendo /> },
    7: { name: "Xbox 360 Store", icon: <FaXbox /> },
    8: { name: "Play Store", icon: <IoLogoGooglePlaystore /> },
    9: { name: "itch.io", icon: <FaXbox /> },
    11: { name: "Epic Games", icon: <SiEpicgames /> },
  }

  return (
    <>
      <Heading size="md" marginBottom={2}>Where to Buy</Heading>
      <SimpleGrid spacing={3} columns={{ base: 1, md: 2 }}>
        {data?.results.map(store =>
          <Button key={store.id} leftIcon={storeMap[store.store_id]?.icon} as={Link} href={store.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            {storeMap[store.store_id]?.name}
          </Button>
        )}
      </SimpleGrid>
    </>
  )
}

export default GameStores;