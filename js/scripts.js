/*
drawBarChart(data, options, element);

function drawBarChart(data, options, element) {
  // make some divs 'yo
  barDiv = document.getElementById("barchart-wrapper");
}
*/
const chartContainer = document.getElementById('barchart-container');  // bar holder

let colors = [
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
  '#ADFC92',
  '#808080',
  '#2E86C1',
  '#16A085',
  '#DA70D6',
  '#FFC0CB',
  '#FAEBD7',
  '#708090',
  '#73C6B6',
  '#5499C7',
  '#BB8FCE'
];

function drawBarChartTest(data) {

  // collect the set options
  let options = {
    width : document.getElementById('option-width').value,
    height : document.getElementById('option-height').value,
    spacing : document.getElementById('option-spacing').value,
    xaxis : document.getElementById('option-x-axis').value,
    yaxis : document.getElementById('option-y-axis').value,
    title : document.getElementById('option-title').value,
    text : document.getElementById('option-text-color').value,
    textAlign : $("#option-text-pos :selected").val()
  };

  // report to console what's going on
  console.log('Options currently set: ', options);

  // clean the chart container
  chartContainer.innerHTML = '';

  // make some divs 'yo
  let d = data.split(',');
  d.forEach(v => v.trim());
  d = d.map(v => Number(v)).sort((a, b) => a - b);
  console.log(d);

  // create the Title!
  let title = document.createElement('div');
  title.innerHTML = options.title;
  title.style.position = 'relative';
  title.style.margin = 'auto';
  title.style.fontWeight = 'bold';
  title.style.fontSize = '24px';
  title.style.textShadow = '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white';
  chartContainer.appendChild(title);

  // create the y axis label
  let yaxis = document.createElement('div');
  yaxis.innerHTML = options.yaxis;
  yaxis.id = 'y-axis-label';
  yaxis.style.left = '5px';
  yaxis.style.fontSize = '15px';
  yaxis.style.marginTop = 'auto';
  yaxis.style.top = '40%';
  yaxis.style.fontWeight = 'bold';
  yaxis.style.textShadow = '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white';
  chartContainer.appendChild(yaxis);

  // create the bars
  for (let [i, val] of d.entries()) {
    console.log(val);
    let barDiv = document.createElement('div');
    barDiv.id = val;
    barDiv.innerHTML = val;
    barDiv.className = 'bar';
    barDiv.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    barDiv.style.width = ((options.width * val)/(d.length)) + '%';
    barDiv.style.height = options.height + 'px';
    barDiv.style.margin = options.spacing + 'px';
    barDiv.style.color = options.text;
    barDiv.style.textAlign = options.textAlign;
    barDiv.style.lineHeight = options.height + 'px';
    barDiv.style.textShadow = '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white';
    chartContainer.appendChild(barDiv);
  }

  // create the x axis label
  let xAxisDiv = document.createElement('div');
  xAxisDiv.innerHTML = options.xaxis
  xAxisDiv.style.position = 'relative';
  xAxisDiv.style.margin = 'auto';
  xAxisDiv.style.fontWeight = 'bold';
  xAxisDiv.style.fontSize = '15px';
  xAxisDiv.style.textShadow = '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white';
  chartContainer.appendChild(xAxisDiv);

}
