import { Component } from './component';

export class Subsection extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
    <main class="main">
    <section class="series">
      <h2 class="section-title">Series list</h2>
      <section class="series-pending">
        <h3 class="subsection-title">Pending series</h3>
        <p class="info">You have 4 series pending to watch</p>
      </section>
    </section>
    </main>
    `;
  }
}
