import { notFound } from 'next/navigation';

export default function CatchAll() {
  // Trigger Next.js to render the nearest not-found.tsx
  notFound();
}