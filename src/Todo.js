import Filters from './components/Filters';
import InputTask from './components/InputTask';
import Task from './components/Task';
import Title from './components/Title';
import './Todo.css';

function Todo() {
  return (
    <section class='vh-100'>
      <div class='container py-5 h-100'>
        <div class='row d-flex justify-content-center align-items-center h-100'>
          <div class='col'>
            <div
              class='card'
              id='list1'
              style={{ borderRadius: '.75rem; background-color: #eff1f2' }}
            >
              <div class='card-body py-4 px-4 px-md-5'>
                <Title />

                <div class='pb-2'>
                  <div class='card'>
                    <InputTask />
                  </div>
                </div>

                <hr class='my-4' />

                <Filters />

                <Task />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Todo;
