"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import {
  Chart as ChartJS,
  ChartData,
  ChartOptions,
  PieController,
  ArcElement,
  BarController,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';

// Register necessary Chart.js components
ChartJS.register(PieController, ArcElement, BarController, CategoryScale, LinearScale, BarElement);

interface FeedbackItem {
  id: number;
  rating: number;
  comment: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  timestamp: string;
}

interface SentimentCounts {
  positive: number;
  negative: number;
  neutral: number;
}

const Dashboard = () => {
  const [feedback, setFeedback] = useState<FeedbackItem[]>([]);
  const [sentimentCounts, setSentimentCounts] = useState<SentimentCounts>({
    positive: 0,
    negative: 0,
    neutral: 0,
  });
  const [filter, setFilter] = useState<'all' | 'positive' | 'neutral' | 'negative'>('all');

  useEffect(() => {
    // Replace with your actual API endpoint to fetch feedback data
    const fetchFeedbackData = async () => {
      try {
        const response = await fetch('/api/feedback'); // Assuming your backend serves data here
        if (response.ok) {
          const data: FeedbackItem[] = await response.json();
          setFeedback(data);
        } else {
          console.error('Failed to fetch feedback');
        }
      } catch (error) {
        console.error('Error fetching feedback:', error);
      }
    };

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

    fetchFeedbackData();
    fetchSentimentCounts();

    // Optional: Implement real-time updates using WebSockets or polling here
    // Example of polling:
    // const intervalId = setInterval(() => {
    //   fetchFeedbackData();
    //   fetchSentimentCounts();
    // }, 3000);
    // return () => clearInterval(intervalId);
  }, []);

  const filteredFeedback =
    filter === 'all'
      ? feedback
      : feedback.filter((item) => item.sentiment === filter);

  const pieChartData: ChartData<'pie', number[], string> = {
    labels: ['Positive', 'Negative', 'Neutral'],
    datasets: [
      {
        data: [sentimentCounts.positive, sentimentCounts.negative, sentimentCounts.neutral],
        backgroundColor: ['#4CAF50', '#F44336', '#FFC107'],
      },
    ],
  };

  const pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    maintainAspectRatio: false,
  };

  const sentimentBarChartData: ChartData<'bar', number[], string> = {
    labels: ['Positive', 'Negative', 'Neutral'],
    datasets: [
      {
        label: 'Sentiment Distribution',
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
      <h1 className="text-2xl font-bold mb-4">Real-Time Feedback Dashboard</h1>
      <div className="mb-4">
        <label htmlFor="sentimentFilter" className="mr-2">
          Filter by Sentiment:
        </label>
        <select
          id="sentimentFilter"
          value={filter}
          onChange={(e) => setFilter(e.target.value as typeof filter)}
          className="border rounded p-1"
        >
          <option value="all">All</option>
          <option value="positive">Positive</option>
          <option value="neutral">Neutral</option>
          <option value="negative">Negative/Urgent</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Feedback List */}
        <div className="bg-white shadow rounded-md p-4">
          <h2 className="font-semibold mb-2">Recent Feedback</h2>
          {filteredFeedback.length > 0 ? (
            <ul className="divide-y divide-gray-200">
              {filteredFeedback.map((item) => (
                <li key={item.id} className={`py-2 ${item.sentiment === 'negative' ? 'border-l-4 border-red-500 pl-4' : ''}`}>
                  <p>
                    <strong>Rating:</strong> {item.rating}
                  </p>
                  <p>
                    <strong>Comment:</strong> {item.comment}
                  </p>
                  <p className={`text-sm text-gray-500`}>
                    <strong>Sentiment:</strong>{' '}
                    <span
                      className={
                        item.sentiment === 'positive'
                          ? 'text-green-500'
                          : item.sentiment === 'negative'
                          ? 'text-red-500'
                          : 'text-yellow-500'
                      }
                    >
                      {item.sentiment.charAt(0).toUpperCase() + item.sentiment.slice(1)}
                    </span>
                  </p>
                  <p className="text-xs text-gray-400">
                    <strong>Timestamp:</strong> {item.timestamp}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No feedback available.</p>
          )}
        </div>

        {/* Sentiment Analysis Charts */}
        <div className="bg-white shadow rounded-md p-4">
          <h2 className="font-semibold mb-2">Sentiment Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative h-48">
              <Pie data={pieChartData} options={pieChartOptions} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="font-bold text-lg">{feedback.length}</p>
                <p className="text-sm text-gray-500">Total Feedback</p>
              </div>
            </div>
            <div className="relative h-48">
              <Bar data={sentimentBarChartData} options={sentimentBarChartOptions} />
            </div>
          </div>
        </div>
      </div>

      {/* Link to Insights Page */}
      <div className="mt-6">
        <Link href="/dashboard/insights" className="text-blue-500 hover:underline">
          View Staff Training & Operational Insights
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;