import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import DealInfo from './DealInfo';

export default {
  title: 'Molecules/DealInfo',
  component: DealInfo,
} as ComponentMeta<typeof DealInfo>;

const Template: ComponentStory<typeof DealInfo> = (args) => (
  <div style={{ width: '100%' }}>
    <DealInfo {...args} />
  </div>
);

export const InProgress = Template.bind({});
InProgress.args = {
  date: new Date(),
  status: 'IN_PROGRESS',
  poultry: {
    name: 'Claudinha'
  },
  advertising: {
    id: 'id',
    price: 10000
  },
  breeder: {
    name: 'Criatório do Toninho'
  },
  image: 'https://farmhousepoultry.ca/wp-content/uploads/2016/03/Product_ImageComingSoon_592x592-380x400.jpg',
  onViewDeal: action('onViewDeal')
};

export const Finished = Template.bind({});
Finished.args = {
  date: new Date(),
  status: 'FINISHED',
  poultry: {
    name: 'Claudinha'
  },
  advertising: {
    id: 'id',
    price: 10000
  },
  breeder: {
    name: 'Criatório do Toninho'
  },
  image: 'https://farmhousepoultry.ca/wp-content/uploads/2016/03/Product_ImageComingSoon_592x592-380x400.jpg',
  onViewDeal: action('onViewDeal')
};

export const Cancelled = Template.bind({});
Cancelled.args = {
  date: new Date(),
  status: 'CANCELLED',
  poultry: {
    name: 'Claudinha'
  },
  advertising: {
    id: 'id',
    price: 10000
  },
  breeder: {
    name: 'Criatório do Toninho'
  },
  image: 'https://farmhousepoultry.ca/wp-content/uploads/2016/03/Product_ImageComingSoon_592x592-380x400.jpg',
  onViewDeal: action('onViewDeal')
};
