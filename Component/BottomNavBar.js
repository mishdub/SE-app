// BottomNavBar.js

import React from 'react';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';

const BottomNavBar = () => {
  return (
    <BottomNavigation
      selectedIndex={0} // Set the appropriate index based on your use case
      onSelect={(index) => {/* Handle bottom tab selection if needed */}}
      appearance="noIndicator"
    >
      <BottomNavigationTab title="Profile" />
      <BottomNavigationTab title="Other Tab" />
      {/* Add more tabs as needed */}
    </BottomNavigation>
  );
};

export default BottomNavBar;
