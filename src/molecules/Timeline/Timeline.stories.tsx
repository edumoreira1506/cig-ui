import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BsFillEggFill } from 'react-icons/bs';
import { AiFillFileImage } from 'react-icons/ai';

import Timeline from './Timeline';

export default {
  title: 'Molecules/Timeline',
  component: Timeline,
} as ComponentMeta<typeof Timeline>;

const Template: ComponentStory<typeof Timeline> = (args) => <Timeline {...args} />;

export const Example = Template.bind({});
Example.args = {
  items: [
    {
      key: 'key-1',
      title: 'Registro do animal',
      date: new Date(),
      description: 'Lorem ipsum dolor set ali baba',
      icon: <BsFillEggFill />
    },
    {
      key: 'key-2',
      title: 'Registro de imagens',
      date: new Date(),
      description: 'Lorem ipsum dolor set ali baba',
      icon: <AiFillFileImage />
    }
  ]
};
