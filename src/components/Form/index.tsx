import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import {PlusCircle} from 'phosphor-react';

import { ListTasks } from '../ListTasks';

import { Button, Container, Input } from "./styles";

export type TasksProps = {
  id: number
  name: string
  complete: boolean
}

export function Form() {
  const [tasks, setTasks] = useState<TasksProps[]>([])
  const [value, setValue] = useState('')
  const [taskCount, setTaskCount] = useState(0);
  const [checkedTasks, setCheckedTasks] = useState(0);

  useEffect(() => {
    setTaskCount(tasks.length);

    const completeList = tasks.filter(task => task.complete)
    setCheckedTasks(completeList.length)
  }, [tasks])

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    addTask(value)
    setValue('')
  }

  function handleToggle(id: number) {
    const arrayMapped = tasks.map(task => (
      task.id === id ? { ...task, complete: !task.complete } : { ...task }
    ))

    setTasks(arrayMapped);
  }

  function handleFilter(id: number) {
    const filtered = tasks.filter(task => (
      task.id !== id
    ))

    setTasks(filtered);
  }

  function addTask(value: string) {
    const task = [...tasks, {
      id: tasks.length + 1,
      name: value,
      complete: false
    }]
    setTasks(task)
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
  }
  
  return (
    <>
      <Container onSubmit={handleSubmit}>
        <Input 
          required
          value={value}
          onChange={handleChange}
          placeholder="Adicionar uma nova tarefa"
        />
        <Button>
          <PlusCircle size={16} weight='bold' />
          Criar
        </Button>

      </Container>

      <ListTasks 
        tasks={tasks} 
        onToggle={handleToggle} 
        onDelete={handleFilter} 
        taskCount={taskCount}
        checkedTasks={checkedTasks}
      />
    </>
  )
}