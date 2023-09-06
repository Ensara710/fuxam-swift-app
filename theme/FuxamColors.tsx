import React from "react";

interface ColorSchemeType {
    [key: string]: {
        [key: string]: string;
    };
}

const colorSchemes: ColorSchemeType = {
    light: {
        background: 'rgba(249, 249, 249, 1)',
      contrast: 'rgba(5, 14, 63, 1)',
      foreground: 'rgba(255, 255, 255, 1)',
      card: 'rgba(255, 255, 255, 1)',
      cardContrast: 'rgba(242, 242, 242, 1)',
      popover: 'rgba(255, 255, 255, 1)',
      popoverContrast: 'rgba(5, 14, 63, 1)',
      primary: 'rgba(43, 93, 230, 1)',
      primaryContrast: 'rgba(225, 242, 250, 1)',
      secondary: 'rgba(229, 241, 250, 1)',
      secondaryContrast: 'rgba(14, 24, 48, 1)',
      muted: 'rgba(199, 204, 215, 1)',
      mutedContrast: 'rgba(74, 97, 119, 1)',
      accent: 'rgba(236, 245, 250, 1)',
      accentContrast: 'rgba(14, 24, 48, 1)',
      destructive: 'rgba(217, 48, 37, 1)',
      destructiveContrast: 'rgba(39, 0, 0, 1)',
      warning: 'rgba(252, 243, 207, 1)',
      warningContrast: 'rgba(64, 42, 26, 1)',
      positive: 'rgba(45, 203, 117, 1)',
      positiveContrast: 'rgba(16, 67, 41, 1)',
      border: 'rgba(228, 236, 240, 1)',
      input: 'rgba(228, 236, 240, 1)',
      ring: 'rgba(68, 89, 191, 1)' 
      },
      dark: {
        background: 'rgba(5, 6, 13, 1)',
        contrast: 'rgba(225, 241, 250, 1)',
        foreground: 'rgba(15, 26, 53, 1)',
        card: 'rgba(7, 15, 63, 1)',
        cardContrast: 'rgba(225, 241, 250, 1)',
        popover: 'rgba(7, 15, 63, 1)',
        popoverContrast: 'rgba(225, 241, 250, 1)',
        primary: 'rgba(57, 125, 246, 1)',
        primaryContrast: 'rgba(14, 25, 49, 1)',
        secondary: 'rgba(16, 41, 64, 1)',
        secondaryContrast: 'rgba(225, 241, 250, 1)',
        muted: 'rgba(19, 45, 69, 1)',
        mutedContrast: 'rgba(88, 115, 153, 1)',
        accent: 'rgba(16, 41, 64, 1)',
        accentContrast: 'rgba(225, 241, 250, 1)',
        destructive: 'rgba(190, 64, 64, 1)',
        destructiveContrast: 'rgba(242, 227, 241, 1)',
        warning: 'rgba(78, 41, 1, 1)',
        warningContrast: 'rgba(246, 239, 239, 1)',
        positive: 'rgba(7, 160, 72, 1)',
        positiveContrast: 'rgba(179, 202, 197, 1)',
        border: 'rgba(16, 41, 64, 1)',
        input: 'rgba(16, 41, 64, 1)',
        ring: 'rgba(48, 132, 195, 1)'
      
      },
    }
export default colorSchemes;