import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import Link from "next/link";

export default function GameOverModal(props: any) {
  return (
    <Modal
      isOpen={props.isOpen}
      onOpenChange={props.onOpenChange}
      isDismissable={false}
      hideCloseButton={true}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Game Over!
            </ModalHeader>
            <ModalBody>
              {props.isLives ? (
                <p>
                  Score: {props.score} / {props.total}
                </p>
              ) : (
                <p>Score: {props.score}</p>
              )}
              {!props.isLives && <p>Number of skips: {props.skips}</p>}
            </ModalBody>
            <ModalFooter>
              <Button
                as={Link}
                color="primary"
                variant="light"
                onPress={() => {
                  onClose();
                }}
                href="/"
              >
                Main Menu
              </Button>
              <Button
                color="primary"
                variant="light"
                onPress={() => {
                  props.callback();
                  onClose();
                }}
              >
                Play again?
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
