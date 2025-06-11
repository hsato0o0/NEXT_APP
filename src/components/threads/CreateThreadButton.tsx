'use client';

import { createPortal } from 'react-dom';
import CreateThreadModal from './CreateThreadModal';
import { useState } from 'react';

const Modal = ({ children }: { children: React.ReactNode }) => {
  const target = document.querySelector('.modalField');
  return target && createPortal(children, target);
};

export default function CreateThreaButton() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        style={{
          border: 'none',
          borderRadius: '12px',
          padding: '8px 16px',
          background: '#3B82F6',
          color: 'white',
        }}
        onClick={() => setModalOpen((prev) => !prev)}
      >
        ＋新規スレッド
      </button>
      {modalOpen && (
        <Modal>
          <CreateThreadModal handleCloseModal={() => setModalOpen(false)} />
        </Modal>
      )}
    </>
  );
}
