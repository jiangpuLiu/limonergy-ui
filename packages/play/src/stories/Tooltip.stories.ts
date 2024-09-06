import type { Meta, StoryObj } from '@storybook/vue3'

import { fn } from '@storybook/test'
import { LmTooltip } from 'limonergy-ui'
import 'limonergy-ui/dist/theme/Tooltip.css'

type Story = StoryObj<typeof LmTooltip>

const meta: Meta<typeof LmTooltip> = {
  title: 'Example/Tooltip',
  component: LmTooltip,
  tags: ['autodocs'],
  argTypes: {
    trigger: {
      options: ['hover', 'click'],
      control: { type: 'select' },
    },
    placement: {
      options: ['top', 'bottom', 'left', 'right'],
      control: { type: 'select' },
    },
  },
  args: {
    'onVisible-change': fn(),
  },
}

export const Defalult: Story = {
  args: {
    content: 'This is a tooltip',
    placement: 'top',
    trigger: 'hover',
  },
  render: (args) => ({
    components: { LmTooltip },
    setup() {
      return {
        args,
      }
    },
    template: `
      <LmTooltip v-bind="args">
          <div style="height:30px;width:200px;background:red;text-align: center; line-height: 30px">trigger</div>
      </LmTooltip>
    `,
  }),
}

export default meta
