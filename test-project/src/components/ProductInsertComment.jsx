import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useEffect, useState } from "react";
import DataContext from "../data/DataContext";
import { useParams } from "react-router-dom";


const ProductInsertComment = ({ setList }) => {
  const { state, action } = useContext(DataContext);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);

  const [name, setName] = useState("홍길동"); // 💛 uset 이름으로 변경해야함
  const [num, setNum] = useState(1);

  const { id } = useParams();

  //undefined 값을 지정해줘야한다. -> 이게 뭐야..?




  const sendComment = (e) => {
    e.preventDefault();
    setNum(num + 1);
    const newText = { marketId: id, commentId: num , name: name, text: text ,};
    const addText = state.comment.concat(newText);
    // 별점이 바로 들어감 -> 수정 필요
    text ? action.setComment(addText)
      : alert("댓글을 입력해주세요");
    document.querySelector(".question-text").value = "";
    setText("");
    console.log(state.comment)
  };

<<<<<<< HEAD
=======
  // 별점 onClick !!! 💛
  const sendRating = () => {
    text ? setRating(rating) : alert("댓글을 입력해주세요");
    setList(prev => [...prev, Number(rating)]);
  }
>>>>>>> 8337f095bdc7d408181995ed32dae53bee1b98d1

  return (

<div>
      <Form onSubmit={sendComment}>
        <Form.Group
          controlId="exampleForm.ControlTextarea1"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Form.Control
            as="textarea"
            className="question-text"
            onChange={e => {
              setText(e.target.value);
            }}
            placeholder="Send your qusestions."
            rows={3}
          ></Form.Control>
          <Form.Select
            onChange={e => setRating(e.target.value)}
            defaultValue="5"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
          <Button variant="secondary" type="submit" onClick={sendRating}>
            Send
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default ProductInsertComment;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  }
}