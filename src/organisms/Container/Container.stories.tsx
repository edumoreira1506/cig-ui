import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { AiFillQuestionCircle, AiFillHome, AiFillWechat, AiFillInfoCircle } from 'react-icons/ai';
import { GiChicken, GiShoppingCart } from 'react-icons/gi';
import { IoMdMegaphone } from 'react-icons/io';
import { RiNotification4Fill } from 'react-icons/ri';
import { BiSupport } from 'react-icons/bi';

import Container from './Container';

export default {
  title: 'Organisms/Container',
  component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => <Container {...args} />;

export const Example = Template.bind({});
Example.args = {
  isLoading: true,
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nulla sem, tincidunt ut semper a, facilisis sit amet risus. Proin maximus elementum augue quis ornare. Maecenas pharetra eros nec augue sodales, sit amet cursus ligula rhoncus. Etiam quis urna a sapien viverra rhoncus. Nunc nec rutrum dui, quis lacinia orci. Nullam rutrum mi at velit egestas, at porta massa cursus. Sed posuere ac purus eu semper. Duis ultrices venenatis ultricies. Sed rhoncus magna id risus ultricies fermentum. Aenean sit amet nulla quam. Aenean efficitur et mauris at tristique.',
  title: 'example Title',
  user: {
    name: 'Rodolfo',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
  },
  items: [
    {
      icon: <AiFillHome />,
      title: 'Meu criatório'
    },
    {
      icon: <GiChicken />,
      title: 'Minhas aves'
    },
    {
      icon: <IoMdMegaphone />,
      title: 'Meus anúncios'
    },
    {
      icon: <AiFillWechat />,
      title: 'Mensagem'
    },
    {
      icon: <RiNotification4Fill />,
      title: 'Notificação'
    },
    {
      icon: <GiShoppingCart />,
      title: 'Mercado'
    },
    {
      icon: <AiFillInfoCircle />,
      title: 'Informações'
    },
    {
      icon: <AiFillQuestionCircle />,
      title: 'Dúvidas'
    },
    {
      icon: <BiSupport />,
      title: 'Suporte'
    }
  ],
  onClick: action('onClick'),
  onMenuClick: action('onMenuClick'),
  onShortcutClick: action('onShortcutClick'),
  onSearch: action('onSearch'),
  onClickTitle: action('onClickTitle'),
  shortcuts: ['Sair'] 
};
