import React from 'react'

import styles from './styles.module.scss'

export interface IncDecOptions {
    value: number;
    setValue: (newValue: number) => void
    incrementLabel?: string;
    decrementLabel?: string;
}

const ToolboxIncDec: React.FC<IncDecOptions> = ({
    value,
    setValue,
    incrementLabel = '>',
    decrementLabel = '<',
}: IncDecOptions) => {
    return (
        <div className={styles.row}>
            <button
                className={styles.toolButton}
                onClick={() => { setValue(value - 1) }}
            >
                {decrementLabel}
            </button>
            <p className={styles.value}>{value}</p>
            <button
                className={styles.toolButton}
                onClick={() => { setValue(value + 1) }}
            >
                {incrementLabel}
            </button>
        </div>
    )
}

export default ToolboxIncDec;