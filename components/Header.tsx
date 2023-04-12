
import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useActivePath } from 'Hooks/useActivePath/useActive'
import { useRouter, } from 'next/router'


const navigation = [
  { id: 1, name: 'Setup', href: '/setup' },
  { id: 2, name: 'Components', href: '/components' },
  { id: 3, name: 'Projects', href: '/projects' },
  { id: 4, name: 'Blog', href: '/blog' },
]

const Header = () => {
  /*  const router = useRouter();
   const [activeItemId, setActiveItemId] = React.useState(null);
 
   React.useEffect(() => {
     const matchingItem = navigation.find(item => router.asPath.startsWith(item.href));
     if (matchingItem) {
       setActiveItemId(matchingItem.id);
     }
   }, [router.asPath]); */
  return (
    <div>
      <div className="relative ">
        <div className=" max-w-7xl ">
          <div className="relative z-100  pb-4 lg:w-full  ">
            <Popover>
              <div className="relative px-4 pt-4 sm:px-6 lg:px-8">
                <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                  <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                    <div className="flex w-full items-center justify-between md:w-auto">
                      <a href="/">
                        <span className="sr-only">Default Blog</span>
                        <img
                          alt="Default"
                          className="h-16 w-auto lg:h-14"
                          src="https://www.imagemhost.com.br/images/2023/02/01/SALogo.png"
                        />
                      </a>
                      <div className="-mr-2 flex items-center md:hidden">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md  p-2 text-[#FDFFA6] hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                          <span className="sr-only">Open main menu</span>
                          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                    {navigation.map((item) => (
                      <a
                        key={item.id}
                        href={item.href}

                        className={`text-sm font-semibold tracking-wide uppercase hover:text-[#FDFFA6] '(item.href)' ? 'text-[#FDFFA6]' : ''}`}
                      >
                        {item.name}
                      </a>
                    ))}

                  </div>
                </nav>
              </div>

              <Transition
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition md:hidden"
                >
                  <div className="overflow-hidden rounded-lg bg-slate-600 shadow-md ring-1 ring-black ring-opacity-5">
                    <div className="flex items-center justify-between px-5 pt-4">
                      <div>
                        <img
                          className="h-14 w-auto hidden"
                          src="https://i.ibb.co/0JJ4GyL/Default-Logo.png"
                          alt=""
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-slate-600 p-2 text-[#FDFFA6] hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#FDFFA6] ">
                          <span className="sr-only">Close main menu</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="space-y-1 px-2 pt-2 pb-3 bg-slate-600 z-10">
                      {navigation.map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          className="block rounded-md px-3 py-2 text-sm font-semibold tracking-wide text-center bg-[#FDFFA6] text-[#6590FF] uppercase "
                        >
                          <p>
                            {item.name}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Header