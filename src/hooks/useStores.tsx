import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Store from "../entities/useStore";

const useStores = (gameId: number) => {
    const apiClient = new APIClient<Store>(`games/${gameId}/stores`)
    return useQuery({
        queryKey: ["stores", gameId],
        queryFn: apiClient.getAll
    })
}

export default useStores;