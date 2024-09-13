import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center space-y-8">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.href} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
