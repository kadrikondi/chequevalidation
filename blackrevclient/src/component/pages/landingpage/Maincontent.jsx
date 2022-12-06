import React from "react";
// import { Button, Jumbotron } from 'react-bootstrap';
import Corousal from "./corousal";

import CallToAction from "./CallToAction";

import SmButtonJoinAndBook from "./smButtonJoinAndBook";

export default function SliderTop() {
  return (
    <div>
      <Corousal />
      <SmButtonJoinAndBook />

      <CallToAction />
    </div>
  );
}
