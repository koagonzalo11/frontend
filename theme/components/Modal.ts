import { modalAnatomy as parts } from '@chakra-ui/anatomy'
import type { PartsStyleFunction, SystemStyleFunction } from '@chakra-ui/theme-tools'
import { mode } from '@chakra-ui/theme-tools'
import type { ComponentMultiStyleConfig } from '@chakra-ui/theme';

const baseStyleDialog: SystemStyleFunction = (props) => {
  return {
    padding: 8,
    borderRadius: 'lg',
    bg: mode('white', 'gray.800')(props),
  }
}

const baseStyleHeader = {
  padding: 0,
  marginBottom: 8,
  fontSize: '2xl',
  lineHeight: 10,
}

const baseStyleBody = {
  padding: 0,
  marginBottom: 8,
}

const baseStyleFooter = {
  padding: 0,
  justifyContent: 'flex-start',
}

const baseStyleCloseButton: SystemStyleFunction = (props) => {
  return {
    top: 8,
    right: 8,
    height: 10,
    width: 10,
    color: mode('gray.700', 'gray.600')(props),
    _hover: { color: 'blue.400' },
    _active: { bg: 'none' },
  }
}
const baseStyleOverlay = {
  bg: 'blackAlpha.800',
}

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  dialog: baseStyleDialog(props),
  header: baseStyleHeader,
  body: baseStyleBody,
  footer: baseStyleFooter,
  closeButton: baseStyleCloseButton(props),
  overlay: baseStyleOverlay,
})

const sizes = {
  md: {
    dialog: {
      maxW: '760px',
    },
  },
}

const Modal: ComponentMultiStyleConfig = {
  parts: parts.keys,
  sizes,
  baseStyle,
}

Modal.defaultProps = { isCentered: true };

export default Modal;
