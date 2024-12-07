// ToggleButton.jsx
import React from "react";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { GoSun } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";

const ToggleButton = ({ checked, onChange }) => {
  return (
    <BootstrapSwitchButton
      checked={checked}
      onstyle="light"
      offstyle="dark"
      style="border"
      onlabel={<GoSun />}
      offlabel={<IoMoonOutline />}
      onChange={onChange}
    />
  );
};

export default ToggleButton;
