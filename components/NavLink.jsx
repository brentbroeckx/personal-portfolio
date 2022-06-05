import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';

export { NavLink };

NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    exact: PropTypes.bool
};

NavLink.defaultProps = {
    exact: false
};

function NavLink({ href, exact, children, ...props }) {
    const { asPath } = useRouter();

    const isActive = exact ? asPath === href : asPath.includes(href);

    console.log(asPath)
    console.log(href)


    if (isActive) {
        if (props.mobile) {
            props.className += ' bg-orange-400'; 
        } else {
            props.className += ' border-b-2 border-orange-400';
        }
    }

    return (
        <Link href={href}>
            <a {...props}>
                {children}
            </a>
        </Link>
    );
}