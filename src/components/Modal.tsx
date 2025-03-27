import * as Dialog from '@radix-ui/react-dialog';
import { FaCog } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import { PropsWithChildren } from 'react';

interface ModalProps extends PropsWithChildren {}

export default function Modal({ children }: ModalProps) {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button className="btn-settings">
                    <FaCog />
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="dialog-overlay" />
                <Dialog.Content className="dialog-content">
                    <Dialog.Title className="dialog-title">
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}
                        >
                            <span>Settings</span>
                            <Dialog.Close asChild>
                                <FaX
                                    style={{
                                        fontSize: '0.7rem',
                                        cursor: 'pointer',
                                        color: 'rgba(0, 0, 0, 0.7)',
                                    }}
                                />
                            </Dialog.Close>
                        </div>
                    </Dialog.Title>
                    <Dialog.Description className="dialog-description">
                        {children}
                    </Dialog.Description>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
