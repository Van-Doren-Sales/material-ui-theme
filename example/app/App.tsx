import * as React from 'react';
import {
  Button,
  Typography,
  Container,
  Paper,
  Box,
  Link,
} from '@material-ui/core';

function App() {
  return (
    <Box marginTop={2}>
      <Container maxWidth="md">
        <Paper>
          <Box p={2}>
            <Typography variant="h3">
              Van Doren Sales - Material UI Theme
            </Typography>

            <Box display="flex">
              <Box m={1}>
                <Typography>
                  <Link href="https://www.vandorensales.com" target="_blank">
                    Website
                  </Link>
                </Typography>
              </Box>

              <Box m={1}>
                <Typography>
                  <Link
                    href="https://github.com/Van-Doren-Sales"
                    target="_blank"
                  >
                    GitHub
                  </Link>
                </Typography>
              </Box>
            </Box>

            <Box display="flex">
              <Box marginRight={1}>
                <Button variant="contained" color="primary">
                  Primary Button
                </Button>
              </Box>

              <Box marginLeft={1}>
                <Button variant="contained" color="secondary">
                  Secondary Button
                </Button>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default App;
