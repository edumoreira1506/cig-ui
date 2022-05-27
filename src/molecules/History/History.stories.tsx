import { DealEventValueEnum } from '@cig-platform/enums';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { History } from './History';

export default {
  title: 'Molecules/History',
  component: History,
} as ComponentMeta<typeof History>;

const Template: ComponentStory<typeof History> = (args) => <History {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  events: []
};

export const Placed = Template.bind({});
Placed.args = {
  events: [
    {
      value: DealEventValueEnum.placed,
      metadata: {
        value: 15000,
        description: 'Vou chamá-lo no whats app para conversarmos em relação ao envio'
      },
      createdAt: new Date(),
    }
  ]
};

export const Confirmed = Template.bind({});
Confirmed.args = {
  events: [
    {
      value: DealEventValueEnum.placed,
      metadata: {
        value: 15000,
        description: 'Vou chamá-lo no whats app para conversarmos em relação ao envio'
      },
      createdAt: new Date(),
    },
    {
      value: DealEventValueEnum.confirmed,
      createdAt: new Date(),
    }
  ]
};

export const Finished = Template.bind({});
Finished.args = {
  events: [
    {
      value: DealEventValueEnum.placed,
      metadata: {
        value: 15000,
        description: 'Vou chamá-lo no whats app para conversarmos em relação ao envio'
      },
      createdAt: new Date(),
    },
    {
      value: DealEventValueEnum.confirmed,
      createdAt: new Date(),
    },
    {
      value: DealEventValueEnum.received,
      createdAt: new Date(),
    }
  ]
};

export const Cancelled = Template.bind({});
Cancelled.args = {
  events: [
    {
      value: DealEventValueEnum.placed,
      metadata: {
        value: 15000,
        description: 'Vou chamá-lo no whats app para conversarmos em relação ao envio'
      },
      createdAt: new Date(),
    },
    {
      value: DealEventValueEnum.confirmed,
      createdAt: new Date(),
    },
    {
      value: DealEventValueEnum.cancelled,
      createdAt: new Date(),
      metadata: {
        reason: 'Ave morreu'
      }
    }
  ]
};
