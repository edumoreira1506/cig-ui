import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AiTwotoneDelete } from 'react-icons/ai';

import Round from './Round';

export default {
  title: 'Atoms/Round',
  component: Round,
} as ComponentMeta<typeof Round>;

const Template: ComponentStory<typeof Round> = (args) => (
  <div style={{ width: '150px', height: '150px' }}>
    <Round {...args} />
  </div>
);

export const Example = Template.bind({});
Example.args = {
  children: <AiTwotoneDelete />,
  backgroundColor: '#ffffff'
};
