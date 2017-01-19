/**
 * Created by xudao on 16/12/26.
 */
import React from 'react';
require('../less/index.less');

export default class Component extends React.Component {
    render() {
        return (
            <div className="container">
                {
                    [0,1,2,3,4,5,6,7,8,9].map(function(index){
                        return(<div className="block" key={'div'+index}></div>)
                    })
                }
            </div>
        )
    }
}

