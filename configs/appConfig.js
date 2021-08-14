import * as React from 'react'
import { IoCalendar, IoGrid, IoHelpBuoy } from 'react-icons/io5'
import { MdWeb } from 'react-icons/md'

const app = {
  lang: "eng",
  projectName: "filmhub",

  links : [
    {
      label: 'Buyers',
      href: '#',
    },
    {
      label: 'Learn More',
      children: [
        {
          label: 'Get Help',
          description: 'Read our documentation and FAQs, or get in touch.',
          href: '#',
          icon: <IoHelpBuoy />,
        },
        {
          label: 'Events & Meetups',
          description: 'Discover and join your local Sketch community.',
          href: '#',
          icon: <IoCalendar />,
        },
        {
          label: 'Extensions',
          description: 'Do even more with Assistants, plugins and integrations.',
          href: '#',
          icon: <IoGrid />,
        },
        {
          label: 'Blog',
          description: 'Get updates, articles and insights from the team.',
          href: '#',
          icon: <MdWeb />,
        },
      ],
    },
  ]
};

export default app;
