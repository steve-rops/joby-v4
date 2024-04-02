import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import MobileLayout from "./MobileLayout";
import MapLayout from "./features/map/MapLayout";
import Home from "./Home";
import JobsResults from "./pages/JobsResults";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="app" element={<MobileLayout />}>
            <Route path="" element={<JobsResults />} />
            <Route path="map" element={<MapLayout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
