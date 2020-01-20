import * as React from "react";
import { Jumbotron } from "reactstrap";
import { Icon } from "react-icons-kit";
import { home } from "react-icons-kit/icomoon/home";

const iconList = {
  home: home,
  default: home
};

export const FormCard = props => (
  <Jumbotron className={`form-card ${props.className}`}>
    {props.header ? (
      <>
        <h3>
          {props.icon ? <Icon icon={iconList[props.icon]}></Icon> : null}
          &nbsp; {props.header}
        </h3>
        <hr />
      </>
    ) : null}
    <div>{props.children}</div>
  </Jumbotron>
);
