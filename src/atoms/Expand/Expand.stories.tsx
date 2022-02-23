import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Expand } from './Expand';

export default {
  title: 'Atoms/Expand',
  component: Expand,
} as ComponentMeta<typeof Expand>;

const Template: ComponentStory<typeof Expand> = (args) => (
  <div style={{ width: '300px' }}>
    <Expand {...args} />
  </div>
);

export const Example = Template.bind({});
Example.args = {
  children: (
    <ul>
      <li>Claudio</li>
      <li>Pedro</li>
      <li>Marcelo</li>
    </ul>
  ),
  title: 'Título Teste'
};
