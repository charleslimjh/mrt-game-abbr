import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";

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
              <p>Score: {props.score}</p>
              <p>Number of skips: {props.skips}</p>
            </ModalBody>
            <ModalFooter>
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
