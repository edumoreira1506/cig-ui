import { ComponentMeta, ComponentStory } from '@storybook/react';

import Label from './Label';

export default {
  title: 'Organisms/Label',
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Example = Template.bind({});
Example.args = {
  text: 'label text'
};
