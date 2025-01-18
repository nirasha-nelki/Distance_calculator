# distance calculator

This simple React project allows users to calculate the distance between two addresses and view the locations on a map. Users can also choose their current location as the starting point. The project integrates Leaflet.js for map visualization and the OpenCage API for geocoding.

## Features
- Enter two addresses to calculate the distance between them.
- Option to use the user's current location as the starting point.
- Mark the given locations in a map using Leaflet.js.
- Fetch geocodes (latitude and longitude) for addresses using the OpenCage API.
- State management handled with Zustand.

## Prerequisites
- Node.js and npm installed on your system.
- An API key for the OpenCage Geocoder API. You can get one by signing up at [OpenCage](https://opencagedata.com/api).

## Installation

1. Clone the repository:

```bash
    git clone https://github.com/nirasha-nelki/Distance_calculator.git
    cd distance_calculator
```
2. Install the dependencies:

```bash
    npm install
```

3. Create an ```.env``` file in the root directory and add your OpenCage API key:

```bash
    VITE_OPENCAGHE_API_KEY = api_key
```

4. Start the development server:
```bash
    npm run dev
```

## Usage
- Open the application in your browser at http://localhost:5173.
- Enter the origin and destination addresses in the input fields.
- Select "Use My Location" to set your current location as the starting point.
- The map will display the two locations. The calculated distance will also be shown.

## Technologies Used
- **React.js**: Frontend framework.
- **Leaflet.js**: For map rendering and visualization.
- **OpenCage API**: For geocoding addresses into latitude and longitude.
- **Zustand**: State management library.

## Project Structure
- ```src/components```: Contains React components like the map and input fields.
- ```src/store```: Contains the Zustand store for managing global state.
- ```src/utils```: Utility functions, including API calls to OpenCage.
- ```src/constants```: Values of the constants used.
- ```src/types```: Different interfaces used.
- ```src/pages```: Collection of components - rendered in the App.tsx.

## How the distance is calculated
When the user has typed the address, the relevant latitude and longitude are calculated using the OpenCage API.
Then the distance between the two addresses is calculated by passing the latitudes and longitudes of both locations to the [Haversine Formula](https://en.wikipedia.org/wiki/Haversine_formula)

