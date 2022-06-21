module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
      },
      textColor: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        subtle: 'var(--color-text-subtle)',
      },
      colors: {
        accent: 'var(--color-accent)',
      },
      spacing: {
        128: '32rem',
        136: '34rem',
        144: '36rem',
      },
      fontSize: {
        '4xl': ['36px', '48px'],
      },
      dropShadow: {
        'xl-dark': '0 20px 13px rgba(237, 237, 237, 0.25)',
      },
      animation: {
        'blob-spin': 'blobbing 25s linear infinite',
        'spike-bounce': 'bounce 0.6s infinite',
      },
      keyframes: {
        blobbing: {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(360deg)',
          },
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
