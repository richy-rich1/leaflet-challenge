# USGS Earthquake Data Visualization Project


## Project Overview
Developed an interactive web-based visualization system for the United States Geological Survey (USGS) to display real-time earthquake data globally. This tool addresses USGS's need for effective data presentation to educate the public and other government organizations about seismic activity worldwide.

## Technical Challenge
The USGS collects vast amounts of seismic data globally, updated at 5-minute intervals. The challenge was to transform this extensive dataset into an intuitive, interactive visualization that could effectively communicate earthquake patterns and risks to both technical and non-technical audiences.

### Data Integration
- Integrated with USGS GeoJSON Feed API for real-time earthquake data
- Implemented automated data refresh functionality to maintain current information
- Processed and normalized raw seismic data for visualization purposes

### Visualization Features
- Built an interactive map using Leaflet.js to plot global earthquake locations
- Developed dynamic markers that encode multiple data dimensions:
  - Marker size correlates with earthquake magnitude
  - Color gradient indicates earthquake depth
  - Interactive popups display detailed seismic information
- Implemented a comprehensive legend system providing context for visual encodings

### Technical Architecture
- Frontend: HTML5, CSS3, JavaScript
- Mapping: Leaflet.js library
- Data Source: USGS GeoJSON API
- Data Processing: Custom JavaScript modules for data transformation

### User Interface
- Interactive map with zoom and pan capabilities
- Click-responsive markers revealing detailed earthquake information
- Color-coded depth scale for intuitive understanding
- Size-graduated markers indicating magnitude impact
- Responsive design for cross-platform compatibility

## Impact
This visualization tool enables USGS to:
- Present complex seismic data in an accessible format
- Educate stakeholders about global seismic activity patterns
- Support data-driven decision-making for disaster preparedness
- Enhance public understanding of earthquake risks and patterns

## Future Enhancements
- Implementation of temporal analysis features
- Addition of historical data comparison capabilities
- Integration of predictive modeling visualizations
- Development of custom filtering and search functionality

## Installation

1. Clone the repository:
```bash
git clone 
```

2. Navigate to the project directory:
```bash
cd usgs-earthquake-visualization
```

3. Open `index.html` in your preferred browser

## Usage

1. The map will load automatically with the most recent earthquake data
2. Click on any marker to view detailed information about that earthquake
3. Use the legend to understand the depth and magnitude representations
4. Zoom and pan the map to explore different regions

## Dependencies

- Leaflet.js
- D3.js (for data handling)
- Modern web browser with JavaScript enabled

## Contributing

1. Fork the repository
2. Create your feature branch 
3. Commit your changes 
4. Push to the branch
5. Open a Pull Request



## Acknowledgments

- USGS for providing the earthquake data API
- Leaflet.js for the mapping functionality
- All contributors who have helped with the project

