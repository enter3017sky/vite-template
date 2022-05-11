import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
import typography from 'windicss/plugin/typography'

export default defineConfig({
  darkMode: 'class',
  // https://windicss.org/posts/v30.html#attributify-mode
  attributify: true,

  plugins: [
    typography(),
  ],

  // https://windicss.org/features/#shortcuts
  shortcuts: {
    'btn': 'py-2 px-4 font-semibold rounded-lg shadow-md',
    'btn-green': 'text-white bg-green-500 hover:bg-green-700',

    // 或使用 @apply
    // 'sidebar-icon': `
    //   relative flex items-center justify-center
    //   h-12 w-12 mt-2 mb-2 mx-auto shadow-lg
    //   bg-gray-800 text-green-500
    //   hover:bg-green-600 hover:rounded-xl
    //   transition-all duration-300 ease-linear
    //   cursor-pointer`,

    // 'sidebar-tooltip':
    //   `absolute w-auto p-2 m-2 min-w-max left-14
    //   rounded-md shadow-md text-white bg-gray-900
    //   text-xs font-bold
    //   transition-all duration-100
    //   transform scale-0 origin-left`,
  },

  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              'color': 'inherit',
              'opacity': 0.75,
              'fontWeight': '500',
              'textDecoration': 'underline',
              '&:hover': {
                opacity: 1,
                color: colors.teal[600],
              },
            },
            b: { color: 'inherit' },
            strong: { color: 'inherit' },
            em: { color: 'inherit' },
            h1: { color: 'inherit' },
            h2: { color: 'inherit' },
            h3: { color: 'inherit' },
            h4: { color: 'inherit' },
            code: { color: 'inherit' },
          },
        },
      },
    },
  },
})
