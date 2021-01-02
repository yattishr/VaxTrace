import React, { Component } from 'react'
import { JSignOut } from './auth';

export default class Navigator extends Component {
    render() {
        return (
            <div>
                { user && <JSignOut/> } 
            </div>
        )
    }
}
