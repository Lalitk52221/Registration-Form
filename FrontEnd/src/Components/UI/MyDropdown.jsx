import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

function MyDropdown() {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="bg-blue-500 text-white p-2 rounded-lg">
        Select an option
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute mt-2 w-56 bg-white border border-gray-300 rounded-lg shadow-lg">
          <Menu.Item>
            {({ active }) => (
              <div
                className={`${
                  active ? 'bg-blue-100' : ''
                } p-2 cursor-pointer`}
              >
                Option 1
              </div>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <div
                className={`${
                  active ? 'bg-blue-100' : ''
                } p-2 cursor-pointer`}
              >
                Option 2
              </div>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <div
                className={`${
                  active ? 'bg-blue-100' : ''
                } p-2 cursor-pointer`}
              >
                Option 3
              </div>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default MyDropdown;