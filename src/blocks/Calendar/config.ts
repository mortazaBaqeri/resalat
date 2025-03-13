import type { Block } from 'payload'

export const Calendar: Block = {
  slug: 'calendar',
  interfaceName: 'CalendarBlock',
  fields: [
    {
      name: 'events',
      type: 'array',
      localized: true,
      label: 'Events',
      labels: {
        singular: 'Event',
        plural: 'Events',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          localized: true,
          required: true,
          label: 'Event Title',
        },
        {
          name: 'description',
          localized: true,
          type: 'textarea',
          label: 'Event Description',
        },
        {
          name: 'date',
          type: 'date',
          required: true,
          label: 'Event Date',
        },
        {
          name: 'time',
          type: 'text',
          label: 'Event Time',
        },
        {
          name: 'location',
          type: 'text',
          label: 'Event Location',
        },
      ],
    },
  ],
  labels: {
    singular: 'Calendar',
    plural: 'Calendars',
  },
}
