import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjasService {
  private ninjas = [
    { id: 1, name: "John Smith", type: 'Intermediate' },
    { id: 2, name: "Rizwan Ali", type: 'Expert'}
  ]

  getNinjas(type?: 'Intermediate' | 'Expert') {
    if(type) {
      return this.ninjas.filter((ninja) => ninja.type === type)
    }

    return this.ninjas;
  }

  getNinja(id: number) {
    console.log(id)
    const ninja = this.ninjas.find((ninja) => ninja.id === id)

    if(!ninja) {
      throw new Error(`Ninja not found with id=${id}`)
    }

    return ninja;
  }

  createNinja(createNinjaDto: CreateNinjaDto) {
    const newNinja = {
      ...createNinjaDto,
      id: this.ninjas.length + 1
    }

    this.ninjas.push(newNinja);

    return newNinja;
  }

  updateNinja(id: number, updateNinjaDto: UpdateNinjaDto) {
    this.ninjas = this.ninjas.map((ninja) => {
      if(ninja.id === id) {
        return {...ninja, ...updateNinjaDto };
      }

      return ninja;
    });

    return this.getNinja(id);
  }

  removeNinja(id: number) {
    const toBeRemoved = this.getNinja(id);
    this.ninjas = this.ninjas.filter((ninja) => ninja.id !== id);

    return toBeRemoved;
  }
}
