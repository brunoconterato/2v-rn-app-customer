import React, { Component } from 'react';

import Structure from './structure/Structure';
import ProgramContent from './ProgramContent';

export default class ProgramScene extends Component {
    render() {
        return (
            <Structure>
                <ProgramContent />
            </Structure>
        );
    }
}
