import React, { Component } from "react";
import Panel from "qilin-components/panel";
import Section from "qilin-components/section";

class SettingsCoreSection extends Component {
  render() {
    return [
      <Panel width="200px" border="0 1px 0 0">
        Sub menu
      </Panel>,

      <Section horizontal>Core</Section>
    ];
  }
}

export default SettingsCoreSection;
