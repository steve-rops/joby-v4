import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import MobileLayout from "./MobileLayout";
import MapLayout from "./features/map/MapLayout";
import JobsListing from "./features/Jobs/JobsListing/JobsListing";
import SingleJobLayout from "./features/Jobs/SingleJob/SingleJobLayout";
import About from "./About";
import Home from "./pages/Home";
import SignInComponent from "./features/auth/signIn/SignInComponent";
import SignUpComponent from "./features/auth/signup/SignUpComponent";

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
          <Route path="about" element={<About />} />
          <Route index element={<Home />} />
          <Route path="app" element={<MobileLayout />}>
            <Route path="" element={<JobsListing />} />
            <Route path="map" element={<MapLayout />} />
          </Route>
          <Route path="app/:id" element={<SingleJobLayout />} />
          <Route path="sign-up" element={<SignUpComponent />} />
          <Route path="sign-in" element={<SignInComponent />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
