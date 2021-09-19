import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AiFillHome } from 'react-icons/ai';

import LinkButton from './LinkButton';

export default {
  title: 'Atoms/LinkButton',
  component: LinkButton,
} as ComponentMeta<typeof LinkButton>;

const Template: ComponentStory<typeof LinkButton> = (args) => <div style={{ width: '150px' }}><LinkButton {...args} /></div>;

export const Example = Template.bind({});
Example.args = {
  title: 'Meu criatório',
  icon: <AiFillHome />
};
