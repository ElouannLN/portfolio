import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import dropdown from "../data/header/dropdown";

export default function DropdownMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-50">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-md shadow-md bg-white"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.div
              key="x-icon"
              initial={{ opacity: 0.5, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.15 }}
            >
              <X size={25} />
            </motion.div>
          ) : (
            <motion.div
              key="menu-icon"
              initial={{ opacity: 0.5, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.15 }}
            >
              <Menu size={25} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-6 bg-white shadow-lg rounded-md p-2 w-40 border-l-2 border-orange-300"
          >
            {dropdown.map(({ id, title }) => (
              <Link
                key={id}
                to={id}
                smooth={true}
                duration={500}
                offset={-20}
                className="block px-2 py-1 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer"
                onClick={() => setOpen(false)}
              >
                {title}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
