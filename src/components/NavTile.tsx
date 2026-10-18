import iconBook from "../assets/icon-book.svg";
import iconUser from "../assets/icon-user.svg";
import iconPhoto from "../assets/icon-photo.svg";
import iconMore from "../assets/icon-more.svg";
import iconMessage from "../assets/icon-message.svg";
import iconHome from "../assets/icon-home.svg";
import type { navItems } from "../data/content";

const icons = { book: iconBook, user: iconUser, photo: iconPhoto, more: iconMore, message: iconMessage, home: iconHome };

type Icon = (typeof navItems)[number]["icon"] | "home";

// Figma: Hero > nav > Book / User / Study / Experience / Contact.
// Size comes from `className`; the icon scales with it (ratios from the Figma tiles).
export default function NavTile({ icon, active, className = "" }: { icon: Icon; active: boolean; className?: string }) {
  return (
    <span
      // Glass panel styling; corner radius scales with the tile (20px at the 78px hero size).
      className={`glass flex shrink-0 items-center justify-center rounded-[26%] transition-[border-color] ${
        active ? "[--glass-border:#fff]" : ""
      } ${className}`}
    >
      <img
        src={icons[icon]}
        alt=""
        data-icon={icon}
        // White when active or hovered (the parent link is the `group`), faded grey otherwise
        className={`transition-opacity ${icon === "photo" && !active ? "size-[53.3%]" : "size-[60%]"} ${
          active ? "opacity-100" : "opacity-40 group-hover:opacity-100 group-focus-visible:opacity-100"
        }`}
      />
    </span>
  );
}
