import React, { useState } from "react";

import classes from "../faq.module.scss";
import { Accordion } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface Info {
  question: string;
  answer: string;
}
interface ContentFaqProps {
  item: Info;
}

const ContentFaq: React.FC<ContentFaqProps> = ({ item }) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((current) => !current);
  };
  return (
    <div className={classes.main}>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          style={{ color: isActive ? "#215BF0" : "black" }}
          onClick={handleClick}
          expandIcon={
            <ExpandMoreIcon style={{ color: isActive ? "#215BF0" : "black" }} />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.title} variant={"h6"}>
            {item.question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <Typography>{item.answer}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ContentFaq;
