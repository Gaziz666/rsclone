import './main.css';

import EventEmitter from '../../utils/eventEmitter';
import create from '../../utils/create';
import CardListView from '../card.list.component/card.list.view';
import AddListCardBtn from '../addListCard.component/addListCardBtn.view';

export default class MainView extends EventEmitter {
  main!: HTMLElement;

  constructor(public model: unknown, public elements: any) {
    super();
  }

  show() {
    this.createMain();
  }

  createMain() {
    this.main = create('main', {
      className: 'main',
      child: null,
    });

    create('h1', {
      className: 'main_title',
      child: 'Main Container',
      parent: this.main,
    });

    MainView.renderCardList(this.main);

    const addBtn = new AddListCardBtn(this.model, this.main).show();
    this.main.append(addBtn);
    this.elements.prepend(this.main);
  }

  static renderCardList(parent: HTMLElement) {
    const cardList = new CardListView(null, parent);
    cardList.show();
  }
}
