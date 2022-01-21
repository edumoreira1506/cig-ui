import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BsWhatsapp } from 'react-icons/bs';

import LinksBar from './LinksBar';

export default {
  title: 'Molecules/LinksBar',
  component: LinksBar,
} as ComponentMeta<typeof LinksBar>;

const Template: ComponentStory<typeof LinksBar> = (args) => <LinksBar {...args} />;

export const Example = Template.bind({});
Example.args = {
  items: [
    {
      href: 'http://facebook.com',
      children: <BsWhatsapp />
    }
  ]
};
