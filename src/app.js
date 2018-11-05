// @flow

import * as React from 'react';

import NestedComponent from './nested-component';

type Props = {||};

type State = {|
    message: string
|};

export default class App extends React.Component<Props, State> {
    state = {
        message: 'Edit me'
    };

    handleChangeMessage = (e: SyntheticInputEvent<*>) => {
        this.setState({
            message: e.currentTarget.value
        });
    }

    render() {
        return (
            <div>
                <strong>
                    app
                </strong>
                {this.state.message}
                <div>
                    <strong>
                        nested-component in app
                    </strong>
                    <NestedComponent
                        message={this.state.message}
                        onChangeMessage={this.handleChangeMessage}
                    />
                </div>
            </div>
        );
    }
}
