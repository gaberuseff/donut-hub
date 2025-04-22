import {Outlet, useNavigation} from "react-router-dom";

import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";
import NoInternet from "./NoInternet";
import {useEffect, useState} from "react";

function AppLayout() {
  const naviagation = useNavigation();
  const isLoading = naviagation.state === "loading";

  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (!isOnline) {
    return <NoInternet />;
  }

  return (
    <>
      <div className="grid h-screen grid-rows-[auto_1fr]">
        {isLoading && <Loader />}

        <Header />

        <div className="overflow-auto rtl">
          <main className="max-w-5xl mx-auto">
            <Outlet />
          </main>
        </div>

        <CartOverview />
      </div>

      <div className="absolute md:bottom-8 bottom-4 md:right-8 right-4">
        <a href="https://www.facebook.com/gaberuseff/" target="_blank">
          <ion-icon name="logo-facebook" size="large"></ion-icon>
        </a>
      </div>
    </>
  );
}

export default AppLayout;
