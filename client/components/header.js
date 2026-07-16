import Link from 'next/link';

export default ({ currentUser }) => {
    return <nav className="navbar navbar-light bg-light">
        <Link className="navbar-brand" href="/">
            TixHub
        </Link>

        <div className="d-flex justify-content-end">
            <ul className="nav d-flex align-items-center">
                { currentUser ? 'Sign Out' : 'Sign In/up' }
            </ul>
        </div>
    </nav>
};