import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { useThrottle } from '../src/hooks/useThrottle';


const ThrottleDemoComponent = () => {
    const [text, setText] = useState('');
    const throttledSetText = useThrottle(text => setText(text));

    return (
        <div>
            <input type="text" onChange={e => throttledSetText(e.target.value)} />
            <br />
            <label>{text}</label>
        </div>
    );
};

const meta: Meta = {
  title: 'Welcome',
  component: ThrottleDemoComponent,
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

const Template: Story = args => <ThrottleDemoComponent {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const UseThrottleComponent = Template.bind({});

UseThrottleComponent.args = {};
