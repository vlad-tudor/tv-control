import * as React from "react";
import { PropertyDetails } from "./PropertyDetails";
import { Occupancy } from "./Occupancy";
import { AgentSpecific } from "./AgentSpecific";
import { connect } from "react-redux";
import { getProgress } from "../redux/actions/progress";
import { StepIndicator } from "../components/common/StepIndicator";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";

export const FormComponents = [
  <PropertyDetails />,
  <Occupancy />,
  <AgentSpecific />
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "2"
    };
    this.updateTab = this.updateTab.bind(this);
  }

  updateTab(tab) {
    this.setState({ activeTab: tab });
  }
  componentDidMount() {
    getProgress();
  }
  render() {
    return (
      <div className="app-container">
        <Container className="app">
          <Nav tabs>
            <NavItem>
              <NavLink
                className={this.state.activeTab === "1" ? "active" : null}
                onClick={() => this.setState({ activeTab: "1" })}
              >
                My Profile
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={this.state.activeTab === "2" ? "active" : null}
                onClick={() => this.setState({ activeTab: "2" })}
              >
                Property Details
              </NavLink>
            </NavItem>
          </Nav>

          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Container>Hello :)</Container>
            </TabPane>
            <TabPane tabId="2">
              <StepIndicator step={this.props.progress.step} />
              {FormComponents[this.props.progress.step]}
            </TabPane>
          </TabContent>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  progress: state.progress
});

const mapDispatchToProps = dispatch => ({
  getProgress: dispatch(getProgress())
});
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export { ConnectedApp as App };
