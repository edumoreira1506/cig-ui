import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BsWhatsapp } from 'react-icons/bs';

import SquareLink from './SquareLink';

export default {
  title: 'Atoms/SquareLink',
  component: SquareLink,
} as ComponentMeta<typeof SquareLink>;

const Template: ComponentStory<typeof SquareLink> = (args) => <SquareLink {...args} />;

export const Example = Template.bind({});
Example.args = {
  href: 'http://facebook.com',
  children: <BsWhatsapp />
};
