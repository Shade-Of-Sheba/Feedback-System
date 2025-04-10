import React, { useState, useEffect } from 'react';

type Feedback = {
  id: number;
  rating: number;
  comment: string;
};

const FeedbackDashboard = () => {
  const [feedback, setFeedback] = useState<Feedback[]>([]); 

  useEffect(() => {
    
    const interval = setInterval(() => {
      const newFeedback: Feedback = { 
        id: Date.now(), 
        rating: Math.floor(Math.random() * 5) + 1, 
        comment: "Great service!" 
      };
      setFeedback((prev) => [newFeedback, ...prev]); // Corrected state update with proper type
    }, 3000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div>
      <h2>Real-Time Feedback Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Rating</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {feedback.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.rating}</td>
              <td>{item.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackDashboard;
