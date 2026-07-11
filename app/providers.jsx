"use client";

import { useContext, useEffect } from "react";
import { ThemeProvider, ThemeContext } from "@/context/darkcontext";
import { clarity } from "react-microsoft-clarity";

// Wraps the app in the theme context, initialises Microsoft Clarity,
// and applies the theme-dependent background/text colour to the .App
// container. The exact inline style ("background-color: rgb(34, 34, 34)")
// is what the News/Research dark-mode CSS selectors key off of, so it is
// preserved verbatim.
function AppShell({ children }) {
  const theme = useContext(ThemeContext);

  useEffect(() => {
    clarity.init("gd67juaw60");
  }, []);

  return (
    <div
      className="App"
      style={{
        backgroundColor: theme.state.darkMode ? "#222" : "white",
        color: theme.state.darkMode ? "white" : "black",
      }}
    >
      {children}
    </div>
  );
}

export default function Providers({ children }) {
  return (
    <ThemeProvider>
      <AppShell>{children}</AppShell>
    </ThemeProvider>
  );
}
