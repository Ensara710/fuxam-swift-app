import React from "react";
import  * as Font from 'expo-font';

async function loadCustomFont() {
    await Font.loadAsync({
      'Lucide': require("https://example.com/path-to-lucide-font-file.ttf"),
    });
  }
  
  React.useEffect(() => {
    loadCustomFont();
  }, []);  

  