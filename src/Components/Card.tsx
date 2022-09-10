import React, { FC } from 'react';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary',

}

interface CardProps {
    width?: string
    height?: string
    children: React.ReactNode
    variant: CardVariant
    onClick: () => void
}

const Card: FC<CardProps> = ({ width, height, children, variant, onClick }) => {
    return (
        <div style={{ width, height, border: variant === CardVariant.outlined ? '1px solid gray' : 'none', background: variant === CardVariant.primary ? 'lightgray' : '' }} onClick={onClick}>
            {children}
        </div>
    );
};

export default Card;