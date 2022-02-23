import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { RiArrowUpDownFill } from 'react-icons/ri';

import { SquareButton } from './SquareButton';

export default {
  title: 'Atoms/SquareButton',
  component: SquareButton,
} as ComponentMeta<typeof SquareButton>;

const Template: ComponentStory<typeof SquareButton> = (args) => <SquareButton {...args} />;

export const Example = Template.bind({});
Example.args = {
  text: 'Ordenar',
  onClick: action('onClick'),
  icon: <RiArrowUpDownFill />
};
