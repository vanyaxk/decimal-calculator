import {
  Calculator
} from "./Calculator";

class DecCalculator extends Calculator {
  constructor(selectorName) {
    super(selectorName);
    console.log(this.getName());
  }

  changeNumber(root) {
    let targetNumber = root.find('.active');
    targetNumber.text('').attr('contenteditable', 'true');
    targetNumber.trigger('focus');
  }

  initEvents() {
    super.initEvents();
    this.$calculatorDOMElement.find('.operator-bar').on('click', (e) => {
      const parentLabel = $(e.target).parent('.operator-bar');
      this.checkNumber();
      this.updateResult();
    });
  }

  add(numberX, numberY) {
    let result = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (let i = numberX.length - 1; i >= 0; i--) {
      let columnResult = numberX[i] + numberY[i] + result[i];
      if (columnResult > 9) {
        result[i] = columnResult % 10;
        result[i - 1] = Math.floor(columnResult / 10);
      } else {
        result[i] = columnResult;
        console.log(result[i]);
      }
    }
    return result;

  }

  updateResult() {
    let root = this.$calculatorDOMElement;
    let $resultNumber = root.children(".group-number").children('.result-bit');
    // console.log($resultNumber);

    for (let i = this.resultNumberArray.length - 1, j = 0; i >= 0; i--, j++) {
      console.log($resultNumber.eq(j).find('.active').text(this.resultNumberArray[i]));
      parseInt( $resultNumber.eq(j).find(".active").text(this.resultNumberArray[i]) )
    }
  }


}
export {
  DecCalculator
}