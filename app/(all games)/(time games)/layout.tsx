"use client";

import { MdHome, MdOutlineQuestionMark } from "react-icons/md";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar, NavbarItem, NavbarContent } from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  ModalFooter,
} from "@nextui-org/modal";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                How to Play - Time Attack
              </ModalHeader>
              <ModalBody className="text-justify">
                <p>
                  The objective of this game mode is to identify as many MRT
                  stations as possible within 90 seconds.
                </p>
                <p>
                  The textbox will continually check your input. If the correct
                  station is input, the textbox will flash green and a new
                  abbreviation is generated. Otherwise, the time will continue
                  to tick.
                </p>
                <p>
                  If you cannot identify the currently displayed MRT station,
                  you may choose to skip the current station with a 5 second
                  penalty. By pressing the 'Skip Question' button, a new MRT
                  abbreviation will be generated.
                </p>
                <p>How many MRT stations can you identify?</p>
              </ModalBody>
              <ModalFooter />
            </>
          )}
        </ModalContent>
      </Modal>

      <div className="pb-5">
        <Navbar isBordered>
          <NavbarContent className="flex gap-4" justify="center">
            <NavbarItem>
              <Link href="/">
                <Button isIconOnly>
                  <MdHome />
                </Button>
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Button isIconOnly onPress={onOpen}>
                <MdOutlineQuestionMark />
              </Button>
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
