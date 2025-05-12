'use client';

import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { TfiClose } from 'react-icons/tfi';

export interface ModalProps {
  children?: React.ReactNode;
  show: boolean;
  onClose: () => void;
}

export const Modal = ({ show, children, onClose }: ModalProps) => {
  return (
    <Transition.Root as={Fragment} show={show}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 flex items-center"
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-slate-500/75  transition-opacity" />
        </Transition.Child>
        <div className="container">
          <Dialog.Panel
            className="relative mx-auto max-h-[90vh] overflow-hidden overflow-y-auto rounded-lg
           bg-white p-7 pt-10 shadow-xl transition-all sm:my-10 sm:w-full md:w-fit md:p-12"
          >
            <button onClick={onClose} className="absolute right-4 top-4">
              <TfiClose />
            </button>
            {children}
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
