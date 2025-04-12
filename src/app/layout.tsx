
import theme from "./theme/theme";
import "./globals.css";
import { ThemeProvider } from '@mui/material/styles';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <ThemeProvider theme={theme}>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
