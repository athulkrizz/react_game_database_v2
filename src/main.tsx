import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import theme from "./theme";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

import history from "./utils/history";
import { getConfig } from "./config";
import { Auth0Provider } from "@auth0/auth0-react";

const queryClient = new QueryClient();

const onRedirectCallback = (appState: any) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

const config = getConfig();

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  onRedirectCallback,
  authorizationParams: {
    redirect_uri: window.location.origin,
    ...(config.audience ? { audience: config.audience } : null),
  },
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Auth0Provider {...providerConfig}>
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </ChakraProvider>
    </React.StrictMode>
  </Auth0Provider>
);
