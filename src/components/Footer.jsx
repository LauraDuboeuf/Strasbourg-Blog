import * as React from 'react';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css';

export default function Footer() {
  return (
    <div>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={4}
      >
        <Box className="box-width">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            aperiam repellendus, voluptates omnis qui velit ipsum! Totam minus
            exercitationem dignissimos.
          </p>
        </Box>
        <Box className="box-width">
          <h3>Team</h3>
          <Stack direction="row" spacing={2}>
            <div>
              <ul className="list-lineHeight">
                <li>Bryan Kaneb</li>
                <li>Bryan Kaneb</li>
                <li>Bryan Kaneb</li>
                <li>Bryan Kaneb</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <LinkedInIcon />
                </li>
                <li>
                  <LinkedInIcon />
                </li>
                <li>
                  <LinkedInIcon />
                </li>
                <li>
                  <LinkedInIcon />
                </li>
              </ul>
            </div>
          </Stack>
        </Box>
        <Box className="box-width">
          <h3>Support</h3>
          <p>RAWG API - https://rawg.io/apidocs</p>
        </Box>
      </Stack>
    </div>
  );
}
