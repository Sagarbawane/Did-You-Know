import React from "react";
import { connect } from "react-redux";

import { startRemoveFact } from "../../../../actions/factAction";

class All extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleView = (id) => {
    console.log(id);
    this.props.history.push(`/technical/${id}`);
  };
  handleAddFact = () => {
    this.props.history.push(`/add`);
  };

  renderFact = () => {
    console.log(this.props.user);

    const fact = this.props.fact.map((ele) => {
      console.log(ele);
      return (
        <div class="row" style={{ width: 30 + "rem" }}>
          <div class="col-auto  mb-4 d-flex align-items-stretch">
            <div class="card mt-4 mx-auto " style={{ width: 32 + "rem" }}>
              <div class="embed-responsive embed-responsive-16by9">
                <img
                  src={ele.imageLink}
                  class="card-img-top embed-responsive-item"
                  alt="..."
                />
              </div>
              <div class="card-body">
                <div className="card-footer">
                  <div class="btn-wrapper text-center d-flex justify-content-between">
                    <button
                      onClick={() => {
                        this.handleView(ele._id);
                      }}
                      type="button"
                      class="btn btn-secondary btn-sm text-white d-flex align-items-center"
                    >
                      Read More
                    </button>
                    {this.props.user._id == ele.userId && (
                      <button
                        type="button"
                        class="btn btn-warning btn-sm"
                        onClick={() => {
                          this.props.dispatch(startRemoveFact(ele._id));
                        }}
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </div>
                &nbsp; &nbsp; &nbsp;
                <h5 class="card-title">{ele.title}</h5>
                <p class="card-text">
                  {" "}
                  <i class="fa fa-clock-o fa-lg" aria-hidden="true"></i>{" "}
                  {ele.createdAt}
                </p>
                <h6 class="card-subtitle mb-2 text-muted">
                  <i class="fa fa-user fa-lg" aria-hidden="true"></i> Created By{" "}
                  {ele.name}
                </h6>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return <div className="row">{fact}</div>;
  };

  render() {
    return (
      <div>
        <div className="container-2">
          <h1 className="des"> ALL </h1>
        </div>

        <div>{this.renderFact()}</div>

        <div className="d-flex justify-content-center">
          <div className="AddBtn">
            <button
              type="button"
              class="btn btn-danger btn-lg "
              onClick={this.handleAddFact}
            >
              ADD BLOG
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    fact: state.fact,
    user: state.user,
  };
};

export default connect(mapStateToProps)(All);
