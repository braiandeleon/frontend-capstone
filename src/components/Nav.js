import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import Logo from '../Logo .svg'
import { Link } from "react-router-dom";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Nav = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position=""
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          
            <div>
            <nav>
            <img src={Logo} alt="Logo" />
            {socials.map((social, index) => (
              <a key={index} href={social.url} style={{ marginRight: "16px" }}>
                <FontAwesomeIcon icon={social.icon} size="2x"/>
              </a>
            ))

            }
            <Link to={"/"} style={{ marginRight: "16px" }}>Home</Link>
            <Link to={"/"} style={{ marginRight: "16px" }}>About</Link>
            <Link to={"/"} style={{ marginRight: "16px" }}>Menu</Link>
            <Link to={"/reserve"} style={{ marginRight: "16px" }}>Reservations</Link>
            <Link to={"/"} style={{ marginRight: "16px" }}>Prder Online</Link>
            <Link to={"/"} style={{ marginRight: "16px" }}>Login</Link>


          </nav>

            </div>

          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Nav;
