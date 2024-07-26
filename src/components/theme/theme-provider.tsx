// src/theme-provider.tsx
import { ReactNode, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { setTheme, Theme } from "../../redux/slices/themeSlices";

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);

  useEffect(() => {
    const root = window.document.documentElement;

    // Remove previous theme class and add the new one
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    
    // Update the local storage with the current theme
    localStorage.setItem("vite-ui-theme", theme);
  }, [theme]);

  useEffect(() => {
    // Initialize theme based on local storage or default value
    const storedTheme = localStorage.getItem("vite-ui-theme") as Theme;
    if (storedTheme) {
      dispatch(setTheme(storedTheme));
    }
  }, [dispatch]);

  return <>{children}</>;
}
