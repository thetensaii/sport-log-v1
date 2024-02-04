import { Modal as ChakraModal, ModalProps } from "@chakra-ui/react";
import {
  ModalOverlay as ChakraModalOverlay,
  ModalOverlayProps,
} from "@chakra-ui/react";
import {
  ModalContent as ChakraModalContent,
  ModalContentProps,
} from "@chakra-ui/react";
import {
  ModalCloseButton as ChakraModalCloseButton,
  ModalCloseButtonProps,
} from "@chakra-ui/react";
import {
  ModalHeader as ChakraModalHeader,
  ModalHeaderProps,
} from "@chakra-ui/react";
import { ModalBody as ChakraModalBody, ModalBodyProps } from "@chakra-ui/react";
import {
  ModalFooter as ChakraModalFooter,
  ModalFooterProps,
} from "@chakra-ui/react";

export const Modal = ({ ...props }: ModalProps) => {
  return <ChakraModal {...props} />;
};

export const ModalOverlay = ({ ...props }: ModalOverlayProps) => {
  return <ChakraModalOverlay {...props} />;
};

export const ModalContent = ({ ...props }: ModalContentProps) => {
  return <ChakraModalContent {...props} />;
};

export const ModalCloseButton = ({ ...props }: ModalCloseButtonProps) => {
  return <ChakraModalCloseButton {...props} />;
};

export const ModalHeader = ({ ...props }: ModalHeaderProps) => {
  return <ChakraModalHeader {...props} />;
};

export const ModalBody = ({ ...props }: ModalBodyProps) => {
  return <ChakraModalBody {...props} />;
};

export const ModalFooter = ({ ...props }: ModalFooterProps) => {
  return <ChakraModalFooter {...props} />;
};
