import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Git <strong className="purple">HUB</strong>
      </h1>
      <GitHubCalendar
        username="prashantkumar-creates"
        blockSize={17}
        blockMargin={7}
        color="#c084f5"
        fontSize={17}
      />
    </Row>
  );
}

export default Github;
