import * as React from 'react';
import { connect } from 'react-redux';
import IState from '../types/state';

interface ICommentListProps {
  comments: string[];
}

class CommentList extends React.Component<
  ICommentListProps,
  {}
> {
  public render() {
    return (
      <div>
        <h2>Comment list</h2>
        <ul>{this.renderComments()}</ul>
      </div>
    );
  }

  private renderComments = () =>
    this.props.comments.map(comment => (
      <li key={comment}>{comment}</li>
    ));
}

const mapStateToProps = ({ comments }: IState) => ({
  comments
});

export default connect<{}, {}>(mapStateToProps)(
  CommentList
);
