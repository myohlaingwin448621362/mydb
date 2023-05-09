import React, { useState, useRef, useEffect } from "react";

import ToggleItem from "./ToggleItem/ToggleItem";
import { Container, Box } from "@mui/material";

const Toggle = () => {
  const toggleapi = [
    {
      title: "What is Server?",
      answer:
        "A server is a computer program or device that provides a service to another computer program and its user, also known as the client. In a data center, the physical computer that a server program runs on is also frequently referred to as a server. That machine might be a dedicated server or it might be used for other purposes.",
    },
    {
      title: "What is DNS?",
      answer:
        "DNS lets users connect to websites using domain names instead of IP addresses. Learn how DNS works.",
    },
    {
      title: "What is Api?",
      answer:
        "APIs are mechanisms that enable two software components to communicate with each other using a set of definitions and protocols. For example, the weather bureau’s software system contains daily weather data. The weather app on your phone “talks” to this system via APIs and shows you daily weather updates on your phone.",
    },
  ];

  const [isToggle, setToggle] = useState(null);

  const onClickToggle = (index) => {
    setToggle(index === isToggle ? null : index);
  };

  return (
    <Container maxWidth="lg">
      <Box mt={4}>
        {toggleapi.map((toggle, index) => {
          return (
            <ToggleItem
              key={toggle.title}
              title={toggle.title}
              answer={toggle.answer}
              onClickHandler={() => onClickToggle(index)}
              addToggle={isToggle}
              number={index}
            />
          );
        })}
      </Box>
    </Container>
  );
};

export default Toggle;
