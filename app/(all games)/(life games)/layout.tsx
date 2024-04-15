"use client";
import { MdHome, MdOutlineQuestionMark } from "react-icons/md";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar, NavbarItem, NavbarContent } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
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
                How to Play - 5 Lives - 100% Mode
              </ModalHeader>
              <ModalBody className="text-justify">
                <p>
                  The objective of this game mode is to guess all MRT stations
                  of your selected MRT Line.
                </p>
                <p>
                  If the correct station is input, the textbox will flash green
                  and a new abbreviation is generated. Otherwise, the textbox
                  will flash red and the textbox will be cleared. You will also
                  lose one of your 5 lives.
                </p>
                <p>
                  You may choose to skip the current station at no penalty. By
                  pressing the 'Skip' button, a new MRT abbreviation will be
                  generated.
                </p>
                <p>Can you identify all MRT stations by their abbreviations?</p>
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
