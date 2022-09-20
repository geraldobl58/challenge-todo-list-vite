import {ClipboardText} from 'phosphor-react'

import { Card } from '../Card';

import { 
  Box, 
  Container, 
  TopHeader, 
  ListBox,
  Empty,
  Title,
  Subtitle
} from "./styles";

type Tasks ={
  id: number;
  name: string;
  complete: boolean;
}

export type ListTasksProps = {
  tasks: Tasks[]
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  taskCount: number;
  checkedTasks: number; 
}

export function ListTasks({
  tasks, 
  onToggle, 
  onDelete, 
  taskCount, 
  checkedTasks
}: ListTasksProps) {
  return (
    <>
      <Container>
        <TopHeader>
          <Box>
            Tarefas criadas <span>{checkedTasks}</span>
          </Box>
          <Box>
            Concluídas <span>{taskCount}</span>
          </Box>
        </TopHeader>

        <ListBox>
          {tasks.length > 0 ? (
            tasks.map(item => (
              <Card 
                key={item.id} 
                task={item} 
                onToggle={onToggle} 
                onDelete={onDelete}
              />
            ))
          ) : (
            <Empty>
              <ClipboardText size={56} color="var(--gray-400)" />
              <Title>Você ainda não tem tarefas cadastradas</Title>
              <Subtitle>Crie tarefas e organize seus itens a fazer</Subtitle>
            </Empty> 
          )}
        </ListBox>
      </Container>
    </>
  )
}