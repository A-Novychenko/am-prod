'use client';

import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import { TfiClose } from 'react-icons/tfi';

import { ModalProps } from './types';

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
          <Dialog.Panel className="relative mx-auto sm:my-10">
            <div className="rounded-lg bg-white p-7 py-10 shadow-xl transition-all sm:w-full md:p-12">
              <button onClick={onClose} className="absolute right-4 top-4">
                <TfiClose />
              </button>

              <div className="max-h-[80vh] overflow-hidden overflow-y-auto p-7 md:p-12">
                {children}
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
