import React, { useEffect } from "react";
import { Navigation } from "@innovaccer/design-system";
import "@innovaccer/design-system/css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  let navigate = useNavigate();
  const data = [
    {
      name: "tab1",
      label: "Home",
      link: "/",
    },
    {
      name: "tab2",
      label: "BMI",
      link: "/bmi",
    },
    {
      name: "tab3",
      label: "BMR",
      link: "/bmr",
    },
    {
      name: "tab4",
      label: "Periods",
      link: "/periods",
    },
  ];

  const [active, setActive] = React.useState({ name: "tab1"});
  useEffect(() => {
    navigate("/");
  }, []);
  const onClickHandler = (menu) => {
    setActive(menu);
    navigate(menu.link);
  };

  const align = "center";

  return (
    <Navigation
      align={align}
      menus={data}
      active={active}
      onClick={onClickHandler}
    />
  );
}
