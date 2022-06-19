import { createSignal, For, Show } from 'solid-js'

const navs = [
  {
    name: 'Home',
    to: '/'
  },
  {
    name: 'Blog',
    to: 'https://blog.mhalong.com',
    target: '_blank'
  },
  {
    name: 'About',
    to: '/about'
  },
  {
    name: 'Contact',
    to: '/contact'
  }
]

export const Navbar = () => {
  const [isOpen, setIsOpen] = createSignal(false)
  return (
    <nav class="bg-secondary">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen())}
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <Show when={!isOpen()}>
                <svg
                  class="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </Show>
              <Show when={isOpen()}>
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </Show>
            </button>
          </div>
          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
            <div class="flex-shrink-0 flex items-center">
              <img
                class="block lg:hidden h-6 w-auto"
                src={'/logo.png'}
                alt="Workflow"
              />
              <img
                class="hidden lg:block h-6 w-auto"
                src={'/logo.png'}
                alt="Workflow"
              />
            </div>
            <div class="hidden sm:block sm:ml-6">
              <div class="flex space-x-4">
                <For each={navs}>
                  {(nav) => (
                    <a
                      href={nav.to}
                      target={nav.target}
                      class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                      aria-current="page"
                    >
                      {nav.name}
                    </a>
                  )}
                </For>
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Show when={isOpen()}>
        <NavbarMobile/>
      </Show>
    </nav>

  )
}

const NavbarMobile = () => {
  return (
    <div class="sm:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1">
        {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
        <For each={navs}>
          {(nav) => (
            <a
              href={nav.to}
              target={nav.target}
              class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
              aria-current="page"
            >
              {nav.name}
            </a>
          )}
        </For>
      </div>
    </div>
  )
}
