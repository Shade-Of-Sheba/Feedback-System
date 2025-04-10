import type { NextApiRequest, NextApiResponse } from 'next';

interface CommonIssue {
  issue: string;
  count: number;
}

const dummyCommonIssues: CommonIssue[] = [
  { issue: 'waiting time', count: 2 },
  { issue: 'staff attitude', count: 1 },
];

export default function handler(req: NextApiRequest, res: NextApiResponse<CommonIssue[]>) {
  res.status(200).json(dummyCommonIssues);
}