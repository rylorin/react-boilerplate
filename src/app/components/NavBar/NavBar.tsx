import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, Link, Spacer, Stack, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React, { FunctionComponent, ReactNode } from 'react';
import { Link as RouteLink } from 'react-router-dom';
import logo from '../../logo.svg';
import Logo from '../Logo/Logo';

type NavBarProps = {
  links: Record<string, string>;
};

const NavBar: FunctionComponent<NavBarProps> = ({ links, ...rest }): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { toggleColorMode } = useColorMode();
  const displayLightModeToggle = useColorModeValue('none', 'display');
  const displayDarkModeToggle = useColorModeValue('display', 'none');
  const [to, _V] = Object.entries(links).shift() || ['/', undefined];

  return (
    <NavBarContainer {...rest}>
      <RouteLink to={to}>
        <Logo w="40px" h="40px" src={logo} />
      </RouteLink>
      <Spacer />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks links={links} isOpen={isOpen} />
      <IconButton
        aria-label="Dark mode"
        display={displayDarkModeToggle}
        onClick={toggleColorMode}
        icon={<MoonIcon />}
        ml="2"
      />
      <IconButton
        aria-label="Light mode"
        display={displayLightModeToggle}
        onClick={toggleColorMode}
        icon={<SunIcon />}
        ml="2"
      />
    </NavBarContainer>
  );
};

type MenuToggleProps = { isOpen: boolean; toggle: () => void };

const MenuToggle: FunctionComponent<MenuToggleProps> = ({ toggle, isOpen }): JSX.Element => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? (
        <IconButton aria-label="Close nav menu" icon={<CloseIcon />} />
      ) : (
        <IconButton aria-label="Open nav menu" icon={<HamburgerIcon />} />
      )}
    </Box>
  );
};

type MenuItemProps = { to: string; children: ReactNode };

const MenuItem: FunctionComponent<MenuItemProps> = ({ children, to = '/', ...rest }): JSX.Element => {
  return (
    <Link href={to} as="span">
      <Text display="block" {...rest}>
        <RouteLink to={to}>{children}</RouteLink>
      </Text>
    </Link>
  );
};

type MenuLinksProps = {
  links: Record<string, string>;
  isOpen: boolean;
};

const MenuLinks: FunctionComponent<MenuLinksProps> = ({ links, isOpen }): JSX.Element => {
  return (
    <Box display={{ base: isOpen ? 'block' : 'none', md: 'block' }} flexBasis={{ base: '100%', md: 'auto' }}>
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        {Object.entries(links).map(([K, V]) => (
          <MenuItem key={K} to={K}>
            {V}
          </MenuItem>
        ))}
      </Stack>
    </Box>
  );
};

type NavBarContainerProps = {
  children: ReactNode;
};

const NavBarContainer: FunctionComponent<NavBarContainerProps> = ({ children, ...rest }): JSX.Element => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" w="100%" pr="4" pl="4" pt="1" pb="1" {...rest}>
      {children}
    </Flex>
  );
};

export default NavBar;
