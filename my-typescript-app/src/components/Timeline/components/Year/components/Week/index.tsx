import React from 'react';

import styles from '../../../../timeline.module.css';

interface IWeek {
    message?: string;
}

export class Week extends React.Component<IWeek> {
    render() {
        const { message } = this.props;
        return (
            <div className={`${styles.week} ${styles.timelineElement}`}>
                <div>{message}</div>
            </div>
        );
    }
}
