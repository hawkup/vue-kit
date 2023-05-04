import type { Meta, StoryObj } from '@storybook/vue3';
import { useScriptTag } from '@vueuse/core'

import resetcss from '@/styles/reset/tailwind.css?inline'
import unocss from '@/styles/uno/polaris.css?inline'

import Button from './Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Components/Button/Polaris/Uno',
  component: Button,
  decorators: [
    () => (
      {
        template: '<story/>',
        setup: () => {
          const styles = document.querySelectorAll('style[data-unocss-runtime-layer]')

          for (const style of styles) {
            style.remove()
          }

          // @ts-ignore
          window.__unocss = {
            preflights: [
              {
                getCSS() {
                  return `${resetcss.toString()}${unocss.toString()}`
                },
              },
            ]
          }

          useScriptTag('https://cdn.jsdelivr.net/npm/@unocss/runtime')
        }
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
