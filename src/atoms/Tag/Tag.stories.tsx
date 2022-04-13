import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Tag } from './Tag';

export default {
  title: 'Atoms/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Example = Template.bind({});
Example.args = {
  onRemove: action('onRemove'),
  children: 'Nome da tag'
};
