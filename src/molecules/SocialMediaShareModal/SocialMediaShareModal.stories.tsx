import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { SocialMediaShareModal } from './SocialMediaShareModal';

export default {
  title: 'Molecules/SocialMediaShareModal',
  component: SocialMediaShareModal,
} as ComponentMeta<typeof SocialMediaShareModal>;

const Template: ComponentStory<typeof SocialMediaShareModal> = (args) => <SocialMediaShareModal {...args} />;

export const Example = Template.bind({});
Example.args = {
  isOpen: true,
  onClose: action('onClose'),
  url: 'https://cig-marketplace-ptg9c.ondigitalocean.app/'
};
