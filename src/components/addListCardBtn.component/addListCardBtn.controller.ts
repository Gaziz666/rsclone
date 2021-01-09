export default class AddListCardBtnController {
  addListCardBtn: any;

  constructor(public model: { [key: string]: any }, public viewer: any) {
    this.addListCardBtn = viewer;
    this.addListCardBtn
      .on({
        event: 'addListPlusClick',
        listener: () => this.addListPlusHandler(),
      })
      .on({
        event: 'closeBtnClick',
        listener: () => this.closeBtnHandle(),
      })
      .on({
        event: 'addListBtnCLick',
        listener: (e: Event) => this.addNewCard(e),
      })
      .on({
        event: 'inputListName',
        listener: (e: { [key: string]: string }) => this.inputNewListName(e),
      });
  }

  addListPlusHandler() {
    this.addListCardBtn.showInputForm();
  }

  closeBtnHandle() {
    this.addListCardBtn.closeInputForm();
  }

  addNewCard(e: Event) {
    e.preventDefault();
    this.addListCardBtn.renderNewList();
  }

  inputNewListName(e: { [key: string]: any }) {
    this.model.changeNewListName(e.target.value);
  }
}
