/**
 * Created by xudao on 16/12/26.
 */
import React, {PropTypes} from 'react';

export default class App extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>

        )
    }
}

