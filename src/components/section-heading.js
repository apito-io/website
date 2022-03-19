/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Heading, Text } from 'theme-ui';

const SectionHeading = ({ slogan, title, description, ...props }) => {
  return (
    <div sx={styles.heading} {...props}>
      {slogan && <Text as="span">{slogan}</Text>}
      <Heading as="h1">{title}</Heading>
      {description && <Text as="p">{description}</Text>}
    </div>
  );
};

export default SectionHeading;

const styles = {
  heading: {
    // mb: [30, null, null, 50, 70],
    maxWidth: 800,
    m: ['0 auto 40px', null, null, '0 auto 70px'],
    textAlign: 'center',
    span: {
      color: 'primary',
      fontSize: [16, null, null, 20],
      fontWeight: 500,
      mb: ['8px', null, null, 18],
      display: 'inline-flex',
    },
    h2: {
      color: 'heading',
      fontWeight: 500,
      fontSize: [24, null, null, 38],
      lineHeight: 1.6,
      letterSpacing: -1,
    },
    p: {
      fontSize: 18,
      lineHeight: 2.11,
    },
  },
};
