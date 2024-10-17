import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';


const HabitCard = ({ habit, onComplete }) => {
  return (
    <Box p={4} borderWidth={2} borderRadius="md">
      <Text fontWeight="bold">{habit.name}</Text>
      <Text>Streak: {habit.streak}</Text>
      <Button onClick={() => onComplete(habit.id)}>Complete</Button>
    </Box>
  );
};

export default HabitCard;
