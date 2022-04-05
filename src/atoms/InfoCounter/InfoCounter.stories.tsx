import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BsFillEggFill } from 'react-icons/bs';

import { InfoCounter } from './InfoCounter';

export default {
  title: 'Atoms/InfoCounter',
  component: InfoCounter,
} as ComponentMeta<typeof InfoCounter>;

const Template: ComponentStory<typeof InfoCounter> = (args) => (
  <div style={{ width: '100px' }}>
    <InfoCounter {...args} />
  </div>
);

export const Example = Template.bind({});
Example.args = {
  icon: <BsFillEggFill />,
  amount: 35,
  description: 'Curtidas'
};
