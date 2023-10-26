import { Header } from './components/header';
import { Subsection } from './components/subsection';
import { Pending } from './components/pending';
import { series } from './data/repo';



function main() {
  console.log('Loaded main');


  const appElement = document.querySelector<HTMLDivElement>('.container');
  if (appElement === null) return;

  const components = [
    new Header('.container'),
    new Subsection('.main-header'),
    new Pending('.main', series),
  ];

  console.log(components);
}

main();
