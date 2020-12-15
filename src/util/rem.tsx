export const BASE_FONT_SIZE = 16

const rem = (pixels = 16) => {
  return `${pixels / BASE_FONT_SIZE}rem`
}

export default rem;