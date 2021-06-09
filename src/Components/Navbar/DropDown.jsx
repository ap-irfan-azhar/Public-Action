import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid'
import NavBarItem from './NavBarItem'



export default function DropDown(props) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className={` ${open ? "bg-gradient-to-br from-ungu-100 to-ungu-300 text-white": "bg-ungu-100 text-ungu-400"} inline-flex rounded-md shadow-sm px-3 py-2 md:text-sm text-base font-medium hover:bg-ungu-150 hover:text-white focus:outline-none focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500`}>
                {props.name}
                {open ? <ChevronUpIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true"/>: <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />}
            </Menu.Button>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <div>
            <Menu.Items
              static
              className="mt-1 z-50 origin-top-right md:w-full w-96 md:absolute md:right-0 rounded-md shadow-lg bg-ungu-125 text-ungu-100  ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="py-1">
                {props.items.map((items) => 
                    <Menu.Item>
                    {({ active }) => (
                    <NavBarItem url={items.url} screen = {props.screen} name={items.title}></NavBarItem>
                    )}
                </Menu.Item>
                )}
              </div>
            </Menu.Items>
            </div>
          </Transition>
        </>
      )}
    </Menu>
  )
}
