import React from 'react';
import { Meta, Story } from '@storybook/react';
import { useMouseHover } from '../src/hooks/useMouseHover';


const MouseHoverDemoComponent = () => {
    const { elementRef, isMouseOver } = useMouseHover<HTMLDivElement>();

    return (
        <div ref={elementRef} style={{height: '300px', width: '400px', backgroundColor: '#345623', border: '1px solid'}}>
          {isMouseOver ? 'mouse is hovering' : 'mouse is not hovering'}
        </div>
    );
};

const meta: Meta = {
  title: 'Welcome',
  component: MouseHoverDemoComponent,
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

const Template: Story = args => <MouseHoverDemoComponent {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const UseMouseHoverComponent = Template.bind({});

UseMouseHoverComponent.args = {};
