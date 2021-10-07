import { ComponentMeta, ComponentStory } from '@storybook/react';

import SquareFileInput from './SquareFileInput';

export default {
  title: 'Atoms/SquareFileInput',
  component: SquareFileInput,
} as ComponentMeta<typeof SquareFileInput>;

const Template: ComponentStory<typeof SquareFileInput> = (args) => <div style={{ width: '150px', height: '150px' }}><SquareFileInput {...args} /></div>;

export const Example = Template.bind({});
Example.args = {
  uploadMessage: 'Subir arquivos'
};
