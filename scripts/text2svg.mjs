import fs from 'fs';
import TextToSVG from 'text-to-svg';

const textToSVG = TextToSVG.loadSync('../src/assets/汇文明朝体.otf');

const attributes = { fill: '#fafafa', stroke: 'none' };
const options = {
  x: 0,
  y: 0,
  fontSize: 72,
  anchor: 'top',
  attributes
};

const makeSvg = (text) => {
  const path = textToSVG.getD(text, options);
  const metrics = textToSVG.getMetrics(text, options);

  return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ${metrics.width} ${metrics.height}"><path d="${path}"/></svg>`;
}

fs.writeFileSync('../src/icons/sitestar/logo_en.svg', makeSvg('SITESTAR'));
fs.writeFileSync('../src/icons/sitestar/logo_zh_hant.svg', makeSvg('站點星空'));
fs.writeFileSync('../src/icons/sitestar/logo_zh.svg', makeSvg('站点星空'));
