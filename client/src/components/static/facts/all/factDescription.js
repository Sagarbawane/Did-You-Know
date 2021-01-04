import React from "react";
import { connect } from "react-redux";
import { GrUserManager } from "react-icons/gr";
import { findIndividualFact } from "../../../../selectors/factSelector";
import { StartAddComment } from "../../../../actions/commentAction";
import { startRemoveComment } from "../../../../actions/commentAction";

class FactDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addComment: false,
      comment: "",
    };
  }
  handleAddComment = () => {
    this.setState((prevState) => {
      return {
        addComment: !prevState.addComment,
      };
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: this.props.user.username,
      comment: this.state.comment,
      factId: this.props.fact._id,
    };
    this.props.dispatch(StartAddComment(formData));
  };
  render() {
    return (
      <div className="container">
        {this.props.fact && (
          <div className="container">
            <h3 className="heading ">{this.props.fact.title}</h3>
            <br /> <br /> <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <h5 className="created">
              {" "}
              <i class="fa fa-user fa-lg" aria-hidden="true"></i>Created By-
              {this.props.fact.name}
            </h5>
            <h5 className="created">
              {" "}
              <i class="fa fa-clock-o fa-lg" aria-hidden="true"></i>
              {this.props.fact.createdAt}
            </h5>
            <h4 className="description">{this.props.fact.description}</h4>
            <br />
            <button onClick={this.handleAddComment}>Add Comment</button>
          </div>
        )}
        {this.state.addComment && (
          <div>
            <div className="container">
              &nbsp; &nbsp; &nbsp; &nbsp;
              <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                  <input
                    type="text"
                    name="comment"
                    placeholder="Post your Comment...."
                    value={this.state.comment}
                    onChange={this.handleChange}
                    class="form-control"
                  />
                  <br />
                  <input
                    type="submit"
                    class="btn btn-success "
                    value="Submit"
                  />
                </div>
                <div>
                  <h1>comment </h1>
                  {this.props.fact && (
                    <div>
                      {this.props.comment.map((ele) => {
                        console.log(ele);
                        if (ele.factId == this.props.fact._id) {
                          return (
                            <div className="container">
                              <h5>
                                <GrUserManager style={{ size: "15em" }} />

                                {ele.name}
                              </h5>
                              {ele.comment}
                              &nbsp; &nbsp; &nbsp;
                              {this.props.user._id == ele.userId && (
                                <button
                                  type="button"
                                  class=" btn btn-secondary btn-sm "
                                  onClick={() => {
                                    this.props.dispatch(
                                      startRemoveComment(ele._id)
                                    );
                                  }}
                                >
                                  remove
                                </button>
                              )}
                            </div>
                          );
                        }
                      })}
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state, props) => {
  return {
    comment: state.comment,
    fact: findIndividualFact(state.fact, props.match.params.id),
    user: state.user,
  };
};
export default connect(mapStateToProps)(FactDescription);
