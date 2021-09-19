import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AiFillQuestionCircle, AiFillHome, AiFillWechat, AiFillInfoCircle } from 'react-icons/ai';
import { GiChicken, GiShoppingCart } from 'react-icons/gi';
import { IoMdMegaphone } from 'react-icons/io';
import { RiNotification4Fill } from 'react-icons/ri';
import { BiSupport } from 'react-icons/bi';

import Sidebar from './Sidebar';

export default {
  title: 'Molecules/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Example = Template.bind({});
Example.args = {
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
  onClick: console.log,
  isOpen: true,
};
