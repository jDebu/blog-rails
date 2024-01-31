import React from 'react'
import { HomePage } from '../pages/HomePage'
import { About } from '../pages/About'

const getTabsTree = () => [
  {
    name: 'Home',
    path: '/',
    component: <HomePage />,
    visible: true
  },
  {
    name: 'About',
    path: '/about',
    component: <About />,
    visible: true
  }
]

const flatTabsTreeAndFilterVisible = tabs => {
  let allTabs = [...tabs]
  tabs.forEach(tab => {
    if (tab.subMenu?.length) {
      allTabs = [...allTabs, ...tab.subMenu]
    }
  })
  return allTabs.filter(tab => tab.visible)
}

const getSubTabsSelectedAndVisible = (tabsTree, parentTabSel) =>
  tabsTree.find(menu => menu.name === parentTabSel)?.subMenu.filter(subTab => subTab.visible)

const isParentTab = tab => (tab.subMenu ? true : false)
const hasChildTabSelected = (tabs, pathname) => tabs.subMenu?.find(child => child.path === pathname)
const isLastParentTab = (index, tabs) => index + 1 === tabs.filter(tab => !tab.isChildTab).length

export {
  flatTabsTreeAndFilterVisible,
  getSubTabsSelectedAndVisible,
  getTabsTree,
  hasChildTabSelected,
  isLastParentTab,
  isParentTab
}

