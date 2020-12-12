import { makeAutoObservable } from 'mobx';

class Count {
  number: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increase = () => {
    this.number++;
  };
  decrease = () => {
    this.number--;
  };
}

const countStore = new Count();
export default countStore;
