import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ConfigModal } from './ConfigModal';

export default {
  title: 'Organisms/ConfigModal',
  component: ConfigModal,
} as ComponentMeta<typeof ConfigModal>;

const Template: ComponentStory<typeof ConfigModal> = (args) => <ConfigModal {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nulla sem, tincidunt ut semper a, facilisis sit amet risus. Proin maximus elementum augue quis ornare. Maecenas pharetra eros nec augue sodales, sit amet cursus ligula rhoncus. Etiam quis urna a sapien viverra rhoncus. Nunc nec rutrum dui, quis lacinia orci. Nullam rutrum mi at velit egestas, at porta massa cursus. Sed posuere ac purus eu semper. Duis ultrices venenatis ultricies. Sed rhoncus magna id risus ultricies fermentum. Aenean sit amet nulla quam. Aenean efficitur et mauris at tristique.',
  title: 'Title example',
  isOpen: true,
  onClose: action('onClose')
};
