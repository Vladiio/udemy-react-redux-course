import * as React from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { changeAuth } from '../actions';
import CommentBox from '../components/CommentBox';
import CommentList from '../components/CommentList';
import IState from '../types/state';

interface IStateProps {
  auth: boolean;
}

interface IDispatchProps {
  changeAuth: (isLoggedIn: boolean) => void;
}

type Props = IStateProps & IDispatchProps;

class App extends React.Component<Props, {}> {
  public render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route
          path="/"
          exact={true}
          component={CommentList}
        />
      </div>
    );
  }

  private handleSignIn = () => this.props.changeAuth(true);

  private handleSignOut = () =>
    this.props.changeAuth(false);

  private renderButton = (): JSX.Element =>
    this.props.auth ? (
      <button onClick={this.handleSignOut}>Sign out</button>
    ) : (
      <button onClick={this.handleSignIn}>Sign in</button>
    );

  private renderHeader = (): JSX.Element => (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/post">Post a comment</Link>
      </li>
      <li>{this.renderButton()}</li>
    </ul>
  );
}

const mapStateToProps = (state: IState) => ({
  auth: state.auth
});

const mapDispatchToProps = {
  changeAuth
};

export default connect<IStateProps, IDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(App);
