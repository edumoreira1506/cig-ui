import { ComponentMeta, ComponentStory } from '@storybook/react';

import Modal from './Modal';

export default {
  title: 'Atoms/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Left = Template.bind({});
Left.args = {
  children: <h1>Modal content</h1>,
  isOpen: true,
};

export const Bottom = Template.bind({});
Bottom.args = {
  children: <h1>Modal content</h1>,
  isOpen: true,
  animation: 'bottom'
};

export const WithActions = Template.bind({});
WithActions.args = {
  children: <h1>Modal content</h1>,
  isOpen: true,
  displayActions: true
};
