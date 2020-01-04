import React from 'react';

import styles from '../../timeline.module.css';

interface IDecadeHeader {
    type: string;
}

export class DecadeHeader extends React.Component<IDecadeHeader> {
    render() {
        const { type } = this.props;
        return (
            <>
                <br style={{ clear: 'both' }} />
                <div className={`${styles.decadeHeader}`}>
                    <div>My {type}s</div>
                </div>
            </>
        );
    }
}
