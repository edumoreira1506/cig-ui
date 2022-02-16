import { ComponentMeta, ComponentStory } from '@storybook/react';

import { PoultryCard } from './PoultryCard';

export default {
  title: 'Molecules/PoultryCard',
  component: PoultryCard,
} as ComponentMeta<typeof PoultryCard>;

const Template: ComponentStory<typeof PoultryCard> = (args) => (
  <div style={{ width: '100%' }}>
    <PoultryCard {...args} />
  </div>
);

export const Example = Template.bind({});
Example.args = {
  title: 'Claudinha',
  price: 15000,
  subtitle: '10 de R$159,90',
  description: 'lorem ipsum dolor sit amet consectetur adipiscing elit...',
  subtitleColor: 'red'
};
