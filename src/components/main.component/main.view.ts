import './main.css';

import EventEmitter from '../../utils/eventEmitter';
import create from '../../utils/create';
import BoardHeaderView from '../boardHeader.component/boardHeader.view';
import Board from '../board.component/board.viewer';

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

    const mainInner = create('div', {
      className: 'main-inner',
      child: null,
      parent: this.main,
    });

    const boardContainer = create('div', {
      className: 'board-main-content',
      child: null,
      parent: mainInner,
    });

    // eslint-disable-next-line no-new
    new BoardHeaderView(this.model, boardContainer).show();

    const boardWrapper = create('div', {
      className: 'board-wrapper',
      child: null,
      parent: boardContainer,
    });

    new Board(this.model, boardWrapper).show();

    this.elements.prepend(this.main);
  }
}
