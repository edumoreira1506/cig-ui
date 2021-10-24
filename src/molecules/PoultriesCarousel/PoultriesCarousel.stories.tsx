import { ComponentMeta, ComponentStory } from '@storybook/react';

import PoultriesCarousel from './PoultriesCarousel';

export default {
  title: 'Molecules/PoultriesCarousel',
  component: PoultriesCarousel,
} as ComponentMeta<typeof PoultriesCarousel>;

const Template: ComponentStory<typeof PoultriesCarousel> = (args) => (
  <div style={{ width: '100%' }}>
    <PoultriesCarousel {...args} />
  </div>
);

export const Example = Template.bind({});
Example.args = {
  poultries: Array(10).fill({
    mainImage: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
    name: ''
  }),
  onRemoveImage: console.log 
};
