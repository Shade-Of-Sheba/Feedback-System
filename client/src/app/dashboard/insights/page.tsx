"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Chart as ChartJS,
  ChartData,
  ChartOptions,
  BarController,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarController, CategoryScale, LinearScale, BarElement);

interface SentimentCounts {
  positive: number;
  negative: number;
  neutral: number;
}

interface CommonIssue {
  issue: string;
  count: number;
}

const Insights = () => {
  const [sentimentCounts, setSentimentCounts] = useState<SentimentCounts>({
    positive: 0,
    negative: 0,
    neutral: 0,
  });
  const [commonIssues, setCommonIssues] = useState<CommonIssue[]>([]);

  useEffect(() => {
    // Replace with your actual API endpoint to fetch sentiment counts
    const fetchSentimentCounts = async () => {
      try {
        const response = await fetch('/api/sentiment_counts'); // Assuming your backend serves data here
        if (response.ok) {
          const data: SentimentCounts = await response.json();
          setSentimentCounts(data);
        } else {
          console.error('Failed to fetch sentiment counts');
        }
      } catch (error) {
        console.error('Error fetching sentiment counts:', error);
      }
    };

    // Replace with your actual API endpoint to fetch common negative issues
    const fetchCommonIssues = async () => {
      try {
        const response = await fetch('/api/insights/common-issues'); // Assuming your backend serves data here
        if (response.ok) {
          const data: CommonIssue[] = await response.json();
          setCommonIssues(data);
        } else {
          console.error('Failed to fetch common issues');
        }
      } catch (error) {
        console.error('Error fetching common issues:', error);
      }
    };

    fetchSentimentCounts();
    fetchCommonIssues();
  }, []);

  const sentimentBarChartData: ChartData<'bar', number[], string> = {
    labels: ['Positive', 'Negative', 'Neutral'],
    datasets: [
      {
        label: 'Overall Sentiment Distribution',
        data: [sentimentCounts.positive, sentimentCounts.negative, sentimentCounts.neutral],
        backgroundColor: ['#4CAF50', '#F44336', '#FFC107'],
      },
    ],
  };

  const sentimentBarChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">Staff Training & Operational Insights</h1>
      <Link href="/dashboard" className="text-blue-500 hover:underline mb-4 block">
        Back to Dashboard
      </Link>

      <div className="bg-white shadow rounded-md p-4 mb-6">
        <h2 className="font-semibold mb-2">Overall Sentiment Overview</h2>
        <div className="relative h-48">
          <Bar data={sentimentBarChartData} options={sentimentBarChartOptions} />
        </div>
      </div>

      <div className="bg-white shadow rounded-md p-4">
        <h2 className="font-semibold mb-2">Common Negative Feedback Issues</h2>
        {commonIssues.length > 0 ? (
          <ul className="list-disc pl-5">
            {commonIssues.map((issue) => (
              <li key={issue.issue}>
                <strong>{issue.issue}:</strong> Mentioned {issue.count} times
              </li>
            ))}
          </ul>
        ) : (
          <p>No significant negative feedback trends identified.</p>
        )}
        {commonIssues.length > 0 && (
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Potential Areas for Improvement</h3>
            <ul className="list-disc pl-5">
              {commonIssues.slice(0, 3).map((issue) => (
                <li key={`suggestion-${issue.issue}`}>Consider addressing issues related to "{issue.issue}".</li>
              ))}
              {/* More sophisticated logic for suggesting improvements based on keywords could be added here */}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Insights;