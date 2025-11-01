import PlaceCard from '@/componets/PlaceCard';
import { IEvent } from '@/database';
import { cacheLife } from 'next/cache';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const Page = async () => {
  'use cache';
  cacheLife('hours');

  let events: IEvent[] = [];

  try {
    const response = await fetch(`${BASE_URL}/api/events`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (response.ok) {
      const data = await response.json();
      events = data.events || [];
    }
  } catch (error) {
    console.warn('Failed to fetch events during build:', error);
    // Build will continue with empty events array
  }

  return (
    <section>
      <h1 className='text-center'>
        The Hub for Every Dev <br /> Event You Can't Miss
      </h1>
      <p className='text-center mt-5'>
        Hackathons, Meetups, and Conferences, All in One Place
      </p>

      <div className='mt-20 space-y-7'>
        <h3>Featured Events</h3>

        {events.length > 0 ? (
          <ul className='events'>
            {events.map((event: IEvent) => (
              <li key={event.title} className='list-none'>
                <PlaceCard {...event} />
              </li>
            ))}
          </ul>
        ) : (
          <p className='text-center text-gray-500 mt-8'>
            No events available at the moment
          </p>
        )}
      </div>
    </section>
  );
};

export default Page;
