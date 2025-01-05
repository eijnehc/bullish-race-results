# JPMCC Bullish Race Results Tracker

## Overview

This web application provides a comprehensive visualization and analysis of race performance data for runners participating in the JPMCC (JP Morgan Corporate Challenge) races. The application allows users to explore individual runner statistics, track performance progression, and gain insights into race results over multiple years.

## Features

### Key Functionalities

- Interactive race results table
- Detailed runner performance charts
- Year-by-year performance tracking
- Rank and time progression visualization

### Visualizations

1. **Race Timing Table**

   - Sortable table of runner names and their race times
   - Supports multi-year data comparison

2. **Time Progression Chart**

   - Graphical representation of race times across different years
   - Displays time in minutes:seconds format
   - Shows performance trends over time

3. **Rank Progression Chart**
   - Visualizes overall and gender rank progression
   - Allows comparison of ranking performance across years

## Technologies Used

- React
- TypeScript
- Chart.js
- Tailwind CSS
- Vite

## Data Structure

The application uses a JSON-based data structure (`results.json`) to store runner information:

- Runner name
- Race results for multiple years
- Time, overall rank, and gender rank

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies
   ```bash
   npm install
   ```
3. Run the development server
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── components/
│   ├── RaceTimingTable.tsx
│   ├── RunnerDetail.tsx
│   ├── RankChart.tsx
│   └── TimeChart.tsx
├── data/
│   └── results.json
└── App.tsx
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
