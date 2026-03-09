export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      neutral: 'slate'
    },
    button: {
      slots: {
        base: 'cursor-pointer'
      },
      compoundVariants: [
        {
          color: 'primary',
          variant: 'solid',
          class: 'text-white'
        },
        {
          color: 'secondary',
          variant: 'solid',
          class: 'text-white'
        }
      ]
    },
    container: {
      base: 'max-w-[76rem]'
    }
  }
})
