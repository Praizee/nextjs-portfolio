"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export const ProgressBarProvider = ({ children }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#3576e0"
        options={{ showSpinner: false, trickleSpeed: 100 }}
        shallowRouting
      />
    </>
  );
};
