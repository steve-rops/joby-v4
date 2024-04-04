import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import MobileLayout from "./MobileLayout";
import MapLayout from "./features/map/MapLayout";
import Home from "./Home";
import JobsListing from "./features/Jobs/JobsListing";
import { useState } from "react";

function App() {
  const [headerHeight, setHeaderHeight] = useState(0);

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
          <Route
            path="app"
            element={<MobileLayout setHeaderHeight={setHeaderHeight} />}
          >
            <Route
              path=""
              element={<JobsListing headerHeight={headerHeight} />}
            />
            <Route
              path="map"
              element={<MapLayout headerHeight={headerHeight} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
