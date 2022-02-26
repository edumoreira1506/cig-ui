import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Header from './Header';

export default {
  title: 'Molecules/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Example = Template.bind({});
Example.args = {
  user: {
    name: 'Rodolfo',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
  },
  title: 'CIG',
  shortcuts: ['Sair'],
  onClickShortcut: action('onClickShortcut'),
  onSearch: action('onSearch'),
  onToggleMenu: action('onToggleMenu'),
  onClickTitle: action('onClickTitle'),
};
