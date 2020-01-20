import * as React from "react";
import { setProgress } from "../redux/actions/progress";
import { connect } from "react-redux";
import { ProgressButtons } from "../components/common/ProgressButtons";
import { Container, Jumbotron } from "reactstrap";

// End of journey page, didn't move to separate file
class AgentSpecificScreen extends React.Component {
  render() {
    return (
      <Container>
        <br />
        <Jumbotron>
          <h2 style={{ textAlign: "center" }}>End</h2>
        </Jumbotron>
        <ProgressButtons
          progress={this.props.progress}
          updateProgress={this.props.setProgress}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  progress: state.progress
});

const mapDispatchToProps = dispatch => ({
  setProgress: progress => dispatch(setProgress(progress))
});

const ConnectedAgentSpecificScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(AgentSpecificScreen);

export { ConnectedAgentSpecificScreen as AgentSpecific };
