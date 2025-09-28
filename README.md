# Weather-Based Outfit Recommender

## Overview
A JavaScript program that recommends an outfit based on weather conditions, temperature, and windiness. This project showcases my ability to use variables, conditionals, functions, and string manipulation to create a practical, user-friendly application.

## Features
- Takes weather condition, temperature, and windiness as inputs.
- Recommends appropriate outfits based on logical conditions.
- Formats weather conditions with proper capitalization.
- Handles edge cases with robust conditional logic.
- Outputs user-friendly messages using template literals.

## Tech Stack
- **JavaScript**: Core logic with functions, conditionals, and string methods.
- **Node.js**: For running and testing the script.

## Usage
Call the `recommendOutfit` function with a weather condition, temperature, and windiness status:
```javascript
console.log(recommendOutfit("sunny", 25, false)); // For Sunny weather at 25°C, wear T-shirt and shorts.
