import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { CacheProvider } from "@emotion/react";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import createEmotionCache from "@/createEmotionCache";
import {
  QueryClient,
  QueryClientProvider,
  HydrationBoundary,
} from "@tanstack/react-query";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/900.css";

const clientSideEmotionCache = createEmotionCache();

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <CacheProvider value={emotionCache}>
          <CssVarsProvider>
            <CssBaseline />
            <Navigation />
            <Component {...pageProps} />
          </CssVarsProvider>
        </CacheProvider>
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
