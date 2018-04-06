import React from 'react';
import {
    Panel,
    OverlayTrigger,
    Row,
    Col,
    FormGroup,
    InputGroup,
    Button,
    HelpBlock,
    FormControl,
    Popover
} from "react-bootstrap";

function Expressions({formulas, terms, onInputChange, addFormula, addTerm, setFormulaAnswer, setTermAnswer, domain, removeFormula, removeTerm}) {
    const popoverHelp = (
        <Popover id='popover-trigger-click' title='Editor štruktúry'>
            Tu sa pridávajú formuly a kontroluje sa či spĺňajú vyššie definovanú štruktúru. Všetky termy a predikáty
            musia byť definované v jazyku. Ak formula spľňa štruktúru, textový vstup bude zelený, inak červený.
            Formula sa zmaže tlačidlom X vpravo.
        </Popover>
    );
    return (
        <React.Fragment>
            <Panel>
                <Panel.Heading>
                    <Panel.Title>Spĺňanie formuly v štruktúre</Panel.Title>
                    <OverlayTrigger trigger='click' placement='bottom' overlay={popoverHelp}>
                        <span>?</span>
                    </OverlayTrigger>
                </Panel.Heading>
                <Panel.Body>
                    {formulas.map((formula, index) =>
                        <Row key={index}>
                            <Col sm={7}>
                                <FormGroup
                                    validationState={formula.value ? (formula.validSyntax ? 'success' : 'error') : null}>
                                    <InputGroup>
                                        <label className='input-group-addon'
                                               htmlFor={'formula-' + index}>
                                            <span>𝝋<sub>{index + 1}</sub></span></label>
                                        <FormControl type='text' value={formula.value}
                                                     onChange={(e) => onInputChange(e.target.value, index, 'FORMULA')}
                                                     id={'formula-' + index}/>
                                        <InputGroup.Button>
                                            <Button onClick={(e) => removeFormula(index)}>✖</Button>
                                            <Button onClick={(e) => removeFormula(index)}>🔒</Button>
                                        </InputGroup.Button>
                                    </InputGroup>
                                    <HelpBlock>{formula.feedback.message}</HelpBlock>
                                </FormGroup>
                            </Col>
                            <Col sm={3}>
                                <FormGroup>
                                    <InputGroup>
                                        <label className='input-group-addon'
                                               htmlFor={'formula-answer-' + index}>{'Odpoveď'}</label>
                                        <select className='form-control' value={formula.answerValue}
                                                onChange={(e) => setFormulaAnswer(e.target.value, index)}
                                                id={'formula-answer-' + index} disabled={!formula.validSyntax}>
                                            <option value={'-1'}>Vyber ...</option>
                                            <option value={'true'}>𝓜 ⊨ 𝝋[e]</option>
                                            <option value={'false'}>𝓜 ⊭ 𝝋[e]</option>
                                        </select>
                                        <InputGroup.Button>
                                            <Button onClick={(e) => removeFormula(index)}>🔒</Button>
                                        </InputGroup.Button>
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                            <Col sm={2}>
                                {formula.answerValue !== '' ? (formula.answerValue === formula.expressionValue ? 'OK' : 'ZLE') : ''}
                            </Col>
                        </Row>
                    )}
                    <Button bsStyle='success' onClick={() => addFormula()}>➕ Pridaj</Button>
                </Panel.Body>
            </Panel>

            <Panel>
                <Panel.Heading>
                    <Panel.Title>Hodnota termu</Panel.Title>
                    <OverlayTrigger trigger='click' placement='bottom' overlay={popoverHelp}>
                        <span>?</span>
                    </OverlayTrigger>
                </Panel.Heading>
                <Panel.Body>
                    {terms.map((term, index) =>
                        <Row key={index}>
                            <Col sm={7}>
                                <FormGroup
                                    validationState={term.inputValue ? (term.parsedObject ? 'success' : 'error') : null}>
                                    <InputGroup>
                                        <label className='input-group-addon'
                                               htmlFor={'term-' + index}>
                                            𝝉<sub>{index + 1}</sub> = </label>
                                        <FormControl type='text' value={term.inputValue}
                                                     onChange={(e) => onInputChange(e.target.value, index, 'TERM')}
                                                     id={'term-' + index}/>
                                        <InputGroup.Button>
                                            <Button onClick={(e) => removeTerm(index)}>✖</Button>
                                            <Button onClick={(e) => removeTerm(index)}>🔒</Button>
                                        </InputGroup.Button>
                                    </InputGroup>
                                    <HelpBlock>{term.feedbackMessage}</HelpBlock>
                                </FormGroup>
                            </Col>
                            <Col sm={3}>
                                <FormGroup>
                                    <InputGroup>
                                        <label className='input-group-addon'
                                               htmlFor={'term-answer-' + index}>{'Odpoveď'}</label>
                                        <select className='form-control' value={term.answerValue}
                                                onChange={(e) => setTermAnswer(e.target.value, index)}
                                                id={'term-answer-' + index}>
                                            <option value={''}>Vyber hodnotu ...</option>
                                            {[...domain].map((item) =>
                                                <option value={item}>{item}</option>
                                            )}
                                        </select>
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                            <Col sm={2}>
                                {term.answerValue !== '' ? (term.answerValue === term.expressionValue ? 'OK' : 'ZLE') : ''}
                                store</Col>
                        </Row>
                    )}
                    <Button bsStyle='success' onClick={() => addTerm()}>➕ Pridaj</Button>
                </Panel.Body>
            </Panel>
        </React.Fragment>
    )
}

export default Expressions;