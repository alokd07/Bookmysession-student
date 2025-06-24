import "@/styles/globals.css";
import { createContext, useEffect, useState } from "react";
import NavbarMenu from "../components/NavbarMenu";

export const UserContext = createContext();
export const OpenModalContext = createContext();
export const LoadingContext = createContext();
export const AuthContext = createContext();

export default function App({ Component, pageProps }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <OpenModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
        <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
          <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {/* Optionally wrap with <Layout> and conditionally show <Loader /> */}
            <NavbarMenu />
            <Component {...pageProps} />
          </AuthContext.Provider>
        </LoadingContext.Provider>
      </OpenModalContext.Provider>
    </UserContext.Provider>
  );
}
