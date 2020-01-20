import * as React from "react";
import { Jumbotron } from "reactstrap";
import { Icon } from "react-icons-kit";
import { home } from "react-icons-kit/icomoon/home";
import { users } from "react-icons-kit/icomoon/users";

const iconList = {
  home: home,
  users: users,
  default: home
};

export const FormCard = props => (
  <Jumbotron className={`form-card ${props.className}`}>
    {props.header ? (
      <>
        <FormCardHeader header={props.header} icon={props.icon} />
      </>
    ) : null}
    <div>{props.children}</div>
  </Jumbotron>
);

export const FormCardHeader = props => (
  <>
    <h3>
      {props.icon ? <Icon icon={iconList[props.icon]} /> : null}
      &nbsp; {props.header}
    </h3>
    <div>{props.children}</div>
    <hr />
  </>
);
