import React from 'react';

import styles from '../../timeline.module.css';

interface IDecadeHeader {
    type: string;
}

export class DecadeHeader extends React.Component<IDecadeHeader> {
    render() {
        const { type } = this.props;
        let decadeWords = type;
        if (decadeWords == '0') {
            decadeWords = 'Early Childhood Year';
        }
        if (decadeWords == '10') {
            decadeWords = 'Teen';
        }
        return (
            <>
                <br style={{ clear: 'both' }} />
                <div className={`${styles.decadeHeader}`}>
                    <div>My {decadeWords}s</div>
                </div>
            </>
        );
    }
}
