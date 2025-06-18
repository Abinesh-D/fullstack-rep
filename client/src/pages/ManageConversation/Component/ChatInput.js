import { Row, Col, Button } from "reactstrap";

const ChatInput = ({ input, setInput, onKeyPress, handleSend, isDisable, setIsDisable, typingContent, setIsSettyping,
    typingIntervalRef, setShowTyping, setTypingContent, handleCancelTyping }) => {

  


    return (
        <div className="p-3 chat-input-section">
            <Row>
                <Col>
                    <div className="position-relative">
                        <input
                            type="text"
                            value={input}
                            onKeyPress={onKeyPress}
                            onChange={(e) => {
                                setInput(e.target.value);
                                setIsDisable(!!e.target.value.trim());
                            }}
                            className="form-control chat-input"
                            placeholder="Ask me..."
                        />
                    </div>
                </Col>
                <Col className="col-auto">
                    {/* <Button
                            type="button"
                            color="primary"
                            disabled={!isDisable}
                            onClick={handleSend}
                            className="btn btn-primary btn-rounded chat-send w-md"
                        >
                            <span className="d-none d-sm-inline-block me-2">Send</span>
                            <i className="mdi mdi-send" />
                        </Button> */}

                    <Button
                        type="button"
                        color={typingContent ? "danger" : "primary"}
                        onClick={typingContent ? handleCancelTyping : handleSend}
                        className={`btn btn-${typingContent ? "danger" : "primary"} btn-rounded chat-send w-md`}
                    >
                        <span className="d-none d-sm-inline-block me-2">
                            {typingContent ? "Cancel" : "Send"}
                        </span>
                        <i className={`mdi mdi-${typingContent ? "close" : "send"}`} />
                    </Button>




                </Col>
            </Row>
        </div>
    );
};

export default ChatInput;
