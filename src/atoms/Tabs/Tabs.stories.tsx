import { ComponentMeta, ComponentStory } from '@storybook/react';

import Tabs from './Tabs';

export default {
  title: 'Atoms/Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: ['First Tab', 'Second Tab'].map((string) => (<h1 title={string} key={string}>{string}</h1>))
};

export const WithInactiveField = Template.bind({});
WithInactiveField.args = {
  children: ['First Tab', 'Second Tab'].map((string, index) => (<h1 data-active={!index} title={string} key={string}>{string}</h1>))
};
