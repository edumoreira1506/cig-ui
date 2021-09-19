import { ComponentMeta, ComponentStory } from '@storybook/react';
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
  children: 'I am the children!',
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
  onClick: console.log
};
