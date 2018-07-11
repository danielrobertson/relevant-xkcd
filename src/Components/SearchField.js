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
    // TODO autofill here with common search phrases as user types
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.searchXkcds(this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ marginBottom: "2rem" }}>
        <div className="row">
          <div className="col-lg-6">
            <div className="input-group input-group-lg">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                onChange={this.handleChange}
              />
              <div className="input-group-append">
                <button className="btn btn-success" type="submit">
                  Go
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchField;
