import { SeriesStructure } from "../models/series";
import { Component } from "./component";

export class Pending extends Component {

  series: SeriesStructure[];
  constructor(selector: string, series: SeriesStructure[]) {
    super(selector);
    this.series = series;
    this.template = this.createTemplate();
    this.render();
  }

  showSeries(allseries: SeriesStructure[]) {
    let addSeries = '';
    for (const item of allseries) {
      addSeries += `
      <li class="serie">
      <img class="serie__poster"
        src="${item.poster}"
        alt="${item.name} poster" />
      <h4 class="serie__title">${item.name}</h4>
      <p class="serie__info">${item.creator} (${item.year})</p>
      <ul class="score">
        <li class="score__star">
          <i class="icon--score fas fa-star" title="1/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score fas fa-star" title="2/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score fas fa-star" title="3/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score fas fa-star" title="4/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score fas fa-star" title="5/5"></i>
        </li>
        `;
    }

    return addSeries;

  }

  createTemplate() {
    return `<li>
    <ul class="series-list">
    ${this.showSeries(this.series)}
    </ul>
    `;
  }
}
