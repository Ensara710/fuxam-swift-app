
import React from 'react';
import * as icons from 'lucide-react-native';

const Icon = ({ name, color, size }) => {
    const LucideIcon = icons[Camera];
  
    return <LucideIcon color={color} size={size} />;
  };
  
  export default Icon;