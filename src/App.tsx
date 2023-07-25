import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Index } from "./pages/index";
import { SearchByCards } from "./pages/searchByCards";
import { AdvancedSearchByCards } from "./pages/advancedSearchCards";
import { GraphicSearch } from "./pages/graphicSearch";
import { NewDocumentUI } from "./pages/newDocumentUI";
import { AdminUI } from "./pages/adminUI";
import "./App.css";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { store } from "./redux";
import { apiSlice } from "./api";
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <Suspense fallback={<>Cargando...</>}>
      <SnackbarProvider maxSnack={2}>
      <Provider store={store}>
        <ApiProvider api={apiSlice}>
          <BrowserRouter>
            <Routes>
              <Route index element={<Index />} />
              <Route path="/search" element={<SearchByCards />} />
              <Route
                path="/advanced-search"
                element={<AdvancedSearchByCards />}
              />
              <Route path="/graphic-search" element={<GraphicSearch />} />
              <Route path="/new-document" element={<NewDocumentUI />} />
              <Route path="/rerva-admin" element={<AdminUI />} />
            </Routes>
          </BrowserRouter>
        </ApiProvider>
      </Provider>
      </SnackbarProvider>
    </Suspense>
  );
}

export default App;
