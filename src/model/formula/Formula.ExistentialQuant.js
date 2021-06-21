import Formula from "./Formula";
import {GAME_QUANTIFIER, PLAYER_QUANTIFIER} from "../../constants/gameConstants";

/**
 * Represent existential quantificator
 * @author Milan Cifra
 * @class
 * @extends Formula
 */
class ExistentialQuant extends Formula {

  /**
   *
   * @param {string} variableName
   * @param {Formula} subFormula
   */
  constructor(variableName, subFormula) {
    super();
    this.variableName = variableName;
    this.subFormula = subFormula;
  }

  /**
   *
   * @param {Structure} structure
   * @param {Map} e
   * @return {boolean}
   */
  eval(structure, e) {
    let eCopy = new Map(e);
    for (let item of structure.domain) {
      eCopy.set(this.variableName, item);
      if (this.subFormula.eval(structure, eCopy)) {
        return true;
      }
    }
    return false;
  }

  /**
   *
   * @returns {string}
   */
  toString() {
    return `∃${this.variableName} ${this.subFormula.toString()}`;
  }

  createCopy(){
    let subFormula = this.subFormula.createCopy();
    let variableName = this.variableName;
    return new ExistentialQuant(variableName, subFormula);
  }

  getType(commitment){
    return commitment ? PLAYER_QUANTIFIER : GAME_QUANTIFIER;
  }

  getSubFormulas(){
    return [this.subFormula];
  }

  substitute(from, to) {
    if (this.variableName !== from) {
      return new ExistentialQuant(to, this.subFormula.substitute(from, to));
    }
    return this.createCopy();
  }

  getSubFormulasCommitment(commitment){
    return [commitment];
  }

  getVariables(){
    const variables = this.subFormula.getVariables();
    variables.push(this.variableName);
    return variables;
  }
}

export default ExistentialQuant;