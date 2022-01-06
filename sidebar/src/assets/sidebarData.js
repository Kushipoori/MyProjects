import React from 'react';
import * as IconName  from "react-icons/ai";

export const SidebarData = [
  {
    path: '/search',
    icon: <IconName.AiOutlineSearch />,
    cName: 'nav-text'
  },
  {
    path: '/',
    icon: <IconName.AiFillHome />,
    cName: 'nav-text'
  },
  {
    path: '/video',
    icon: <IconName.AiOutlineVideoCamera />,
    cName: 'nav-text'
  },
  {
    path: '/moniter',
     icon: <IconName.AiFillUsb />,
    cName: 'nav-text'
  },

  {
    path: '/music',
    icon: <IconName.AiTwotoneCustomerService />,
    cName: 'nav-text'
  },
  {
    path: '/record',
    icon: <IconName.AiOutlineAudioMuted />,
    cName: 'nav-text'
  },
  {
    path: '/user',
     icon: <IconName.AiOutlineUser />,
    cName: 'nav-text'
  },

  {
    path: '/file',
    icon: <IconName.AiFillFolderOpen />,
    cName: 'nav-text'
  }
];