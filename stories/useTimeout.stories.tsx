import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { useTimeout } from '../src/hooks/useTimeout';


const TimeoutDemoComponent = () => {
    const [text, setText] = useState('');
    const {cbWithTimeout, cancelTimeout} = useTimeout((text) => console.log(text));

    return (
        <div>
            <input type="text" onChange={e => setText(e.target.value)} />
            <br />
            <label>{text}</label>
            <br />
            <button onClick={() => cbWithTimeout(text)}>send text</button>
            <button onClick={cancelTimeout}>cancel send</button>

        </div>
    );
};

const meta: Meta = {
  title: 'Welcome',
  component: TimeoutDemoComponent,
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

const Template: Story = args => <TimeoutDemoComponent {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const UseTimeoutComponent = Template.bind({});

UseTimeoutComponent.args = {};
