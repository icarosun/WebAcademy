import { Tech } from './helpersType';

export function listTechs(techs: Tech[]) {
  const list = techs
    .filter((value) => value.poweredByNodejs)
    .map((value) => `<li>${value.name} - ${value.type}</li>`);

  return list.join('');
}
