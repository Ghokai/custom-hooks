import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { useDebounce } from '../src/hooks/useDebounce';


const DebounceDemoComponent = () => {
    const [text, setText] = useState('');
    const debouncedSetText = useDebounce(text => setText(text));

    return (
        <div>
            <input type="text" onChange={e => debouncedSetText(e.target.value)} />
            <br />
            <label>{text}</label>
        </div>
    );
};

const meta: Meta = {
  title: 'Welcome',
  component: DebounceDemoComponent,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => <DebounceDemoComponent {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const UseDebounceComponent = Template.bind({});

UseDebounceComponent.args = {};
