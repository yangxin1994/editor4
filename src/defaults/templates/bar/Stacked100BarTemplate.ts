import ITemplate from '../../../classes/ITemplate';
import SampleDataGenerator from '../../../utils/SampleDataGenerator';
import thumbnail from './thumbnails/stacked100-bar-chart.png';

const stacked100BarTemplate: ITemplate = {
  id: 'stacked100-bar-chart',
  displayName: '100% stacked bar chart',
  previewSrc: thumbnail,
  config: {
    type: 'XYChart',

    // Setting data
    data: SampleDataGenerator.getCategoryChartData({ numberOfValueFields: 3 }),

    yAxes: [
      {
        type: 'CategoryAxis',
        renderer: {
          minGridDistance: 20,
          grid: {
            location: 0
          }
        },
        dataFields: {
          category: 'category'
        }
      }
    ],

    xAxes: [
      {
        type: 'ValueAxis',
        renderer: {
          maxLabelPosition: 0.98
        },
        calculateTotals: true,
        min: 0,
        max: 100,
        strictMinMax: true
      }
    ],

    // Add series
    series: [
      {
        // Set type
        type: 'ColumnSeries',

        name: 'Series 1',

        // Define data fields
        dataFields: {
          categoryY: 'category',
          valueX: 'value1',
          valueXShow: 'totalPercent'
        },

        // Modify default state
        defaultState: {
          transitionDuration: 1000
        },

        // Set animation options
        sequencedInterpolation: true,
        sequencedInterpolationDelay: 100,

        columns: {
          // Enable tooltips
          tooltipText: 'Series: {name}\n{categoryY}: {valueX}',
          // Disable outline
          strokeOpacity: 0
        },

        stacked: true
      },
      {
        // Set type
        type: 'ColumnSeries',

        name: 'Series 2',

        // Define data fields
        dataFields: {
          categoryY: 'category',
          valueX: 'value2',
          valueXShow: 'totalPercent'
        },

        // Modify default state
        defaultState: {
          transitionDuration: 1000
        },

        // Set animation options
        sequencedInterpolation: true,
        sequencedInterpolationDelay: 100,

        columns: {
          // Enable tooltips
          tooltipText: 'Series: {name}\n{categoryY}: {valueX}',
          // Disable outline
          strokeOpacity: 0
        },

        stacked: true
      },
      {
        // Set type
        type: 'ColumnSeries',

        name: 'Series 3',

        // Define data fields
        dataFields: {
          categoryY: 'category',
          valueX: 'value3',
          valueXShow: 'totalPercent'
        },

        // Modify default state
        defaultState: {
          transitionDuration: 1000
        },

        // Set animation options
        sequencedInterpolation: true,
        sequencedInterpolationDelay: 100,

        columns: {
          // Enable tooltips
          tooltipText: 'Series: {name}\n{categoryY}: {valueX}',
          // Disable outline
          strokeOpacity: 0
        },

        stacked: true
      }
    ]
  }
};

export default stacked100BarTemplate;
