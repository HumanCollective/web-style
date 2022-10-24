import { ButtonVariant } from '../../../components'

const makeButtonVariant = ({ color }: { color: string }): ButtonVariant => ({
  normal: {
    container: {
      backgroundColor: `${color}.300`,
      borderColor: `${color}.300`,
      radius: 'md',
      elevation: 'pressable',
      transition: `background-color 200ms ease-in-out,
        border-color 300ms ease-in-out,
        transform 300ms ease-in-out,
        box-shadow 300ms ease-in-out
      `,
    },
    label: {
      font: 'Bold',
      textColor: 'Shading.100',
      letterSpacing: 'md',
      transition: 'color 300ms ease-in-out',
    },
  },
  hover: {
    container: {
      backgroundColor: `${color}.250`,
      borderColor: `${color}.250`,
      elevation: 'hover',
    },
  },
  active: {
    container: {
      backgroundColor: `${color}.350`,
      borderColor: `${color}.350`,
      elevation: 'pressed',
    },
  },
  disabled: {
    container: {
      cursor: 'default',
      backgroundColor: 'Shading.250',
      borderColor: 'Shading.250',
      elevation: 'none',
    },
    label: {
      textColor: 'Shading.350',
    },
  },
})

const makeButtonOutlineVariant = ({
  color,
}: {
  color: string
}): ButtonVariant => ({
  normal: {
    container: {
      backgroundColor: 'Shading.100',
      borderColor: `${color}.300`,
      radius: 'md',
      transition: 'border-color 300ms ease-in-out',
    },
    label: {
      font: 'Bold',
      textColor: `${color}.300`,
      letterSpacing: 'md',
      transition: 'color 300ms ease-in-out',
    },
  },
  hover: {
    container: { borderColor: `${color}.250` },
    label: { textColor: `${color}.250` },
  },
  active: {
    container: { borderColor: `${color}.350` },
  },
  disabled: {
    container: {
      backgroundColor: 'Shading.250',
      borderColor: 'Shading.250',
    },
    label: {
      textColor: 'Shading.350',
    },
  },
})

export const PrimaryButton: ButtonVariant = makeButtonVariant({
  color: 'Primary',
})

export const PrimaryOutlineButton: ButtonVariant = makeButtonOutlineVariant({
  color: 'Primary',
})

export const DangerButton: ButtonVariant = makeButtonVariant({
  color: 'Danger',
})

export const DangerOutlineButton: ButtonVariant = makeButtonOutlineVariant({
  color: 'Danger',
})

export const WarningButton: ButtonVariant = makeButtonVariant({
  color: 'Warning',
})

export const SuccessButton: ButtonVariant = makeButtonVariant({
  color: 'Success',
})

export const PlainButton: ButtonVariant = {
  normal: {
    container: {
      backgroundColor: 'Shading.100',
      borderColor: 'Shading.100',
      radius: 'md',
      elevation: 'pressable',
      transition: `background-color 200ms ease-in-out,
        border-color 300ms ease-in-out,
        transform 300ms ease-in-out,
        box-shadow 300ms ease-in-out
      `,
    },
    label: {
      font: 'Bold',
      textColor: 'Shading.400',
      letterSpacing: 'md',
      transition: 'color 300ms ease-in-out',
    },
  },
  hover: {
    container: {
      elevation: 'hover',
    },
  },
  active: {
    container: {
      backgroundColor: 'Shading.350',
      borderColor: 'Shading.350',
      elevation: 'pressed',
    },
  },
  disabled: {
    container: {
      cursor: 'default',
      backgroundColor: 'Shading.250',
      borderColor: 'Shading.250',
      elevation: 'none',
    },
    label: {
      textColor: 'Shading.350',
    },
  },
}

export const GhostButton: ButtonVariant = {
  normal: {
    container: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      transition: 'background-color 200ms ease-in-out',
      radius: 'md',
    },
    label: {
      font: 'Bold',
      textColor: 'Primary.300',
      letterSpacing: 'md',
      transition: 'color 300ms ease-in-out',
      uppercase: true,
    },
  },
  hover: {
    container: {
      backgroundColor: 'Shading.150',
      borderColor: 'Shading.150',
    },
    label: {
      textColor: 'Primary.400',
    },
  },
  active: {
    label: {
      textColor: 'Primary.500',
    },
  },
  disabled: {
    container: {
      cursor: 'default',
      backgroundColor: 'Shading.150',
      borderColor: 'Shading.150',
      elevation: 'none',
    },
    label: {
      textColor: 'Shading.300',
    },
  },
}
