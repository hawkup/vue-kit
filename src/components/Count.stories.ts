import type { Meta, StoryObj } from '@storybook/vue3';

import Count from './Count.vue';

const meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Count',
  component: Count,
  render: (args: any) => ({
    components: { Count },
    setup() {
      return { args };
    },
    template: '<count />',
  }),
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Count>;

export default meta;
type Story = StoryObj<typeof meta>;

export const simple: Story = {};
