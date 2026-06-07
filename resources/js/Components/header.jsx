import styled from 'styled-components';
import { Navbar, Menu, MenuItem } from './navbar.js';
import { Brand } from './brand.js';
import { Link } from '@inertiajs/react';
// import darkLogo from "../../images/dark-logo.png";

export const Wrapper = styled.div`
    display: flex;
    padding: 16px 0;
`;

export const StyledHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
    padding: 8px 0;
`;

export const StyledLinks = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 16px;
    row-gap: 8px;
    align-items: center;
`;

const StyledNavLink = styled(Link)`
    color: rgba(255, 255, 255, 0.9);
    font-weight: 500;
    text-decoration: none;
    &:hover {
        opacity: 0.85;
    }
`;

const defaultNavItems = [
    { label: 'Home', href: '/' },
    { label: 'Articles', href: '/' },
    { label: 'About', href: '/' },
];

function Header({ user = null, navItems = defaultNavItems }) {
    return (
        <StyledHeader>
            <Brand>
                <Link href="/">Serenity</Link>
            </Brand>
            <Navbar>
                <Menu>
                    {navItems.map((item) => (
                        <MenuItem key={item.label}>
                            <a href={item.href}>{item.label}</a>
                        </MenuItem>
                    ))}
                </Menu>
                <StyledLinks>
                    {user ? (
                        <>
                            <StyledNavLink href={route('dashboard')}>
                                Dashboard
                            </StyledNavLink>
                            <StyledNavLink href={route('profile.edit')}>
                                {user.name}
                            </StyledNavLink>
                            <StyledNavLink
                                href={route('logout')}
                                method="post"
                                as="button"
                            >
                                Log out
                            </StyledNavLink>
                        </>
                    ) : (
                        <>
                            <StyledNavLink href={route('login')} as="button">
                                Login
                            </StyledNavLink>
                            <StyledNavLink href={route('register')} as="button">
                                Sign up
                            </StyledNavLink>
                        </>
                    )}
                </StyledLinks>
            </Navbar>
        </StyledHeader>
    );
}

export default Header;
