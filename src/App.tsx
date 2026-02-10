import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RoleProvider } from "@/contexts/RoleContext";
import { AppLayout } from "@/components/AppLayout";
import Index from "./pages/Index";
import StudentModule from "./pages/StudentModule";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <RoleProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/student" element={<StudentModule />} />
              <Route path="/clubs" element={<PlaceholderPage />} />
              <Route path="/alumni" element={<PlaceholderPage />} />
              <Route path="/placements" element={<PlaceholderPage />} />
              <Route path="/faculty" element={<PlaceholderPage />} />
              <Route path="/news" element={<PlaceholderPage />} />
              <Route path="/forum" element={<PlaceholderPage />} />
              <Route path="/marketplace" element={<PlaceholderPage />} />
              <Route path="/feedback" element={<PlaceholderPage />} />
              <Route path="/student-id" element={<PlaceholderPage />} />
              <Route path="/notifications" element={<PlaceholderPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </RoleProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
