import React from 'react'

import styles from './styles.module.scss'

export interface ButtonOptions {
    label: string,
    disabled?: boolean,
    onClick: () => void,
}

const ToolboxButton: React.FC<ButtonOptions> = ({
    label,
    disabled = false,
    onClick
}: ButtonOptions) => {
    return (
        <button
            className={styles.toolButton}
            disabled={disabled}
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default ToolboxButton