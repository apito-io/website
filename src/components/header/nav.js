/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import Link from '@docusaurus/Link';
import { navbar } from '../../data/navbar';

const Navbar = () => {
  return (
    <Flex as="ul" sx={styles.nav}>
      {navbar.map((item, i) => (
        <li key={i}>
          <Link href={item.url}>
            {item.outside ?
              <a target="_blank">{item.label}</a>
              :
              <a>{item.label}</a>
            }
          </Link>
        </li>
      ))}
    </Flex>
  );
};

export default Navbar;

const styles = {
  nav: {
    alignItems: ['flex-start', null, null, 'center'],
    m: ['0 0 0 33%'],
    p: 0,
    listStyle: 'none',
    position: ['absolute', null, null, 'static'],
    flexDirection: ['column', null, null, 'row'],
    li: {
      mr: [40],
      '&:last-child': {
        mr: 0,
      },
    },
    a: {
      color: 'text',
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'all 0.2s ease-in-out 0s',

      '&:hover': {
        color: 'primary',
      },
    },
    '@media screen and (max-width: 767px)': {
      backgroundColor: 'primary',
      left: 0,
      top: 76,
      width: '100%',
      li: {
        mr: 0,
      },
    },
  },
};
