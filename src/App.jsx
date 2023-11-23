import React from "react";
import PageLayout from "./layouts/PageLayout";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogDetail from "./pages/BlogDetail";
import Statistics from "./pages/Statistics";
import GitHubProjectPage from "./pages/GitHubProjectPage";

function App() {

  return (
    <BrowserRouter>
      <PageLayout>
          <Routes>
            <Route path="/" Component={HomePage}/> {/* 👈 Renders at /app/ */}
            <Route path="/blogs" Component={BlogPage}/> {/* 👈 Renders at /app/ */}
            <Route path="/blogs/:id" Component={BlogDetail}/> {/* 👈 Renders at /app/ */}
            <Route path="/statistics" Component={Statistics}/> {/* 👈 Renders at /app/ */}
            <Route path="/projects" Component={GitHubProjectPage}/> {/* 👈 Renders at /app/ */}
          </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}

export default App;
