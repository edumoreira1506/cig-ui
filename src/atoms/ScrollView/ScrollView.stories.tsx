import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ScrollView } from './ScrollView';

export default {
  title: 'Atoms/ScrollView',
  component: ScrollView,
} as ComponentMeta<typeof ScrollView>;

const Template: ComponentStory<typeof ScrollView> = (args) => (
  <div style={{ width: 200 }}>
    <ScrollView {...args} />
  </div>
);

export const Example = Template.bind({});
Example.args = {
  children: (
    <div style={{ display: 'inline-flex' }}>
      <span
        style={{ width: 150, height: 150, backgroundColor: 'red' }}
      />

      <span
        style={{ width: 150, height: 150, backgroundColor: 'yellow' }}
      />

      <span
        style={{ width: 150, height: 150, backgroundColor: 'blue' }}
      />

      <span
        style={{ width: 150, height: 150, backgroundColor: 'purple' }}
      />

      <span
        style={{ width: 150, height: 150, backgroundColor: 'black' }}
      />

      <span
        style={{ width: 150, height: 150, backgroundColor: 'gray' }}
      />
    </div>
  )
};
