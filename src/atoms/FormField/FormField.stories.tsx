import { ComponentMeta, ComponentStory } from '@storybook/react';

import FormField from './FormField';

export default {
  title: 'Atoms/FormField',
  component: FormField,
} as ComponentMeta<typeof FormField>;

const Template: ComponentStory<typeof FormField> = (args) => <FormField {...args} />;

export const Example = Template.bind({});
Example.args = {
};
