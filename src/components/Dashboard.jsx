import React from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';
import HabitCard from './HabitCard';
import './Dashboard.css';

const Dashboard = ({ habits, onHabitComplete }) => {
  return (
    <VStack spacing={4} align="stretch">
      <Text className='dashboard-title'  fontWeight="bold">Your Daily Habits</Text>
      {habits.map(habit => (
        <HabitCard key={habit.id} habit={habit} onComplete={onHabitComplete} />
      ))}
    </VStack>
  );
};

export default Dashboard;
