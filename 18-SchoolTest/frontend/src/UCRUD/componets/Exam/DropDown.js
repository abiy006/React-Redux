import React from "react";

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            selectedOption: ''
        }
        this.renderOptions = this.renderOptions.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.toggleOpen = this.toggleOpen.bind(this);
    }

    toggleOpen() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleChange(e) {
        this.setState({
            selectedOption: e.target.value
        });
    }

    renderOptions() {
        const options = this.props.options.map( (option) => {
            return (
                <option key={option.value} value={option.value}>
                    {option.title}
                </option>
            );
        });
        return options;
    }

    render() {
        const display = this.state.isOpen? 'block' : 'none';
        return (
            <div className="dropdown">
                <div className="trigger" onClick={this.toggleOpen}>
                    {this.state.selectedOption || this.props.title}
                </div>
                <div className="options-list" style={{display: display}}>
                    <select
                        value={this.state.selectedOption}
                        onChange={this.handleChange}>
                        {this.renderOptions()}
                    </select>
                </div>
            </div>
        );
    }
};

export default Dropdown;
