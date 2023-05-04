import type { Meta, StoryObj } from '@storybook/vue3';

import Button from './Button.vue';

import tailwindcss from '@/styles/tailwind/polaris.css?inline'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Components/Button/Polaris/Tailwind',
  component: Button,
  decorators: [
    () => (
      {
        template: `<div><component :is="\'style\'">${tailwindcss.toString()}</component><story/></div>`
      }
    ),
  ],
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    intent: { control: 'select', options: ['primary', 'secondary', 'destructive'] },
    size: { control: 'select', options: ['slim', 'medium', 'large'] },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    label: 'Primary Button',
    intent: 'primary'
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    intent: 'secondary'
  },
};

export const Destructive: Story = {
  args: {
    label: 'Destructive Button',
    intent: 'destructive'
  },
};
