import React from 'react';
import { Box, Input, Button } from '@chakra-ui/react';

const ProfileManager = ({ user, onUpdateProfile }) => {
  const [name, setName] = React.useState(user.name || '');

  const handleUpdate = () => {
    onUpdateProfile({ ...user, name });
  };

  return (
    <Box>
      <Input
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button onClick={handleUpdate}>Update Profile</Button>
    </Box>
  );
};

export default ProfileManager;
