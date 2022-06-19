import { Component, JSX } from 'solid-js'

export const LayoutDefault: Component<{ children: JSX.Element }> = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
}
