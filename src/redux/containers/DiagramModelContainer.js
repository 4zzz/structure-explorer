import {
  lockConstantValue,
  lockDomain,
  lockFunctionValue,
  lockPredicateValue,
  setConstantValue,
  setFunctionValueTable,
  setFunctionValueText,
  setPredicateValueTable,
  setPredicateValueText,
  toggleDatabase,
  toggleTable,
  renameDomainNode,
  syncDiagram,
  addDomainNode,
  removeDomainNode,
  addConstantNode,
  removeConstantNode,
  checkBadName,
  addUnaryPredicate,
  removeUnaryPredicate,
  toggleEditableNodes,
  renameConstantNode,
  setConstantValueFromLink,
  addBinaryPredicate,
  removeBinaryPredicate,
  changeDirectionOfBinaryRelation,
  addUnaryFunction,
  removeUnaryFunction,
  addTernaryNode, addQuaternaryNode, removeTernaryNode, removeQuaternaryNode,
} from "../actions";
import {connect} from 'react-redux';
import {BodyWidget} from "../../graph_view/components/BodyWidget";

const mapStateToProps = (state,ownProps) => ({
  structure: state.structure,
  structureObject: state.structureObject,
  diagramState: state.diagramState,
  store: ownProps.store
});

const mapDispatchOnProps = {
  addDomainNode: addDomainNode,
  addConstantNode: addConstantNode,
  addTernaryNode: addTernaryNode,
  renameDomainNode: renameDomainNode,
  renameConstantNode: renameConstantNode,
  removeDomainNode: removeDomainNode,
  removeConstantNode: removeConstantNode,
  removeTernaryNode: removeTernaryNode,
  removeQuaternaryNode: removeQuaternaryNode,
  addQuaternaryNode: addQuaternaryNode,
  addUnaryPredicate: addUnaryPredicate,
  addUnaryFunction: addUnaryFunction,
  syncDiagram: syncDiagram,
  setConstantValue: setConstantValue,
  checkBadName: checkBadName,
  setPredicateValueText: setPredicateValueText,
  setPredicateValueTable: setPredicateValueTable,
  setFunctionValueText: setFunctionValueText,
  setFunctionValueTable: setFunctionValueTable,
  toggleTable: toggleTable,
  toggleDatabase: toggleDatabase,
  lockDomain: lockDomain,
  lockConstantValue: lockConstantValue,
  lockPredicateValue: lockPredicateValue,
  lockFunctionValue: lockFunctionValue,
  toggleEditableNodes: toggleEditableNodes,
  setConstantValueFromLink: setConstantValueFromLink,
  removeUnaryFunction: removeUnaryFunction,
  removeUnaryPredicate: removeUnaryPredicate,
  addBinaryPredicate: addBinaryPredicate,
  removeBinaryPredicate: removeBinaryPredicate,
  changeDirectionOfBinaryRelation: changeDirectionOfBinaryRelation
};

const DiagramModelContainer = connect(
   mapStateToProps,
   mapDispatchOnProps
)(BodyWidget);

export default DiagramModelContainer;