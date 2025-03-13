const PrayerTimes = {
  slug: 'prayer-times',
  admin: {
    useAsTitle: 'date',
  },
  fields: [
    {
      name: 'date',
      type: 'date',
      required: true,
      unique: true,
    },
    {
      name: 'imsak',
      type: 'text',
      required: true,
    },
    {
      name: 'fajr',
      type: 'text',
      required: true,
    },
    {
      name: 'solopp',
      type: 'text',
      required: true,
    },
    {
      name: 'dhur',
      type: 'text',
      required: true,
    },
    {
      name: 'asr',
      type: 'text',
      required: true,
    },
    {
      name: 'solned',
      type: 'text',
      required: true,
    },
    {
      name: 'maghrib',
      type: 'text',
      required: true,
    },
    {
      name: 'isha',
      type: 'text',
      required: true,
    },
    {
      name: 'midnatt',
      type: 'text',
      required: true,
    },
  ],
}

export default PrayerTimes
