/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 ** Variants order: ['responsive', 'group-hover', 'group-focus', 'focus-within', 'first', 'last', 'odd', 'even', 'hover', 'focus', 'active', 'visited', 'disabled']
 */
module.exports = {
  purge: false,
  theme: {
    fontFamily: {
      google: ['Nunito']
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'even', 'focus'],
    backgroundOpacity: ['responsive', 'hover', 'even', 'focus']
  },
  plugins: []
}
