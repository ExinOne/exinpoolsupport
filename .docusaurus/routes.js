import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug/',
    component: ComponentCreator('/__docusaurus/debug/', '546'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config/',
    component: ComponentCreator('/__docusaurus/debug/config/', '8a8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content/',
    component: ComponentCreator('/__docusaurus/debug/content/', '259'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData/',
    component: ComponentCreator('/__docusaurus/debug/globalData/', '178'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata/',
    component: ComponentCreator('/__docusaurus/debug/metadata/', 'd6c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry/',
    component: ComponentCreator('/__docusaurus/debug/registry/', '6e3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes/',
    component: ComponentCreator('/__docusaurus/debug/routes/', 'cab'),
    exact: true
  },
  {
    path: '/markdown-page/',
    component: ComponentCreator('/markdown-page/', '54d'),
    exact: true
  },
  {
    path: '/showcase/',
    component: ComponentCreator('/showcase/', '7e6'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', '0cf'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', 'bb6'),
        routes: [
          {
            path: '/docs/',
            component: ComponentCreator('/docs/', 'b45'),
            routes: [
              {
                path: '/docs/introduction/',
                component: ComponentCreator('/docs/introduction/', '739'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/nodes/',
                component: ComponentCreator('/docs/nodes/', '6ae'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/Nodes/axie/',
                component: ComponentCreator('/docs/Nodes/axie/', '732'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/Nodes/ethereum/',
                component: ComponentCreator('/docs/Nodes/ethereum/', '87b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/Nodes/mixin/',
                component: ComponentCreator('/docs/Nodes/mixin/', 'ead'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/Nodes/polkadot/',
                component: ComponentCreator('/docs/Nodes/polkadot/', '891'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/Nodes/solana/',
                component: ComponentCreator('/docs/Nodes/solana/', 'dd2'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/ReservesPlan/',
                component: ComponentCreator('/docs/ReservesPlan/', '39d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/rewards/',
                component: ComponentCreator('/docs/rewards/', '22d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/Verify/',
                component: ComponentCreator('/docs/Verify/', '524'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
