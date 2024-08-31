import React, { useState } from "react";
import { ContactWrapper, Email, ContactContent, ContactDetails, ContactImage, SocialIcons, Address } from "./ContactElements";
import { MdContentCopy } from "react-icons/md";
import { IconButton, Tooltip } from "@mui/material";
import Zoom from '@mui/material/Zoom';

function Contact() {
  const [showTooltip, setShowTooltip] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("aggarwalrahul20002@gmail.com");
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 700);
  };

  return (
    <ContactWrapper id="contact">
      <ContactContent>
        <ContactDetails>
          <h2><b>Get in Touch</b></h2>
          <Address>
            <div>
              <h3>Address</h3>
              <p>Los Angeles, CA-90007</p>
            </div>
            <div>
              <h3>Phone Number</h3>
              <p>+1 (213)675-9407</p>
            </div>
            <Email>
              <div style={{ display: 'flex', alignItems: 'center', columnGap: '20px', rowGap: '10px', flexWrap: 'wrap', justifyContent: 'center' }} >
                <span>aggarwalrahul20002@gmail.com</span>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  open={showTooltip}
                  onClose={() => setShowTooltip(false)}
                  title="Copied!"
                  TransitionComponent={Zoom}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  placement="bottom"
                >
                  <IconButton  onClick={copyToClipboard} >
                    <MdContentCopy size={25} style={{ cursor: 'pointer', color: "#151418" }}/>
                  </IconButton>
                </Tooltip>
              </div>
              <a
                className="btn PrimaryBtn btn-shadow"
                href="mailto:aggarwalrahul20002@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Drop a mail
              </a>
            </Email>
          </Address>
        </ContactDetails>
      </ContactContent>
    </ContactWrapper>
  );
}

export default Contact;
