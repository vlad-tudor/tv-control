import * as React from "react";
import { PropertyDetails } from "../components/PropertyDetails/PropertyDetails";
import { setProperty, getProperty } from "../redux/actions";
import { setProgress, getProgress } from "../redux/actions/progress";
import { connect } from "react-redux";

class PropertyDetailsScreen extends React.Component {
  componentDidCatch() {
    getProperty();
  }

  render() {
    return (
      <PropertyDetails
        property={this.props.property}
        onUpdate={this.props.setProperty}
        progress={this.props.progress}
        updateProgress={this.props.setProgress}
      />
    );
  }
}

const mapStateToProps = state => ({
  property: state.property,
  progress: state.progress
});

const mapDispatchToProps = dispatch => ({
  getProperty: dispatch(getProperty()),
  getProgress: dispatch(getProgress()),
  setProperty: property => dispatch(setProperty(property)),
  setProgress: progress => dispatch(setProgress(progress))
});

const ConnectedPropertyDetailsScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(PropertyDetailsScreen);

export { ConnectedPropertyDetailsScreen as PropertyDetails };
