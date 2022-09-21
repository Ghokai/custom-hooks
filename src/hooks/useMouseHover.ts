import { useRef, useState, useEffect } from 'react';

export const useMouseHover = <T extends HTMLElement>() => {
  const elementRef = useRef<T>(null);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    const eventHandler = (event: MouseEvent) => {
      if (!elementRef.current) {
        return;
      }
      const element = elementRef.current.getBoundingClientRect();

      const isHover = checkMouseHover({
        mouseX: event.x,
        mouseY: event.y,
        left: element.left,
        right: element.right,
        bottom: element.bottom,
        top: element.top,
      });
      if (isMouseOver !== isHover) {
        setIsMouseOver(isHover);
      }
    };
    document.addEventListener('mousemove', eventHandler);
    return () => {
      document.removeEventListener('mousemove', eventHandler);
    };
  }, [isMouseOver, setIsMouseOver]);

  return { elementRef, isMouseOver };
};

interface checkMouseHoverParams {
  mouseX: number;
  mouseY: number;
  left: number;
  right: number;
  bottom: number;
  top: number;
}

const checkMouseHover = ({
  mouseX,
  mouseY,
  left,
  right,
  bottom,
  top,
}: checkMouseHoverParams) => {
  if (mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom) {
    return true;
  }
  return false;
};
