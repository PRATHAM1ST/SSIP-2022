import DropDown from "../Components/DropDown";
import MultipleOption from "../Components/MultipleOption";
import SingleOption from "../Components/SingleOption";
import TextArea from "../Components/TextArea";

import '../Pages Css/FeedbackForm.css';

const FeedbackForm = ({title, address}) => {
    const Que = [{type: 'option', value: ['1', '2', '3']}]
    function handleSubmit(event){
        event.preventDefault();
      //   fetch()
      // .then((res) => res.json())
      // .then((data) => console.log(data))
      // .catch((err) => {
      //   throw err;
      // });
    }
  return (
    <>
      <div className="police-staion">
        <div className="title">{title}</div>
        <div className="address">{address}</div>
      </div>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <SingleOption question={"kkfnewfnjewnfkjewnf fkewnfjk fkjewnfkjewjf kjfe"} values={["fjkewnjf", "fekjnf", "efnjen"]} id={1}/>
        <SingleOption question={"kkfnewfnjewnfkjewnf fkewnfjk fkjewnfkjewjf kjfe"} values={["fjkewnjf", "fekjnf", "efnjen"]} id={2}/>
        <MultipleOption question={"kkfnewfnjewnfkjewnf fkewnfjk fkjewnfkjewjf kjfe"} values={["fjkewnjf", "fekjnf", "efnjen"]} id={3}/>
        <DropDown question={"kkfnewfnjewnfkjewnf fkewnfjk fkjewnfkjewjf kjfe"} values={["fjkewnjf", "fekjnf", "efnjen"]} id={4}/>
        <TextArea question={"kkfnewfnjewnfkjewnf fkewnfjk fkjewnfkjewjf kjfe"} id={5}/>
        <input className="button" type="submit" value="Submit" />
      </form>
    </>
  );
};

export default FeedbackForm;
