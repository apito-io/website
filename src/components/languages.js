/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, Container, Image} from 'theme-ui';
import SectionHeading from "./section-heading";

const Languages = ({ data }) => {
  return (
    <section id="supported-langs" sx={styles.section}>
      <Container>
        <SectionHeading slogan={data?.header} title={data?.title} />
        <figure sx={styles.figure}>
          <a target="_blank" href="https://docs.apito.io/quick-start">
            <Image width={1024} height={320} src={data?.image.url} alt="Apito SDK Integration" title={"Apito SDK Integration"} />
          </a>
        </figure>
      </Container>
    </section>
  );
};

export default Languages;

const styles = {
  section: {
    pt: [40, null, null, null, 60],
    pb: [40, null, null, null, 60],
  },
  figure: {
    margin: 0,
    textAlign: 'center',
    img: {
      height: 'auto',
      maxWidth: '100%',
    },
  },
};
