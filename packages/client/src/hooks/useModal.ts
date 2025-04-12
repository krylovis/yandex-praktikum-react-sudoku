import { useEffect, useState } from 'react';

function useModal(overlayClass: string) {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen((prev) => !prev);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    const handleOverlayClick = (evt: MouseEvent) => {
      const target = evt.target as HTMLElement;
      if (target.classList.contains(overlayClass)) {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleOverlayClick);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleOverlayClick);
    };
  }, [overlayClass]);
  return { isModalOpen, toggleModal, closeModal };
}

export default useModal;
