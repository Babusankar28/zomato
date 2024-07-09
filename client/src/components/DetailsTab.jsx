import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
const DetailsTab = () => {
  return (
    <div className="container details-tab mt-3 pb-5">
      <div className="py-3">
        <h1 className="d-inline-block">Bigchil Cakery</h1>
        <button className="btn order-btn mt-2">Place order online</button>
      </div>
      <Tabs
        defaultActiveKey="home"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Overview"></Tab>
        <Tab eventKey="profile" title="Contact"></Tab>
      </Tabs>
    </div>
  );
};

export default DetailsTab;
