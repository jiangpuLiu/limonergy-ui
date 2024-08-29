/** @type { import('@storybook/vue3').Preview } */
import "limonergy-ui/dist/theme/index.css"
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
