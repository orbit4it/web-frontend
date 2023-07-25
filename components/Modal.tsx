'use client';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { ToastContainer } from 'react-toastify';
type ModalProps = {
  children: React.ReactNode;
  onClose?: () => void;
};

const Modal: React.FC<ModalProps> = ({ children, onClose = () => {} }) => {
  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="w-full h-screen fixed top-0 left-0 bg-black/50 flex flex-col items-center justify-center z-50"
          onClick={() => onClose()}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 1 }}
            transition={{
              duration: 0.5,
              type: 'spring',
              bounce: 0.25,
              delay: 0.5,
            }}
            className="rounded-3xl glassmorphism backdrop-blur-md before:rounded-3xl flex flex-col items-center justify-center px-20 py-14 relative overflow-hidden "
          >
            {/* <Image
              src={'/assets/img/BgSpace.png'}
              width={100}
              height={100}
              alt="Space"
              className="absolute w-full h-full top-0 left-0 opacity-30 object-cover"
            /> */}

            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Modal;
