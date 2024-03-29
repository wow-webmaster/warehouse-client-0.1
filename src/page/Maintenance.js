import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Typography, Container } from '@mui/material';
// components
import Page from '../component/Page';
//
import { MaintenanceIllustration } from '../assets';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Maintenance() {
  return (
    <Page title="Maintenance">
      <Container>
        <ContentStyle sx={{ textAlign: 'center', alignItems: 'center' }}>
          <Typography variant="h3" paragraph>
            Website currently under maintenance
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>We are currently working hard on this page!</Typography>

          <MaintenanceIllustration sx={{ my: 10, height: 240 }} />

          <RouterLink to="/">
            <button className = "btn btn-info shadow-sm rounded-full btn-lg">Back to Home</button>
          </RouterLink>
        </ContentStyle>
      </Container>
    </Page>
  );
}
