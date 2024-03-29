/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, Container, Grid, Box, Heading, Button, Image} from 'theme-ui';
import Markdown from './markdown';

const HeroBanner = ({ data }) => {
  return (
    <section id="home" sx={styles.section}>
      <Container>
        <Grid sx={styles.grid}>
          <Box sx={styles.heroContent}>
            <Heading as="h1">
              <span>Develop API</span>  for web and mobile apps
              Build Instantly, <span>Deploy in Seconds</span>
            </Heading>
            <p>{data?.description}</p>
            <a href="https://app.apito.io" target="_blank">
              <Button>START BUILDING API</Button>
            </a>
          </Box>
          <Box as="figure">
            <Image
              src={data.image}
              width={'auto'}
              height={740}
              alt={"Apito Console"}
              title={"Apito Console"}
            />
          </Box>
        </Grid>
      </Container>
    </section>
  );
};

export default HeroBanner;

const styles = {
  section: {
    pt: [40, null, null, 60],
    pb: [60, null, null, 70],
  },
  grid: {
    gap: [40, null, null, 60],
    alignItems: 'center',
    minHeight: ['auto', null, null, 'calc(100vh - 119px)'],
  },
  heroContent: {
    maxWidth: 860,
    mx: 'auto',
    textAlign: 'center',
    h1: {
      fontSize: [28, null, null, 48],
      lineHeight: 1.35,
    },
    span: {
      color: 'primary'
    },
    p: {
      fontSize: [16, null, null, 20],
      lineHeight: 2,
      maxWidth: 520,
      margin: '25px auto 0',
    },
    button: {
      mt: [25, null, null, 40],
    },
  },
};
