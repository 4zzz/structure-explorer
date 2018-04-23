import React from 'react';
import {Col, FormControl, FormGroup, HelpBlock, InputGroup, OverlayTrigger, Panel, Popover, Row} from "react-bootstrap";
import FontAwesome from 'react-fontawesome';

function Language(props) {
   const popoverHelp = (
       <Popover id='popover-trigger-click' title='Editor jazyka'>
          Pomocou editoru jazyka sa definuje jazyk. <strong>Konštanty</strong> sa píšu oddelene
          čiarkou. <strong>Predikáty</strong> sa píšu oddelené čiarkami, vo
          formáte <code>predikat/arita</code>. <strong>Funkcie</strong> sa píšu oddelené čiarkami, vo
          formáte <code>funkcia/arita</code>.
       </Popover>
   );
   return (
       <div className='language-editor'>

          <Panel>
             <Panel.Heading>
                <Panel.Title componentClass='h2'>Jazyk 𝓛</Panel.Title>
                <OverlayTrigger trigger='click' placement='bottom' overlay={popoverHelp}>
                   <span>?</span>
                </OverlayTrigger>
             </Panel.Heading>
             <Panel.Body>
                <div className={'bs-example-form'}>
                   <Row>
                      <Col lg={12}>
                         <fieldset>
                            <legend>Symboly konštánt</legend>
                            <FormGroup
                                validationState={props.language.constants.feedback.message !== '' ? 'error' : null}>
                               <InputGroup>
                                  <label className='input-group-addon'
                                         htmlFor='language-editor-constants'>
                                     <span>𝓒<sub>𝓛</sub></span> = &#123;</label>
                                  <FormControl id='language-editor-constants' type='text'
                                               onChange={(e) => props.onConstantsChange(e.target.value)}
                                               value={props.language.constants.value}
                                               disabled={props.language.constants.locked}/>
                                  <span className='input-group-addon'>&#125;</span>
                                  {props.teacherMode ? (
                                      <span className="input-group-btn">
                                                    <div className='btn btn-lock' onClick={() => props.lockConstants()}>
                                                        <FontAwesome
                                                            name={props.language.constants.locked ? 'unlock' : 'lock'}/>
                                                    </div>
                                                </span>
                                  ) : null }
                               </InputGroup>
                               <HelpBlock>{props.language.constants.feedback.message}</HelpBlock>
                            </FormGroup>
                         </fieldset>
                      </Col>
                   </Row>
                   <Row>
                      <Col lg={12}>
                         <fieldset>
                            <legend>Predikátové symboly</legend>
                            <FormGroup
                                validationState={props.language.predicates.feedback.message !== '' ? 'error' : null}>
                               <InputGroup>
                                  <label className='input-group-addon'
                                         htmlFor='language-editor-predicates'>
                                     <span>𝓟<sub>𝓛</sub></span> = &#123;</label>
                                  <FormControl id='language-editor-predicates' type='text'
                                               onChange={(e) => props.onPredicatesChange(e.target.value)}
                                               value={props.language.predicates.value}
                                               disabled={props.language.predicates.locked}/>
                                  <span className='input-group-addon'>&#125;</span>
                                  {props.teacherMode ? (
                                      <span className="input-group-btn">
                                                    <div className='btn btn-lock'
                                                         onClick={() => props.lockPredicates()}>
                                                        <FontAwesome
                                                            name={props.language.predicates.locked ? 'unlock' : 'lock'}/>
                                                    </div>
                                                </span>
                                  ) : null }
                               </InputGroup>
                               <HelpBlock>{props.language.predicates.feedback.message}</HelpBlock>
                            </FormGroup>
                         </fieldset>
                      </Col>
                   </Row>
                   <Row>
                      <Col lg={12}>
                         <fieldset>
                            <legend>Funkčné symboly</legend>
                            <FormGroup
                                validationState={props.language.functions.feedback.message !== '' ? 'error' : null}>
                               <InputGroup>
                                  <label className='input-group-addon'
                                         htmlFor='language-editor-functions'>
                                     <span>𝓕<sub>𝓛</sub></span> = &#123;</label>
                                  <FormControl id='language-editor-functions' type='text'
                                               onChange={(e) => props.onFunctionsChange(e.target.value)}
                                               value={props.language.functions.value}
                                               disabled={props.language.functions.locked}/>
                                  <span className='input-group-addon'>&#125;</span>
                                  {props.teacherMode ? (
                                      <span className="input-group-btn">
                                                    <div className='btn btn-lock' onClick={() => props.lockFunctions()}>
                                                        <FontAwesome
                                                            name={props.language.functions.locked ? 'unlock' : 'lock'}/>
                                                    </div>
                                                </span>
                                  ) : null }
                               </InputGroup>
                               <HelpBlock>{props.language.functions.feedback.message}</HelpBlock>
                            </FormGroup>
                         </fieldset>
                      </Col>
                   </Row>
                </div>
             </Panel.Body>
          </Panel>
       </div>
   )
}

export default Language;