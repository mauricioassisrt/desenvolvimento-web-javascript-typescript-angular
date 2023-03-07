import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'descricaoReduzida'})
export class DescricaoReduzidaPipe implements PipeTransform {
  transform(value: string, truncarEm: number, iniciarEm: number): string {
    if (value.length > truncarEm) {
      return value.substr(iniciarEm, truncarEm) + '...'
    }
    return value
  }
}
