import { Trash, Check } from 'phosphor-react'

import { BoxContainer, Container, Status, StatusIcon } from "./styles";

export type Task = {
  id: number;
  name: string;
  complete: boolean;
}

export type CardProps = {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export function Card({ task, onToggle, onDelete }: CardProps) {

   return (
    <Container>
      <Status onClick={() => onToggle(task.id)}>
        <StatusIcon>
          {task.complete && <Check size={16} weight="bold" />}
        </StatusIcon>
      </Status>
      <BoxContainer>
        {task.name}
      </BoxContainer>
      <Trash 
        onClick={() => onDelete(task.id)} 
        size={24}
      />
  
    </Container>
   )
}