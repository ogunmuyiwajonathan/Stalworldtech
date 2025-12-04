import { useEffect, useState } from "react";
import { Switch, Route } from "wouter";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import NoInternet from "./components/NoInternet";
function App() {
    const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (!online) return <NoInternet />;

  return (
    <Switch>
      {/* The root path "/" shows the animated Landing page */}
      <Route path="/" component={Landing} />
      
      {/* The "/home" path shows the main website content */}
      <Route path="/home" component={Home} />
    </Switch>
  );
}

export default App;