/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as MotionImport } from './routes/motion'
import { Route as DataImport } from './routes/data'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const MotionRoute = MotionImport.update({
  id: '/motion',
  path: '/motion',
  getParentRoute: () => rootRoute,
} as any)

const DataRoute = DataImport.update({
  id: '/data',
  path: '/data',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/data': {
      id: '/data'
      path: '/data'
      fullPath: '/data'
      preLoaderRoute: typeof DataImport
      parentRoute: typeof rootRoute
    }
    '/motion': {
      id: '/motion'
      path: '/motion'
      fullPath: '/motion'
      preLoaderRoute: typeof MotionImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/data': typeof DataRoute
  '/motion': typeof MotionRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/data': typeof DataRoute
  '/motion': typeof MotionRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/data': typeof DataRoute
  '/motion': typeof MotionRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/data' | '/motion'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/data' | '/motion'
  id: '__root__' | '/' | '/about' | '/data' | '/motion'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  DataRoute: typeof DataRoute
  MotionRoute: typeof MotionRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  DataRoute: DataRoute,
  MotionRoute: MotionRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/data",
        "/motion"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/data": {
      "filePath": "data.tsx"
    },
    "/motion": {
      "filePath": "motion.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
