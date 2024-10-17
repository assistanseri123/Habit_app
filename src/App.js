// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import HabitManager from './components/HabitManager';
import ProfileManager from './components/ProfileManager';
import NotificationPanel from './components/NotificationPanel';
import { Box, VStack } from '@chakra-ui/react';

const App = () => {
  const [habits, setHabits] = useState([]);
  const [user, setUser] = useState({ name: '' });
  const [notifications, setNotifications] = useState([]);

  const addHabit = (habit) => {
    setHabits([...habits, { id: Date.now(), ...habit }]);
  };

  const completeHabit = (id) => {
    setHabits(habits.map(habit => 
      habit.id === id ? { ...habit, streak: habit.streak + 1 } : habit
    ));
    setNotifications([...notifications, `You completed ${id}!`]);
  };

  const updateProfile = (updatedUser) => {
    setUser(updatedUser);
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <ProfileManager user={user} onUpdateProfile={updateProfile} />
        <HabitManager onAddHabit={addHabit} />
        <Dashboard habits={habits} onHabitComplete={completeHabit} />
        <NotificationPanel messages={notifications} />
      </VStack>
    </Box>
  );
};

export default App;

