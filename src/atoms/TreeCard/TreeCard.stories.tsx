import { poultryFactory } from '@cig-platform/factories';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TreeCard } from './TreeCard';

export default {
  title: 'Atoms/TreeCard',
  component: TreeCard,
} as ComponentMeta<typeof TreeCard>;

const Template: ComponentStory<typeof TreeCard> = (args) => <TreeCard {...args} />;

export const Example = Template.bind({});
Example.args = {
  ...poultryFactory()
};
