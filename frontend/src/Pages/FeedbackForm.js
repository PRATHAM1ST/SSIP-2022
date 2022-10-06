import DropDown from "../Components/DropDown";
import MultipleOption from "../Components/MultipleOption";
import SingleOption from "../Components/SingleOption";
import TextArea from "../Components/TextArea";

const FeedbackForm = () => {
    const Que = [{type: 'option', value: ['1', '2', '3']}]
    function handleSubmit(event){
        event.preventDefault();
    }
  return (
    <>
      <form className="m-5" onSubmit={handleSubmit}>
        <SingleOption question={"kkfnewfnjewnfkjewnf fkewnfjk fkjewnfkjewjf kjfe"} values={["fjkewnjf", "fekjnf", "efnjen"]}/>
        <MultipleOption question={"kkfnewfnjewnfkjewnf fkewnfjk fkjewnfkjewjf kjfe"} values={["fjkewnjf", "fekjnf", "efnjen"]}/>
        <DropDown question={"kkfnewfnjewnfkjewnf fkewnfjk fkjewnfkjewjf kjfe"} values={["fjkewnjf", "fekjnf", "efnjen"]}/>
        <TextArea question={"kkfnewfnjewnfkjewnf fkewnfjk fkjewnfkjewjf kjfe"}/>
        <input className="btn btn-primary" type="submit" value="Submit" />
      </form>
    </>
  );
};

export default FeedbackForm;
