import { Tech, Prof } from './helpersType';

export function listTechs(techs: Tech[]) {
  const list = techs
    .filter((value) => value.poweredByNodejs)
    .map((value) => `<li>${value.name} - ${value.type}</li>`);

  return list.join('');
}

export function listProfs(profs: Prof[]) {
  const list = profs.map((value) => `<li>${value.nome} - ${value.sala}</li>`);

  return `<ul>${list.join('')}</ul>`;
}
