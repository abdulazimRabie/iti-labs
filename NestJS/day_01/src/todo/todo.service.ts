import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './entities/todo.interface';
import { CreateTodoDto } from 'src/todo/dto/create-todo.dto';
import { UpdateTodoDto } from 'src/todo/dto/update-todo.dto';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];
  private idCounter = 1;

  create(new_todo: CreateTodoDto): Todo {
    const newTodo: Todo = {
      id: this.idCounter++,
      title: new_todo.title,
      description: new_todo.description,
      isCompleted: false,
    };

    this.todos.push(newTodo);
    return newTodo;
  }

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: number): Todo {
    const todo = this.todos.find((t) => t.id === id);

    if (!todo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }

    return todo;
  }

  update(id: number, updateTodoDto: UpdateTodoDto): Todo {
    const todo = this.findOne(id);

    if (updateTodoDto.title !== undefined) {
      todo.title = updateTodoDto.title;
    }

    if (updateTodoDto.description !== undefined) {
      todo.description = updateTodoDto.description;
    }

    if (updateTodoDto.isCompleted !== undefined) {
      todo.isCompleted = updateTodoDto.isCompleted;
    }

    return todo;
  }

  remove(id: number): void {
    const index = this.todos.findIndex((t) => t.id === id);

    if (index === -1) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }

    this.todos.splice(index, 1);
  }
}
