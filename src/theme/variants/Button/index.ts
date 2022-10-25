import { ButtonStyleProps } from '../../../components'

const makeButtonStyleProps = ({
  color,
}: {
  color: string
}): ButtonStyleProps => ({
  containerProps: {
    backgroundColor: `${color}.300`,
    borderColor: `${color}.300`,
    radius: 'md',
    elevation: 'pressable',
    cursor: 'pointer',
    transition:
      'background-color 200ms ease-in-out,\
        border-color 300ms ease-in-out,\
        transform 300ms ease-in-out,\
        box-shadow 300ms ease-in-out\
      ',
  },
  labelProps: {
    font: 'Bold',
    textColor: 'Shading.100',
    letterSpacing: 'md',
    transition: 'color 300ms ease-in-out',
    unitsAround: 1,
    centerText: true,
    flex: 1,
  },
  states: {
    hover: {
      containerProps: {
        backgroundColor: `${color}.250`,
        borderColor: `${color}.250`,
        elevation: 'hover',
      },
    },
    active: {
      containerProps: {
        backgroundColor: `${color}.350`,
        borderColor: `${color}.350`,
        elevation: 'pressed',
      },
    },
    disabled: {
      containerProps: {
        cursor: 'default',
        backgroundColor: 'Shading.250',
        borderColor: 'Shading.250',
        elevation: 'none',
      },
      labelProps: {
        textColor: 'Shading.350',
      },
    },
  },
})

const makeButtonOutlineStyleProps = ({
  color,
}: {
  color: string
}): ButtonStyleProps => ({
  containerProps: {
    backgroundColor: 'Shading.100',
    borderColor: `${color}.300`,
    radius: 'md',
    transition: 'border-color 300ms ease-in-out',
    cursor: 'pointer',
  },
  labelProps: {
    font: 'Bold',
    textColor: `${color}.300`,
    letterSpacing: 'md',
    transition: 'color 300ms ease-in-out',
    unitsAround: 1,
    centerText: true,
    flex: 1,
  },
  states: {
    hover: {
      containerProps: { borderColor: `${color}.250` },
      labelProps: { textColor: `${color}.250` },
    },
    active: {
      containerProps: { borderColor: `${color}.350` },
    },
    disabled: {
      containerProps: {
        backgroundColor: 'Shading.250',
        borderColor: 'Shading.250',
      },
      labelProps: {
        textColor: 'Shading.350',
      },
    },
  },
})

export const PrimaryButton: ButtonStyleProps = makeButtonStyleProps({
  color: 'Primary',
})

export const PrimaryOutlineButton: ButtonStyleProps = makeButtonOutlineStyleProps(
  {
    color: 'Primary',
  },
)

export const DangerButton: ButtonStyleProps = makeButtonStyleProps({
  color: 'Danger',
})

export const DangerOutlineButton: ButtonStyleProps = makeButtonOutlineStyleProps(
  {
    color: 'Danger',
  },
)

export const WarningButton: ButtonStyleProps = makeButtonStyleProps({
  color: 'Warning',
})

export const SuccessButton: ButtonStyleProps = makeButtonStyleProps({
  color: 'Success',
})

export const PlainButton: ButtonStyleProps = {
  containerProps: {
    backgroundColor: 'Shading.100',
    borderColor: 'Shading.100',
    radius: 'md',
    elevation: 'pressable',
    cursor: 'pointer',
    transition:
      'background-color 200ms ease-in-out,\
        border-color 300ms ease-in-out,\
        transform 300ms ease-in-out,\
        box-shadow 300ms ease-in-out\
      ',
  },
  labelProps: {
    font: 'Bold',
    textColor: 'Shading.400',
    letterSpacing: 'md',
    transition: 'color 300ms ease-in-out',
    unitsAround: 1,
    centerText: true,
    flex: 1,
  },
  states: {
    hover: {
      containerProps: {
        elevation: 'hover',
      },
    },
    active: {
      containerProps: {
        backgroundColor: 'Shading.350',
        borderColor: 'Shading.350',
        elevation: 'pressed',
      },
    },
    disabled: {
      containerProps: {
        cursor: 'default',
        backgroundColor: 'Shading.250',
        borderColor: 'Shading.250',
        elevation: 'none',
      },
      labelProps: {
        textColor: 'Shading.350',
      },
    },
  },
}

export const GhostButton: ButtonStyleProps = {
  containerProps: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    transition: 'background-color 200ms ease-in-out',
    radius: 'md',
    cursor: 'pointer',
  },
  labelProps: {
    font: 'Bold',
    textColor: 'Primary.300',
    letterSpacing: 'md',
    transition: 'color 300ms ease-in-out',
    uppercase: true,
    unitsAround: 1,
    centerText: true,
    flex: 1,
  },
  states: {
    hover: {
      containerProps: {
        backgroundColor: 'Shading.150',
        borderColor: 'Shading.150',
      },
      labelProps: {
        textColor: 'Primary.400',
      },
    },
    active: {
      labelProps: {
        textColor: 'Primary.500',
      },
    },
    disabled: {
      containerProps: {
        cursor: 'default',
        backgroundColor: 'Shading.150',
        borderColor: 'Shading.150',
        elevation: 'none',
      },
      labelProps: {
        textColor: 'Shading.300',
      },
    },
  },
}
