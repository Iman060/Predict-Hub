import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function MarketDetail() {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      // Redirect to admin app market detail
      window.location.href = `http://localhost:3001/markets/${id}`;
    }
  }, [id]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to market details...</p>
      </div>
    </div>
  );
}
