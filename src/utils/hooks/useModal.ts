import { useCallback, useState } from 'react';

export function useModal(isOpenDefault = false) {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen(ps => !ps), []);

  return { isOpen, open, close, toggle };
}