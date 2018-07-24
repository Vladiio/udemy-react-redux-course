import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from '../actions';
import requireAuth from './requireAuth';

interface IDispatchToProps {
  saveComment: (comment: string) => void;
  fetchComments: () => void;
}

type CommentBoxProps = IDispatchToProps;

export class CommentBox extends React.Component<
  CommentBoxProps,
  {}
> {
  public state = {
    comment: ''
  };

  public handleCommentChange = (event: React.ChangeEvent) =>
    this.setState({
      comment: (event.target as HTMLInputElement).value
    });

  public handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  };

  public render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <h4>Add comment</h4>
          <textarea
            value={this.state.comment}
            onChange={this.handleCommentChange}
          />
          <div>
            <button>Submit comment</button>
          </div>
        </form>
        <button
          className="fetch-comments"
          onClick={this.props.fetchComments}
        >
          Fetch comments
        </button>
      </div>
    );
  }
}

export default compose(
  connect<{}, IDispatchToProps>(
    null,
    actions
  ),
  requireAuth
)(CommentBox);
