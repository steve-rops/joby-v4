import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DrawerContext } from "./features/Drawer/DrawerContext";

import MobileLayout from "./MobileLayout";
import Home from "./Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
          <Route
            path="app"
            element={
              <DrawerContext>
                <MobileLayout />
              </DrawerContext>
            }
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
