import type { Meta, StoryObj } from '@storybook/vue3'
import { LmCollapse, LmCollapseItem } from 'limonergy-ui'
import 'limonergy-ui/dist/theme/Collapse.css'

type Story = StoryObj<typeof LmCollapse>

const meta: Meta<typeof LmCollapse> = {
  title: 'Example/Collapse',
  component: LmCollapse,
  subcomponents: { LmCollapseItem },
  tags: ['autodocs'],
}

export const Default: Story = {
  render: (args) => ({
    components: {
      LmCollapse,
      LmCollapseItem,
    },
    setup() {
      return {
        args,
      }
    },
    template: `
    <lm-collapse v-bind="args">
      <lm-collapse-item name="a" title="Title a">
        <div>this is content a</div>
      </lm-collapse-item>
      <lm-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </lm-collapse-item>
      <lm-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </lm-collapse-item>
    </lm-collapse>
    `,
  }),
  args: {
    accordion: true,
    modelValue: ['a'],
  },
}

export default meta
