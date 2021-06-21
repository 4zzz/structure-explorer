import Formula from "./Formula";
import {GAME_OPERATOR, PLAYER_OPERATOR} from "../../constants/gameConstants";

/**
 * Represent disjunction
 * @author Milan Cifra
 * @class
 * @extends Formula
 */
class Disjunction extends Formula {

  /**
   *
   * @param {Formula} subLeft
   * @param {Formula} subRight
   */
  constructor(subLeft, subRight) {
    super();
    this.subLeft = subLeft;
    this.subRight = subRight;
  }

  /**
   *
   * @param {Structure} structure
   * @param {Map} e
   * @return {boolean}
   */
  eval(structure, e) {
    const left = this.subLeft.eval(structure, e);
    const right = this.subRight.eval(structure, e);
    return left || right;
  }

  /**
   *
   * @returns {string}
   */
  toString() {
    return `(${this.subLeft.toString()} ∨ ${this.subRight.toString()})`;
  }

  createCopy(){
    let subLeft = this.subLeft.createCopy();
    let subRight = this.subRight.createCopy();
    return new Disjunction(subLeft, subRight);
  }

  getType(commitment){
    return commitment ? PLAYER_OPERATOR : GAME_OPERATOR;
  }

  getSubFormulas(){
    return [this.subLeft, this.subRight];
  }

  substitute(from, to){
    return new Disjunction(this.subLeft.substitute(from, to), this.subRight.substitute(from, to));
  }

  getSubFormulasCommitment(commitment){
    return [commitment, commitment];
  }

  getVariables(){
    return this.subLeft.getVariables().concat(this.subRight.getVariables());
  }
}

export default Disjunction;