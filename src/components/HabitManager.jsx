import React, { useState } from 'react';
import { Box, Input, Button, VStack } from '@chakra-ui/react';

const HabitManager = ({ onAddHabit }) => {
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('');

  const handleSubmit = () => {
    onAddHabit({ name, goal, streak: 0 });
    setName('');
    setGoal('');
  };

  return (
    <Box>
      <VStack spacing={4}>
        <Input
          placeholder="Habit Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <Button onClick={handleSubmit}>Add Habit</Button>
      </VStack>
    </Box>
  );
};

export default HabitManager;
