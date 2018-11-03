import React from 'react';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';

class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = { keyword: '' } 
  }

  onChange = (e) => {
    this.setState({ keyword: e.target.value });
  }

  onKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.search(this.state.keyword);
    }
  }

  onClick = () => {
    this.props.search(this.state.keyword);
  }

  render() {
    return (
      <InputGroup>
        <Input type="search" name="search" placeholder="Enter Keyword!"
          onChange={(e) => this.onChange(e)}
          onKeyPress={(e) => this.onKeyPress(e)}>
        </Input>
        <InputGroupAddon addonType="append">
          <Button color="dark" onClick={() => this.onClick()}>検索</Button>
        </InputGroupAddon>
      </InputGroup>
    );
  }
}

export default SearchBox;