import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
const MealItemForm = () => {
  const rnd = Math.floor(Math.random() * 1000);
  console.log(rnd);
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: `amount ${rnd}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
