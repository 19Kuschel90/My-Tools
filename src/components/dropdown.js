import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class MyDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => window.Dropdown = 0}>pro Woche</DropdownItem>
          <DropdownItem onClick={() => window.Dropdown = 1}>pro Monat</DropdownItem>
          <DropdownItem onClick={() => window.Dropdown = 2}>pro Jahr</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}