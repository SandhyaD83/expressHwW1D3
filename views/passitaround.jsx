import React, { Component } from 'react'

export default class passitaround extends Component {
    render() {
        const index = this.props.index;
        if (!index) {


            return (

                <div>
                    <h3> 99 Bottles of beer on the wall</h3>
                    <a href={`/98`}>
                        take one down, pass it around
                    </a>
                </div>

            )
        }
        else {
            return (<div>
                <h3> {index} Bottles of beer on the wall</h3>
                <a href={`/${index - 1}`}>
                    take one down, pass it around
                </a>
            </div>)
        }





    }
}
