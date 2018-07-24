import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import IState from '../types/state';

interface IStateToProps {
  auth: boolean;
}

type Props = IStateToProps & RouteComponentProps<{}, {}>;

const mapStateToProps = (state: IState) => ({
  auth: state.auth
});

export default (ChildComponent: React.ComponentClass) => {
  class ComposedComponent extends React.Component<
    Props,
    {}
  > {
    public componentDidMount() {
      this.shouldNavigateAway();
    }

    public componentDidUpdate() {
      this.shouldNavigateAway();
    }
    public render() {
      return <ChildComponent {...this.props} />;
    }

    private shouldNavigateAway = () => {
      if (!this.props.auth) {
        this.props.history.push('/');
      }
    };
  }
  return connect(mapStateToProps)(ComposedComponent);
};
