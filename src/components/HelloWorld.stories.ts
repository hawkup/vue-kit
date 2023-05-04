import type { Meta, StoryObj } from '@storybook/vue3';

import HelloWorld from './HelloWorld.vue';

const meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'HelloWorld',
  component: HelloWorld,
  render: (args: any) => ({
    components: { HelloWorld },
    setup() {
      return { args };
    },
    template: '<hello-world />',
  }),
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof HelloWorld>;

export default meta;
type Story = StoryObj<typeof meta>;

export const simple: Story = {};
