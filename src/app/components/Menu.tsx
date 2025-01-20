import Link from "next/link";

// Icons
import DeleteSVG from "../icons/DeleteSVG";
import EditSVG from "../icons/EditSVG";
import AddSVG from "../icons/AddSVG";
import InfoSVG from "../icons/InfoSVG";
import HomeSVG from "../icons/HomeSVG";

const menuItems = [
  {
    title: "MENU",
    items: [
      { title: "Home", path: "/" },
      { title: "Add Recipe", path: "/add-recipe" },
      { title: "Edit Recipe", path: "/edit-recipe" },
      { title: "Remove Recipe", path: "/remove-recipe" },
      { title: "About", path: "/about" },
    ],
  },
];

const getSVGBySlug = (slug: string) => {
  switch (slug) {
    case "/":
      return <HomeSVG size={28} color="#000000" />;
    case "/add-recipe":
      return <AddSVG size={28} color="#000000" />;
    case "/edit-recipe":
      return <EditSVG size={28} color="#000000" />;
    case "/remove-recipe":
      return <DeleteSVG size={28} color="#000000" />;
    case "/about":
      return <InfoSVG size={28} color="#000000" />;
    default:
      return null;
  }
};

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((menu) => (
        <div className="flex flex-col gap-2" key={menu.title}>
          {menu.items.map((item) => (
            <Link
              key={item.title}
              href={item.path}
              className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2"
            >
              {getSVGBySlug(item.path)}
              <span className="hidden lg:block">{item.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
