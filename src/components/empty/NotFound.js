import React, { Component } from 'react'
import Navi from '../navi/Navi'

export default class NotFound extends Component {
    render() {
        return (
            <div>
                <Navi/>
               <h1>Sayfa Bulunamadı!</h1>
            </div>
        )
    }
}
