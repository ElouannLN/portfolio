import { useState } from "react";
import { Link } from "react-scroll";
import { ArrowDownToLine } from "lucide-react";
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
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowDownToLine size={20} />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-6 bg-white shadow-lg rounded-md p-2 w-40"
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
