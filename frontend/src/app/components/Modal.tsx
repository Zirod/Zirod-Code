'use client';

import Styles from '@/styles/components/Modal.module.scss';
import { useState, } from 'react';
import { Button } from './Button';

interface ModalProps {
    btn_text: string;
    children: React.ReactNode;
    key: number | string | '';
}

export function Modal({ btn_text, children, key }: ModalProps) {

    const [isOpen, setIsOpen] = useState(false);


    const closeModal = () => {
        setIsOpen(false);
    };

    const openModal = () => {
        setIsOpen(true);
    };

    return (
        <>
            <Button variant="primary" onClick={openModal} key={key}> {btn_text} </Button>

            <div className={`${Styles.modal} ${isOpen ? Styles.active : ''}`}>
                <div className={Styles.modal_overlay} onClick={closeModal}></div>

                <div className={Styles.modal_content}>
                    <button className={Styles.modal_close} onClick={closeModal}>&times;</button>
                    {children}
                </div>
            </div>
        </>
    );
}