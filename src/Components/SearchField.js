import React from "react";

class SearchField extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    // TODO autofill here with common search phrases
  }

  handleSubmit(event) {
    console.log("A search was submitted: " + this.state.value);
    event.preventDefault();
    this.props.searchXkcds(this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <div className="input-group input-group-lg">
              <input
                type="text"
                className="form-control"
                placeholder="Search for..."
                onChange={this.handleChange}
              />
              <span className="input-group-btn">
                <button className="btn btn-primary" type="submit">
                  <span className="glyphicon glyphicon-search" />
                </button>
              </span>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchField;
