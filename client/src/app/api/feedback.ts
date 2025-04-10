import type { NextApiRequest, NextApiResponse } from 'next';

interface FeedbackItem {
  id: number;
  rating: number;
  comment: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  timestamp: string;
}

const dummyFeedback: FeedbackItem[] = [
  { id: 1, rating: 5, comment: 'Excellent service!', sentiment: 'positive', timestamp: '2025-04-10 10:00:00' },
  { id: 2, rating: 2, comment: 'Long waiting times.', sentiment: 'negative', timestamp: '2025-04-10 10:15:00' },
  { id: 3, rating: 4, comment: 'Good overall.', sentiment: 'neutral', timestamp: '2025-04-10 10:30:00' },
  { id: 4, rating: 1, comment: 'Unfriendly staff.', sentiment: 'negative', timestamp: '2025-04-10 10:45:00' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse<FeedbackItem[]>) {
  res.status(200).json(dummyFeedback);
}