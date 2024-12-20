import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme.js";
import HeaderAppBar from "@/components/navigation/HeaderAppBar";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <HeaderAppBar />
            <Paper sx={{ minHeight: "90vh" }}>
              <Container maxWidth="xl">{children}</Container>
            </Paper>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
