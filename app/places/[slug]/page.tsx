import { Suspense } from 'react';
import PlaceDetails from '@/componets/PlaceDetails';

const PlaceDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = params.then((p) => p.slug);

  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <PlaceDetails params={slug} />
      </Suspense>
    </main>
  );
};
export default PlaceDetailsPage;
