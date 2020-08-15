/*
drawBarChart(data, options, element);

function drawBarChart(data, options, element) {
  // make some divs 'yo
  barDiv = document.getElementById("barchart-wrapper");
}
*/

let colors = [
  '#A20021',
  '#F52F57',
  '#F79D5C',
  '#F3752B',
  '#EDEDF4',
  '#FFAF87',
  '#FF8E72',
  '#ED6A5E',
  '#4CE0B3',
  '#377771',
  '#DAFFED',
  '#9BF3F0',
  '#473198',
  '#4A0D67',
  '#ADFC92'
];

function drawBarChartTest(data) {
  const chartContainer = document.getElementById('barchart-container');
  // clean the chart container
  chartContainer.innerHTML = '';
  // make some divs 'yo
  let d = data.split(',');
  d.forEach(v => v.trim());
  d = d.map(v => Number(v)).sort((a, b) => a - b);
  console.log(d);

  for (let [i, val] of d.entries()) {
    console.log(val);
    let barDiv = document.createElement('div');
    barDiv.id = val;
    barDiv.innerHTML = val;
    barDiv.className = 'bar';
    barDiv.style.backgroundColor = colors[i];
    barDiv.style.width = (3 * val) + '%';
    barDiv.style.height = '20px';
    barDiv.style.paddingTop = '20px';
    barDiv.style.paddingBottom = '20px';
    barDiv.style.textAlign = 'left';
    barDiv.style.paddingBottom = '20px';
    barDiv.style.textShadow = '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white';
    chartContainer.appendChild(barDiv);
  }
}
