import { Component } from 'react';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.handleCheckedStateOnChange = this.handleCheckedStateOnChange.bind(this);
  }

  handleCheckedStateOnChange() {}

  render() {
    return (
      <input 
        type="checkbox" 
        name={ this.props.fieldName } 
        checked={ this.props.isChecked }
        onChange={ this.handleCheckedStateOnChange }
      />
    );
  }
}

export default Checkbox;