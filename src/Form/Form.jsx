function Form({ newNoteSetter, setnotesList }) {
  const submit = async (e) => {
    await newNoteSetter({
      title: e.target.title.value,
      des: e.target.des.value,
    });
    e.preventDefault();
  };
  return (
    <form
      className="flex flex-col justify-between bg-slate-600 w-80"
      onSubmit={() => submit(event)}
    >
      <input placeholder="add your note title" type="text" name="title" />
      <textarea name="des" id="">
        add youe des
      </textarea>
      <input type="submit" value="submit" className="bg-slate-400" />
    </form>
  );
}

export default Form;
