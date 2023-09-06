import React, { FC } from 'react';
import { Text, View, ViewStyle } from 'react-native';

interface MyItemCardProps {
  style: ViewStyle;
  item: {
    title: string;
    // Add other properties of item if needed
  };
  dayIndex: number;
  daysTotal: number;
}

const MyItemCard: FC<MyItemCardProps> = ({ style, item, dayIndex, daysTotal }) => {
  return (
    <View style={{
        ...style, // apply calculated styles, be careful not to override these accidentally (unless you know what you are doing)
        backgroundColor: 'red',
        borderRadius: 10,
        elevation: 5,
    }}>
        <Text>{item.title}</Text>
        <Text>{dayIndex} of {daysTotal}</Text>
    </View>
  );
};

export default MyItemCard;
