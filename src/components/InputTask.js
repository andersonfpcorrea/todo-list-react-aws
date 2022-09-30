function InputTask() {
  return (
    <div class='card-body'>
      <div class='d-flex flex-row align-items-center'>
        <input
          type='text'
          class='form-control form-control-lg'
          id='exampleFormControlInput1'
          placeholder='Add new...'
        />
        <a href='#!' data-mdb-toggle='tooltip' title='Set due date'>
          <i class='fas fa-calendar-alt fa-lg me-3'></i>
        </a>
        <div>
          <button type='button' class='btn btn-primary'>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputTask;
