export const DEFAULT_VARIANTS = {
  'Input.Default': {
    fontSize: 'md',
    backgroundColor: 'Shading.150',
    radius: 'md',
    paddingAround: 1,
    unitsAbove: 1 / 2,
    unitsBelow: 1 / 2,
    style: {
      padding: 12,
    },
  },

  'Button.Primary.Container': {
    interactive: true,
    elevation: 'md',
    backgroundColor: 'Primary.300',
    hoverBackgroundColor: 'Primary.250',
    radius: 'md',
  },
  'Button.Primary.Label': {
    font: 'Bold',
    textColor: 'Shading.100',
    letterSpacing: 'md',
    unitsAround: 1,
    flex: 1,
    alignCenter: true,
    alignMiddle: true,
    centerText: true,
  },

  'Button.Hint.Container': {
    interactive: true,
    borderColor: 'Shading.200',
    backgroundColor: 'Shading.200',
    radius: 'pill',
  },
  'Button.Hint.Label': {
    font: 'Bold',
    textColor: 'Shading.300',
    fontSize: 'sm',
    letterSpacing: 'sm',
    unitsAround: 3 / 4,
    flex: 1,
    alignCenter: true,
    alignMiddle: true,
    centerText: true,
  },

  'Text.H1': {
    fontSize: 'xl',
    textColor: 'foreground',
    font: 'Bold',
    lineHeight: 'md',
  },
  'Text.H2': {
    fontSize: 'lg',
    textColor: 'foreground',
    font: 'Bold',
  },
  'Text.H3': {
    textColor: 'foreground',
    font: 'Bold',
  },
  'Text.Eyebrow': {
    fontSize: 'md',
    textColor: 'foreground',
    uppercase: true,
  },
  'Text.Description': {
    lineHeight: 'xl',
    fontSize: 'md',
  },
  'Link.Default': {
    textColor: 'Primary.300',
    underline: 'hover',
  },
  'Link.Muted': {
    textColor: 'Shading.300',
    underline: 'hover',
  },

  'FormInput.Default.Label': {
    font: 'Bold',
    letterSpacing: 'md',
  },
  'FormInput.Default.LabelRow': {
    unitsAbove: 1,
    unitsBelow: 1 / 2,
  },
  'FormInput.Default.Container': {},
  'FormInput.Default.Error': {},
  'FormInput.Default.Helper': {},
}
