import "./style.scss";
import { BinaryCalculator } from "./BinaryCalculator";
import { DecCalculator } from "./DecCalculator";




$(document).ready(function() {
    const bitCalc = new BinaryCalculator(".binary-calculator");
    const decCalc = new DecCalculator('.dec-calculator');
})
