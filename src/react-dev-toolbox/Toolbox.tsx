
import React from 'react'
import Draggable from 'react-draggable';

import styles from './styles.module.scss'

interface IReactDevToolboxProps {
    title?: string;
    children?: React.ReactNode;
}

const ReactDevToolbox: React.FC<IReactDevToolboxProps> = ({
    title = "Development",
    children,
}: IReactDevToolboxProps) => {

    if (process.env.NODE_ENV !== 'development') {
        return (<></>)
    }

    return (
        <Draggable
            handle='header'
        >
            <div
                className={styles.toolbox}
            >
                <header>
                    <h1>{title} Toolbox</h1>
                </header>

                <div>
                    {
                        !children ?
                            <p className={styles.noItems}>No tools available</p> :
                            children
                    }
                </div>
            </div>
        </Draggable>
    )
}

export default ReactDevToolbox;