import { ComponentMeta, ComponentStory } from '@storybook/react';

import RoundFileInput from './RoundFileInput';

export default {
  title: 'Atoms/RoundFileInput',
  component: RoundFileInput,
} as ComponentMeta<typeof RoundFileInput>;

const Template: ComponentStory<typeof RoundFileInput> = (args) => <div style={{ width: '150px', height: '150px' }}><RoundFileInput {...args} /></div>;

export const Example = Template.bind({});
Example.args = {
  baseUrl: 'https://cig-maketplace.s3.sa-east-1.amazonaws.com',
  imagePlaceholderPath: 'https://cig-maketplace.s3.sa-east-1.amazonaws.com/breeders/profile/placeholder-user.png',
  uploadMessage: 'Selecionar arquivo'
};
