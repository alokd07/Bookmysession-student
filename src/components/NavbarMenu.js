/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  PhoneIcon,
  SquaresPlusIcon,
  SunIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
// import { Link, useLocation, useRouter } from "react-router-dom";
import { Popover } from "flowbite-react";
import { Drawer } from "antd";
import { useRef } from "react";
import { HiArrowRight } from "react-icons/hi";
import { Menu as AntMenu } from "antd";
import { Avatar } from "@mui/material";
import { Modal } from "antd";
import Login from "./Login";
import { PiBell } from "react-icons/pi";
import NotificationContainer from "./Notifications";
import { Badge } from "antd";
import { UserContext } from "@/pages/_app";
import Link from "next/link";

function ProfileMenu({ data }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  let navigate = useRouter();
  let logout = localStorage.removeItem("user");

  const profileMenuItems = [
    {
      label: "Edit Profile",
      icon: Cog6ToothIcon,
      href: "/update",
    },
    {
      label: "Messages",
      icon: InboxArrowDownIcon,
    },
    {
      label: "Help",
      icon: LifebuoyIcon,
      href: "/faq",
    },
    {
      label: "Sign Out",
      icon: PowerIcon,
      href: "logOut",
    },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  const handleMenuItemClick = (href) => {
    if (href === "logOut") {
      logout();
    } else {
      navigate(href);
    }
    closeMenu();
  };
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          ripple={false}
          variant="text"
          className="items-center gap-1 rounded-full py-0.5 pr-3 pl-1 lg:ml-auto justify-center grid hover:!bg-none active:!bg-none"
        >
          <Avatar
            sx={{ width: 32, height: 32 }}
            src={data?.imageUrl}
            alt={data?.firstName}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        <div className="px-4 py-2 border-b border-gray-300">
          <span className="block text-sm text-gray-900 dark:text-white">
            {data?.firstName} {data?.lastName}
          </span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
            {data?.phoneNumber}
          </span>
        </div>
        {profileMenuItems.map(({ label, icon, href }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              // onClick={closeMenu}
              onClick={() => handleMenuItemClick(href)}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

function Notifications() {
  const [totalNotifications, setTotalNotifications] = useState(0);
  return (
    <Popover
      aria-labelledby="default-popover"
      content={
        <div className="w-[20rem] text-sm text-gray-500 dark:text-gray-400">
          <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
            <h4
              id="default-popover"
              className="font-semibold text-gray-900 dark:text-white"
            >
              Notifications
            </h4>
          </div>
          <NotificationContainer setTotalNotifications={setTotalNotifications} />
        </div>
      }
    >
      <Badge size="small" count={totalNotifications} overflowCount={9}>
      <PiBell className="size-6 text-black cursor-pointer" />
    </Badge>
    </Popover>
  );
}

const navListMenuItems = [
  {
    title: "Products",
    description: "Find the perfect solution for your needs.",
    icon: SquaresPlusIcon,
  },
  {
    title: "About Us",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
  },
  {
    title: "Blog",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
  },
  {
    title: "Services",
    description: "Learn how we can help you achieve your goals.",
    icon: SunIcon,
  },
  {
    title: "Support",
    description: "Reach out to us for assistance or inquiries",
    icon: GlobeAmericasIcon,
  },
  {
    title: "Contact",
    description: "Find the perfect solution for your needs.",
    icon: PhoneIcon,
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <Link href="/browse/All" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <h6
              className="flex items-center text-sm font-bold !text-gray-600"
            >
              {title}
            </h6>
            <p
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </p>
          </div>
        </MenuItem>
      </Link>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="top"
        allowHover={true}
      >
        <MenuHandler>
          <Typography
            as="div"
            variant="small"
            className="font-medium mega-menu"
          >
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 !text-secondary hover:bg-none hover:bg-opacity-80 focus:bg-none focus:bg-opacity-80 active:bg-none active:bg-opacity-80 hover:text-[#1A938A]"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              ripple={false}
            >
              Services
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block border border-gray-400 bg-gray-50 outline-none">
          {/* <ul>
            <div>
              <h2 className="!font-semibold !text-[12px] uppercase">Class</h2>
              <Divider className="mt-2" />
            </div>
              <div className="grid grid-cols-3 gap-y-2 outline-none outline-0">
              <MenuItem className="flex items-center gap-3 rounded-lg">
                <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                  {React.createElement("hello", {
                    strokeWidth: 2,
                    className: "h-6 text-gray-900 w-6",
                  })}
                </div>
                <div>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="flex items-center text-sm font-bold"
                  >
                    Hello
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="text-xs !font-medium text-blue-gray-500"
                  >
                    this is desc
                  </Typography>
                </div>
              </MenuItem>
              <MenuItem className="flex items-center gap-3 rounded-lg">
                <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                  {React.createElement("hello", {
                    strokeWidth: 2,
                    className: "h-6 text-gray-900 w-6",
                  })}
                </div>
                <div>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="flex items-center text-sm font-bold"
                  >
                    Hello
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="text-xs !font-medium text-blue-gray-500"
                  >
                    this is desc
                  </Typography>
                </div>
              </MenuItem>
              <MenuItem className="flex items-center gap-3 rounded-lg">
                <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                  {React.createElement("hello", {
                    strokeWidth: 2,
                    className: "h-6 text-gray-900 w-6",
                  })}
                </div>
                <div>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="flex items-center text-sm font-bold"
                  >
                    Hello
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="text-xs !font-medium text-blue-gray-500"
                  >
                    this is desc
                  </Typography>
                </div>
              </MenuItem>
              </div>
          </ul> */}
          <div className="mx-auto grid border-none outline-0 px-4 py-5 text-sm text-gray-500 dark:text-gray-400 md:grid-cols-6 md:px-6">
            <ul
              className="mb-4 hidden space-y-4 md:mb-0 md:block"
              aria-labelledby="mega-menu-full-image-button"
            >
              <li>
                <b className="text-sm font-semibold text-[#1A938A] dark:text-white">
                  Standard
                </b>
              </li>
              <li>
                <Link href="/browse/All" className="text-sm !text-secondary">
                  Pre-Nursery
                </Link>
              </li>
              <li>
                <Link href="/browse/All" className="text-sm !text-secondary">
                  Class 1st - 5th
                </Link>
              </li>
              <li>
                <Link href="/browse/All" className="text-sm !text-secondary">
                  Class 6th - 8th
                </Link>
              </li>
              <li>
                <Link href="/browse/All" className="text-sm !text-secondary">
                  Class 9th - 10th
                </Link>
              </li>
              <li>
                <Link href="/browse/All" className="text-sm !text-secondary">
                  Class 11th - 12th
                </Link>
              </li>
            </ul>
            <ul
              className="mb-4 hidden space-y-4 md:mb-0 md:block"
              aria-labelledby="mega-menu-full-image-button"
            >
              <li>
                <b className="text-[#1A938A]">Boards</b>
              </li>
              <li>
                <Link href="/browse/All" className="text-sm !text-secondary">
                  IB / CIE
                </Link>
              </li>
              <li>
                <Link href="/browse/All" className="text-sm !text-secondary">
                  CBSE
                </Link>
              </li>
              <li>
                <Link href="/browse/All" className="text-sm !text-secondary">
                  ICSE / ICE
                </Link>
              </li>
              <li>
                <Link href="/browse/All" className="text-sm !text-secondary">
                  UP Board
                </Link>
              </li>
              <li>
                <Link href="/browse/All" className="text-sm !text-secondary">
                  Others
                </Link>
              </li>
            </ul>
            <ul
              className="mb-4 hidden space-y-4 md:mb-0 md:block"
              aria-labelledby="mega-menu-full-image-button"
            >
              <li>
                <b className="text-[#1A938A]">Location</b>
              </li>
              <li>
                <Link href="/browse/All" className="text-sm !text-secondary">
                  Lucknow
                </Link>
              </li>
              <li>
                <Link href="/browse/All" className="text-sm !text-secondary">
                  Kanpur
                </Link>
              </li>
              <li>
                <Link href="/browse/All" className="text-sm !text-secondary">
                  Prayagraj
                </Link>
              </li>
              <li>
                <Link href="/browse/All" className="text-sm !text-secondary">
                  Varanasi
                </Link>
              </li>
              <li>
                <Link href="/browse/All" className="text-sm !text-secondary">
                  Other
                </Link>
              </li>
            </ul>
            <ul
              className="mb-4 hidden space-y-4 md:mb-0 md:block"
              aria-labelledby="mega-menu-full-image-button"
            >
              <li>
                <b className="text-[#1A938A]">Subject</b>
              </li>
              <li>
                <Link href="/browse/All" className="text-sm !text-secondary">
                  Mathematics
                </Link>
              </li>
              <li>
                <Link href="/browse/All" className="text-sm !text-secondary">
                  Science
                </Link>
              </li>
              <li>
                <Link href="/browse/All" className="text-sm !text-secondary">
                  Physics
                </Link>
              </li>
              <li>
                <Link href="/browse/All" className="text-sm !text-secondary">
                  Chemistry
                </Link>
              </li>
              <li>
                <Link href="/browse/All" className="text-sm !text-secondary">
                  English, Commerce and others
                </Link>
              </li>
            </ul>
            <ul className="mb-4 space-y-4 md:mb-0">
              <li>
                <b className="text-[#1A938A]">Other Supports</b>
              </li>
              <li>
                <Link href="/browse/All" className="text-sm !text-secondary">
                  Home Saathi (Coming soon)
                </Link>
              </li>
              <li>
                <Link href="/browse/All" className="text-sm !text-secondary">
                  Aaya (Comming soon)
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm !text-secondary">
                  FAQs
                </Link>
              </li>
            </ul>
            <Link
              href="/contact-us"
              className="relative rounded-lg p-8 text-left ml-2"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1540292618247-e7fc8c43c709?w=600&auhref=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHVpdGlvbnxlbnwwfHwwfHx8MA%3D%3D)",
                backgroundPosition: "contain",
                backgroundSize: "cover",
              }}
            >
              <div className="glass"></div>
              <p className="!z-1 relative text-center mb-5 max-w-xl font-extrabold leading-tight tracking-tight text-white">
                Having any kind of issue, feel free to contact us 24/7
              </p>
              <button
                type="button"
                className="z-1 relative mx-auto justify-center inline-flex items-center rounded-lg border border-white px-2.5 py-1.5 text-center text-xs font-medium text-white hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-700"
              >
                Contact Us
                <HiArrowRight className="ml-2" />
              </button>
            </Link>
          </div>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  const router = useRouter();
  const location = router;

  const isActivePath = (path) => {
    return (
      location.pathname === path ||
      (location.pathname === "/" && path === "/home")
    );
  };

  return (
    <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
      <li>
        <Link
          className={`text-sm ${
            isActivePath("/home")
              ? "!text-[#005153] font-bold"
              : "!text-secondary"
          } !hover:text-[#005153]`}
          href="/"
        >
          Home
        </Link>
      </li>
      <li className="text-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          className="w-4 h-4 current-fill"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
          />
        </svg>
      </li>
      <li>
        <Link
          className={`text-sm ${
            isActivePath("/about-us")
              ? "!text-[#005153] font-bold"
              : "!text-secondary"
          } hover:!text-[#005153]`}
          href="/about-us"
        >
          About Us
        </Link>
      </li>
      <li className="text-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          className="w-4 h-4 current-fill"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
          />
        </svg>
      </li>
      {/* <li>
        <span
          className={`text-sm ${
            isActivePath("/service")
              ? "!text-[#005153] font-bold"
              : "!text-secondary"
          } !hover:text-[#005153]`}
          // href="/"
        >
          <NavListMenu />
        </span>
      </li> */}
      <li>
        <Link
          className={`text-sm ${
            isActivePath("/faq") ? "!text-[#005153] font-bold" : "!text-secondary"
          } !hover:text-[#005153]`}
          href="/faq"
        >
          FAQs
        </Link>
      </li>
      <li className="text-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          className="w-4 h-4 current-fill"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
          />
        </svg>
      </li>
      <li>
        <Link
          className={`text-sm ${
            isActivePath("/contact-us")
              ? "!text-[#005153] font-bold"
              : "!text-secondary"
          } !hover:text-[#005153]`}
          href="/contact-us"
        >
          Contact Us
        </Link>
      </li>
      <li className="text-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          className="w-4 h-4 current-fill"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
          />
        </svg>
      </li>
      <li>
        <a
          className={`text-sm ${
            isActivePath("/become-us")
              ? "!text-[#005153] font-bold"
              : "!text-secondary"
          } !hover:text-[#005153]`}
          href="https://teacher.bookmysession.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          Become a Tutor
        </a>
      </li>
    </ul>
  );
}

export default function NavbarMenu({
  className,
  profileImage,
  notificationCount,
  isModalOpen,
  setIsModalOpen,
}) {
  const [openNav, setOpenNav] = React.useState(false);
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const [open, setOpen] = useState(false);
  const [navigationMenuOpen, setNavigationMenuOpen] = useState(false);
  const [navigationMenu, setNavigationMenu] = useState("");
  const [navigationMenuCloseTimeout, setNavigationMenuCloseTimeout] =
    useState(null);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const navigationDropdownRef = useRef(null);

  const navigationMenuLeave = () => {
    const timeout = setTimeout(() => {
      navigationMenuClose();
    }, 200);
    setNavigationMenuCloseTimeout(timeout);
  };

  const navigationMenuReposition = (navElement) => {
    if (navigationDropdownRef.current) {
      navigationDropdownRef.current.style.left = `${navElement.offsetLeft}px`;
      navigationDropdownRef.current.style.marginLeft = `${
        navElement.offsetWidth / 2
      }px`;
    }
  };

  const navigationMenuClearCloseTimeout = () => {
    if (navigationMenuCloseTimeout) {
      clearTimeout(navigationMenuCloseTimeout);
    }
  };

  const navigationMenuClose = () => {
    setNavigationMenuOpen(false);
    setNavigationMenu("");
  };

  const {user, data} = useContext(UserContext);
  // const navigate = useRouter();

  // const location = useLocation();
    const router = useRouter();
  const location = router;

  const navigate = useRouter();

  const isActivePath = (path) => {
    return (
      location.pathname === path ||
      (location.pathname === "/" && path === "/home")
    );
  };

  useEffect(() => {
    if (user) {
      setIsAuthenticate(true);
    }
  }, []);

  const menu = (
    <AntMenu className="h-[50vh] overflow-scroll">
      <AntMenu.ItemGroup title="Standard">
        <AntMenu.Item key="1">Pre-Nursery</AntMenu.Item>
        <AntMenu.Item key="2">Class 1st - 5th</AntMenu.Item>
        <AntMenu.Item key="3">Class 6th - 8th</AntMenu.Item>
        <AntMenu.Item key="4">Class 9th - 10th</AntMenu.Item>
        <AntMenu.Item key="5">Class 11th - 12th</AntMenu.Item>
      </AntMenu.ItemGroup>
      <AntMenu.ItemGroup title="Boards">
        <AntMenu.Item key="6">IB / CIE</AntMenu.Item>
        <AntMenu.Item key="7">CBSE</AntMenu.Item>
        <AntMenu.Item key="8">ICSE / ICE</AntMenu.Item>
        <AntMenu.Item key="9">UP Board</AntMenu.Item>
        <AntMenu.Item key="10">Others</AntMenu.Item>
      </AntMenu.ItemGroup>
      <AntMenu.ItemGroup title="Location">
        <AntMenu.Item key="11">Lucknow</AntMenu.Item>
        <AntMenu.Item key="12">Kanpur</AntMenu.Item>
        <AntMenu.Item key="13">Prayagraj</AntMenu.Item>
        <AntMenu.Item key="14">Varanasi</AntMenu.Item>
        <AntMenu.Item key="15">Other</AntMenu.Item>
      </AntMenu.ItemGroup>
      <AntMenu.ItemGroup title="Subject">
        <AntMenu.Item key="16">Mathematics</AntMenu.Item>
        <AntMenu.Item key="17">Science</AntMenu.Item>
        <AntMenu.Item key="18">Physics</AntMenu.Item>
        <AntMenu.Item key="19">Chemistry</AntMenu.Item>
        <AntMenu.Item key="20">English, Commerce and others</AntMenu.Item>
      </AntMenu.ItemGroup>
      <AntMenu.ItemGroup title="Other Supports">
        <AntMenu.Item key="21">Home Saathi (Coming soon)</AntMenu.Item>
        <AntMenu.Item key="22">Aaya (Coming soon)</AntMenu.Item>
        <AntMenu.Item key="23">FAQs</AntMenu.Item>
      </AntMenu.ItemGroup>
    </AntMenu>
  );

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const toggleOpen = () => setOpen((cur) => !cur);
  const onClose = () => setOpen((cur) => !cur);

  return (
    <Navbar
      className={`relative mx-auto !z-10 !w-full max-w-full rounded-none shadow-none backdrop-saturate-[0] backdrop-blur-none bg-white mb-6 md:mb-0 border-b border-gray-300 px-4 py-2 ${className}`}
    >
      <Modal
        title={null}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={800}
        className="login-modal"
      >
        <Login isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </Modal>
      <div className="2xl:container mx-auto backdrop-saturate-[0] backdrop-blur-none bg-white">
        <nav className="relative px-4 py-2 flex justify-between items-center">
          <div
            onClick={() => navigate("/")}
            className="flex mr-4 gap-3 cursor-pointer lg:ml-2"
          >
            <img
              className="h-6 w-auto mt-0.5 scale-[1.4] md:scale-[2] ml-0 md:ml-6"
              src="/logo.svg"
              alt="Bookmysession"
            />
          </div>
          <div className="flex items-center gap-2">
            {isAuthenticate ? (
              <div className="flex items-center gap-4 justify-between">
                <div className="ml-4 grid items-center lg:ml-6 !z-[99]">
                  {isAuthenticate ? (
                    <Notifications
                      data={data}
                      notificationCount={notificationCount}
                    />
                  ) : null}
                </div>
                <ProfileMenu data={data} profileImage={profileImage} />
              </div>
            ) : (
              <button
                className="hidden lg:inline-block px-4 py-1.5 text-sm capitalize shadow-none !bg-primary rounded text-white font-semibold first-letter transition duration-200 hover:shadow-none"
                onClick={showModal}
              >
                Book free demo
              </button>
            )}
            {!isAuthenticate && (
              <button
                className="md:hidden block px-4 py-1.5 text-sm capitalize shadow-none bg-primary rounded text-white font-semibold first-letter transition duration-200 hover:shadow-none"
                size="sm"
                onClick={showModal}
              >
                Book free demo
              </button>
            )}
            <div className="lg:hidden">
              <button
                onClick={toggleOpen}
                className="navbar-burger flex items-center bg-primary text-white rounded-md px-3 py-2"
              >
                <svg
                  className="block h-4 w-4 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
        <Drawer title="Bookmysession" onClose={onClose} open={open}>
          <div className="justify-center text-center">
            <ul>
              <li className="mb-1">
                <Link
                  className={`block p-4 text-sm font-semibold ${
                    isActivePath("/home")
                      ? "!text-[#005153] font-bold"
                      : "!text-black"
                  }`}
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className={`block p-4 text-sm font-semibold ${
                    isActivePath("/about-us")
                      ? "!text-[#005153] font-bold"
                      : "!text-black"
                  }`}
                  href="/about-us"
                >
                  About Us
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className={`block p-4 text-sm font-semibold ${
                    isActivePath("/faq")
                      ? "!text-[#005153] font-bold"
                      : "!text-black"
                  }`}
                  href="/faq"
                >
                  FAQs
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className={`block p-4 text-sm font-semibold ${
                    isActivePath("/contact-us")
                      ? "!text-[#005153] font-bold"
                      : "!text-black"
                  }`}
                  href="/contact-us"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center">
            {isAuthenticate ? null : (
              <button
                className="shadow-none bg-primary px-4 py-1.5 text-sm capitalize text-white rounded font-semibold first-letter transition duration-200 hover:shadow-none"
                size="sm"
                onClick={showModal}
              >
                Book free demo
              </button>
            )}
          </div>
        </Drawer>
        <div className="navbar-menu relative z-50 hidden">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-8">
              <a className="mr-auto text-3xl font-bold leading-none" href="/">
                <svg
                  className="h-12"
                  alt="HomeTute_Logo"
                  viewBox="0 0 10240 10240"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M8284 9162 c-2 -207 -55 -427 -161 -667 -147 -333 -404 -644 -733 -886 -81 -59 -247 -169 -256 -169 -3 0 -18 -9 -34 -20 -26 -19 -344 -180 -354 -180 -3 0 -29 -11 -58 -24 -227 -101 -642 -225 -973 -290 -125 -25 -397 -70 -480 -80 -22 -3 -76 -9 -120 -15 -100 -13 -142 -17 -357 -36 -29 -2 -98 -7 -153 -10 -267 -15 -436 -28 -525 -40 -14 -2 -45 -7 -70 -10 -59 -8 -99 -14 -130 -20 -14 -3 -41 -7 -60 -11 -19 -3 -39 -7 -45 -8 -5 -2 -28 -6 -50 -10 -234 -45 -617 -165 -822 -257 -23 -10 -45 -19 -48 -19 -7 0 -284 -138 -340 -170 -631 -355 -1107 -842 -1402 -1432 -159 -320 -251 -633 -308 -1056 -26 -190 -27 -635 -1 -832 3 -19 7 -59 10 -89 4 -30 11 -84 17 -120 6 -36 12 -77 14 -91 7 -43 33 -174 39 -190 3 -8 7 -28 9 -45 6 -35 52 -221 72 -285 7 -25 23 -79 35 -120 29 -99 118 -283 189 -389 67 -103 203 -244 286 -298 75 -49 178 -103 196 -103 16 0 27 16 77 110 124 231 304 529 485 800 82 124 153 227 157 230 3 3 28 36 54 74 116 167 384 497 546 671 148 160 448 450 560 542 14 12 54 45 90 75 88 73 219 172 313 238 42 29 77 57 77 62 0 5 -13 34 -29 66 -69 137 -149 405 -181 602 -7 41 -14 82 -15 90 -1 8 -6 46 -10 83 -3 37 -8 77 -10 88 -2 11 -7 65 -11 122 -3 56 -8 104 -9 107 -2 3 0 12 5 19 6 10 10 8 15 -10 10 -34 167 -346 228 -454 118 -210 319 -515 340 -515 4 0 40 18 80 40 230 128 521 255 787 343 118 40 336 102 395 113 28 5 53 11 105 23 25 5 59 12 75 15 17 3 41 8 55 11 34 7 274 43 335 50 152 18 372 29 565 29 194 0 481 -11 489 -19 2 -3 -3 -6 -12 -6 -9 -1 -20 -2 -24 -3 -33 -8 -73 -16 -98 -21 -61 -10 -264 -56 -390 -90 -649 -170 -1243 -437 -1770 -794 -60 -41 -121 -82 -134 -93 l-24 -18 124 -59 c109 -52 282 -116 404 -149 92 -26 192 -51 220 -55 17 -3 64 -12 105 -21 71 -14 151 -28 230 -41 19 -3 46 -7 60 -10 14 -2 45 -7 70 -10 25 -4 56 -8 70 -10 14 -2 53 -7 88 -10 35 -4 71 -8 81 -10 10 -2 51 -6 92 -9 101 -9 141 -14 147 -21 3 -3 -15 -5 -39 -6 -24 0 -52 -2 -62 -4 -21 -4 -139 -12 -307 -22 -242 -14 -700 -7 -880 13 -41 4 -187 27 -250 39 -125 23 -274 68 -373 111 -43 19 -81 34 -86 34 -4 0 -16 -8 -27 -17 -10 -10 -37 -33 -59 -52 -166 -141 -422 -395 -592 -586 -228 -257 -536 -672 -688 -925 -21 -36 -43 -66 -47 -68 -4 -2 -8 -7 -8 -11 0 -5 -24 -48 -54 -97 -156 -261 -493 -915 -480 -935 2 -3 47 -21 101 -38 54 -18 107 -36 118 -41 58 -25 458 -138 640 -181 118 -27 126 -29 155 -35 14 -2 45 -9 70 -14 66 -15 137 -28 300 -55 37 -7 248 -33 305 -39 28 -3 84 -9 125 -13 163 -16 792 -8 913 12 12 2 58 9 102 15 248 35 423 76 665 157 58 19 134 46 170 60 86 33 344 156 348 166 2 4 8 7 13 7 14 0 205 116 303 184 180 126 287 216 466 396 282 281 511 593 775 1055 43 75 178 347 225 455 100 227 236 602 286 790 59 220 95 364 120 485 6 28 45 245 50 275 2 14 7 41 10 60 3 19 8 49 10 65 2 17 6 46 9 65 15 100 35 262 40 335 3 39 8 89 10 112 22 225 33 803 21 1043 -3 41 -7 129 -11 195 -3 66 -8 136 -10 155 -2 19 -6 76 -10 125 -3 50 -8 101 -10 115 -2 14 -6 57 -10 95 -7 72 -12 113 -20 175 -2 19 -7 55 -10 80 -6 46 -43 295 -51 340 -2 14 -9 54 -15 90 -5 36 -16 97 -24 135 -8 39 -17 84 -20 100 -12 68 -18 97 -50 248 -19 87 -47 204 -61 260 -14 56 -27 109 -29 117 -30 147 -232 810 -253 832 -4 4 -7 -23 -8 -60z"
                  ></path>
                </svg>
              </a>
              <button className="navbar-close">
                <svg
                  className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <button
            className="bg-primary px-4 py-1.5 text-sm capitalize shadow-none text-white rounded hover:shadow-none"
            size="sm"
            onClick={showModal}
          >
            Book free demo
          </button>
        </div>
      </Collapse>
    </Navbar>
  );
}
