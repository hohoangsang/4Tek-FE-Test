import { FloatingPortal, arrow, type Placement } from '@floating-ui/react';
import { shift, useFloating } from '@floating-ui/react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import React, { ElementType, useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  renderPopover: React.ReactNode;
  initialOpen?: boolean;
  as?: ElementType;
  placement?: Placement;
}

export default function Popover({
  children,
  className,
  renderPopover,
  initialOpen,
  as: Element = 'div',
  placement = 'bottom-end'
}: Props) {
  const [isOpen, setIsOpen] = useState(initialOpen || false);
  const arrowRef = useRef<HTMLElement>(null);

  const { x, y, refs, strategy } = useFloating({
    open: isOpen,
    placement: placement,
    middleware: [shift(), arrow({ element: arrowRef })]
  });

  const showPopover = () => {
    setIsOpen(true);
  };
  const hidePopover = () => {
    setIsOpen(false);
  };

  return (
    <Element
      className={className}
      onMouseEnter={showPopover}
      onMouseLeave={hidePopover}
      ref={refs.setReference}
    >
      {children}
      <FloatingPortal>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              style={{
                position: strategy,
                top: y ?? 0,
                left: x ?? 0
              }}
              ref={refs.setFloating}
              className='Tooltip relative z-50 cursor-pointer bg-white rounded-[8px] border shadow-sm'
              initial={{ opacity: 0, transform: 'scale(0)' }}
              animate={{ opacity: 1, transform: 'scale(1)' }}
              exit={{ opacity: 0, transform: 'scale(0)' }}
              transition={{ duration: 0.2 }}
            >
              {renderPopover}
            </motion.div>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </Element>
  );
}
