import { ComponentMeta, ComponentStory } from '@storybook/react';

import Loading from './Loading';

export default {
  title: 'Atoms/Loading',
  component: Loading,
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = (args) => <div style={{ width: '150px', height: '150px' }}><Loading {...args} /></div>;

export const Example = Template.bind({});
Example.args = {
  color: 'orange'
};
