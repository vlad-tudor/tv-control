import * as React from "react";
import { Occupancy } from "../components/Occupancy/Occupancy";
import { setOccupancy, getOccupancy } from "../redux/actions";
import { setProgress } from "../redux/actions/progress";
import { connect } from "react-redux";

class OccupancyScreen extends React.Component {
  componentDidMount() {
    getOccupancy();
  }

  navigateNext() {}
  render() {
    return (
      <Occupancy
        occupancy={this.props.occupancy}
        onUpdate={this.props.setOccupancy}
        progress={this.props.progress}
        updateProgress={this.props.setProgress}
      />
    );
  }
}

const mapStateToProps = state => ({
  occupancy: state.occupancy,
  progress: state.progress
});

const mapDispatchToProps = dispatch => ({
  getOccupancy: dispatch(getOccupancy()),
  setOccupancy: occupancy => dispatch(setOccupancy(occupancy)),
  setProgress: progress => dispatch(setProgress(progress))
});

const ConnectedOccupancyScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(OccupancyScreen);

export { ConnectedOccupancyScreen as Occupancy };
