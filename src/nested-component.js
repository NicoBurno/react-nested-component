// @flow

import * as React from 'react';

type Props = {|
    message: string,
    onChangeMessage: (e: SyntheticInputEvent<*>) => any
|};

type State = {|
    showNested: boolean
|}

export default class NestedComponent extends React.Component<Props, State> {
    state = {
        showNested: false
    }

    handleChangeShowNested = (e: SyntheticInputEvent<HTMLInputElement>) => {
        this.setState({
            showNested: e.currentTarget.checked
        });
    }

    render() {
        return (
            <div
                style={{
                    border: '1px solid rgba(0,240,50,.5)',
                    padding: 10,
                    display: 'block'
                }}
            >
                <strong>
                    nested component
                </strong>
                <br />
                <input
                    value={this.props.message}
                    onChange={this.props.onChangeMessage}
                />
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={this.state.showNested}
                            onChange={this.handleChangeShowNested}
                        />
                        nest another one (click me)
                    </label>
                    {this.state.showNested && (
                        <NestedComponent
                            message={this.props.message}
                            onChangeMessage={this.props.onChangeMessage}
                        />
                    )}
                </div>
            </div>
        );
    }
}
