import React, { Component } from 'react';

import Structure from './structure/Structure';
import MapContent from './MapContent';

export default class MoodSelectionScene extends Component {
    render() {
        return (
            <Structure>
                <MapContent />
            </Structure>
        );
    }
}
