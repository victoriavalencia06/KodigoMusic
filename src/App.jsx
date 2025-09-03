import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Favorite from "./pages/Favorites.jsx";
import { useAuth } from "./Auth/AuthContext.jsx";

// Componente para proteger rutas
function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

export default function App() {
  const { user } = useAuth();

  return (
    <Router>
      <Routes>
        {/* Si ya está logueado y va al login, lo mando al home */}
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        />

        {/* Home protegido: necesita usuario */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <MainLayout>
                <Home />
              </MainLayout>
            </PrivateRoute>
          }
        />
        {/* Favoritos protegido */}
        <Route
          path="/favorite"
          element={
            <PrivateRoute>
              <MainLayout>
                <Favorite />
              </MainLayout>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}
