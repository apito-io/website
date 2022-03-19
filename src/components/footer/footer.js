/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import Link from '@docusaurus/Link';
import Logo from "../header/logo";
import {navbar} from "../../data/navbar";

const Footer = () => {
  return (
    <footer id="footer" sx={styles.section}>
      <div sx={styles.footerContent}>
        <Logo />
        <nav sx={styles.nav}>
          {navbar.map((item, i) => (
            <Link key={i} href={item.url}>
              {item.outside ?
                <a target="_blank">{item.label}</a>
                :
                <a>{item.label}</a>
              }
            </Link>
          ))}
        </nav>
        <div sx={styles.copyright}>
          Copyright {new Date().getFullYear()} By Apito |{' '}
          <Link href="/policies/privacy-policy">
            <a href="/policies/privacy-policy" sx={{ mx: '5px' }}>Privacy Policy</a>
          </Link>{' '}
          |{' '}
          <Link href="/policies/software-as-a-service-agreement">
            <a href="/policies/software-as-a-service-agreement" sx={{ mx: '5px' }}>User Agreement</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const styles = {
  footerContent: {
    maxWidth: 600,
    margin: '55px auto',
    textAlign: 'center',
    color: 'textAlt',
    svg: {
      maxWidth: [130, null, null, 140],
    },
    a: {
      color: 'textAlt',
      cursor: 'pointer',
      textDecoration: 'none',
      ':hover': {
        color: 'primary',
      },
    },
  },
  nav: {
    marginTop: 20,
    'a+a': {
      ml: '20px',
    },
  },
  copyright: {
    marginTop: 20,
    px: [10, null, null, 0],
  },
};
