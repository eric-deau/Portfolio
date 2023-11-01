import { Link, useMatch, useResolvedPath } from "react-router-dom";

interface NavLinkProps {
  to: string;
  title: string;
  [key: string]: any; // This allows for any additional props
}

export default function Navlink({ to, title, ...restProps }: NavLinkProps) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...restProps}>
        {title}
      </Link>
    </li>
  );
}
