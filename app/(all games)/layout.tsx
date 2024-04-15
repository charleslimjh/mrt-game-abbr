"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar, NavbarItem, NavbarContent } from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="pb-5">
        <Navbar isBordered>
          <NavbarContent className="flex gap-4" justify="center">
            <NavbarItem>
              <Link color="foreground" href="/">
                Home
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Help
              </Link>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </div>

      <div className="text-3xl pb-5">MRT Abbreviation Game!</div>
      <div className="">
        {children}
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
          theme="dark"
        />
      </div>
    </div>
  );
}
