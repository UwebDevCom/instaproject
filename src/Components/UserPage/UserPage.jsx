import React, { Component } from 'react';
import { ContextConsumer } from '../../AppContext/AppContext';

class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const pageStyle = {

        }
        return (
            <ContextConsumer>
                {(context) => (
                    <div>
                        <UesrInfo />
                    </div>
                )}
            </ContextConsumer>
        );
    }
}

class UesrInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const style = {
            Width: 'yellow'
        }
        return (
            <ContextConsumer>
                {(context) => (
                    <div style={style}>
                        <p>ma kore?</p>
                    </div>
                )}
            </ContextConsumer>

        );
    }
}
 


export default UserPage ;