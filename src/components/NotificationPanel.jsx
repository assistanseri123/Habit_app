import React from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';

const NotificationPanel = ({ messages }) => {
  return (
    <Box p={4} borderWidth={1} borderRadius="md">
      <Text  style={{color: "red", fontFamily:"initial" ,fontSize:30,}} fontWeight="bold">Notifications</Text>
      <VStack spacing={2}>
        {messages.map((msg, index) => (
          <Text key={index}>{msg}</Text>
        ))}
      </VStack>
    </Box>
  );
};

export default NotificationPanel;
