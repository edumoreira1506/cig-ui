import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BsFillEggFill } from 'react-icons/bs';

import Card from './Card';

export default {
  title: 'Molecules/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <div style={{ width: '450px' }}>
    <Card {...args} />
  </div>
);

export const Complete = Template.bind({});
Complete.args = {
  date: new Date(),
  description: 'Primeiro registro do animal na plataforma',
  icon: <BsFillEggFill />,
  onClick: console.log,
  ctaText: 'Mais informações >'
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  date: new Date(),
  description: 'Primeiro registro do animal na plataforma',
  icon: <BsFillEggFill />
};

export const WithCta = Template.bind({});
WithCta.args = {
  date: new Date(),
  description: 'Primeiro registro do animal na plataforma',
  onClick: console.log,
  ctaText: 'Mais informações >'
};
