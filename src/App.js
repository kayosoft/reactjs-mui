// routes
import Router from "./routes";
// theme
import ThemeConfig from "./theme";
import "./App.css";
// components
import ScrollToTop from "./components/ScrollToTop";

// Loader-spinner css
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"; 

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeConfig>
      <ScrollToTop />
      <Router />
    </ThemeConfig>
  );
}
