import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import qBank from "../question";
import Feedback from "./Feedback.js";

const Quiz = () => {
  const [questionNumber, setQuestionNumber] = useState(false);
  const [option, setOption] = useState("");
  const [score, setScore] = useState(0);

  const startQuiz = () => {
    setScore(0);
    setQuestionNumber(1);
  };

  const checkAnswer = (event) => {
    event.preventDefault();
    console.log(
      "you chose " +
        option +
        " and the correct answer is " +
        qBank[questionNumber - 1].correctAnswer
    );
    if (option === qBank[questionNumber - 1].correctAnswer) {
      setScore(score + 1);
    } else {
      setScore(score);
    }
    if (questionNumber === qBank.length + 1) {
      setQuestionNumber(false);
    } else {
      setQuestionNumber(questionNumber + 1);
    }
    console.log(questionNumber - 1);
  };

  return (
    <div>
      <Container className="main">
        <div>
          <Row className="justify-content-md-center">
            <Col md="12">
              {!questionNumber || questionNumber === qBank.length + 1 ? (
                <Button onClick={startQuiz}>Start Quiz</Button>
              ) : (
                <Row className="justify-content-md-center">
                  <Col md="12">
                    <Form>
                      <fieldset>
                        <Row className="justify-content-md-center">
                          <Col md="12">
                            <Form.Group>
                              <Form.Label as="legend">
                                {qBank[questionNumber - 1].question}
                              </Form.Label>
                              <Row md={12}>
                                {qBank[questionNumber - 1].choices.map(
                                  (choice, index) => (
                                    <Button
                                      key={index}
                                      variant="light"
                                      size="lg"
                                      value={choice}
                                      block
                                      onClick={(e) => setOption(e.target.value)}
                                    >
                                      {choice}
                                    </Button>
                                  )
                                )}
                              </Row>
                            </Form.Group>
                          </Col>
                        </Row>
                      </fieldset>
                      <Row className="justify-content-md-center">
                        <Col md="1">
                          <Button onClick={checkAnswer}>Next</Button>
                        </Col>
                      </Row>
                    </Form>
                  </Col>
                </Row>
              )}
            </Col>
          </Row>
        </div>
      </Container>
      <Row md={4}>
        <Col>
          {" "}
          <Feedback score={score} />
        </Col>
      </Row>
    </div>
  );
};

export default Quiz;
