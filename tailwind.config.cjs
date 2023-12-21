const tokens = require('./app/styles/tokens.json')

const colors = toTailwind(tokens, 'color')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      ...colors,
    },
  },
}

// Helpers

function toTailwind(tokens, category) {
  return Object.keys(tokens[category]).reduce((acc, name) => {
    return {
      ...acc,
      [name]: `var(--${category}-${name})`,
    }
  }, {})
}
