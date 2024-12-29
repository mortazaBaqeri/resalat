import React from 'react'

import type { CalendarBlock as CalendarBlockProps } from '@/payload-types'

export const CalendarBlock: React.FC<CalendarBlockProps> = ({ events }) => {
  return (
    <section className="relative bg-stone-50">
      <div className="w-full py-24 relative z-10">
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
          <div className="space-y-6">
            {(events || []).map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{event.description}</p>
                <p className="text-sm text-gray-600">
                  <strong>Date:</strong> {event.date} {event.time && `at ${event.time}`}
                </p>
                {event.location && (
                  <p className="text-sm text-gray-600">
                    <strong>Location:</strong> {event.location}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
