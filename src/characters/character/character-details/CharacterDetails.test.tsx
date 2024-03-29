import React from 'react';
import { render, screen } from '@testing-library/react';
import { CharacterExtended } from '../../../shared/models/CharacterExtended';
import CharacterDetails from './CharacterDetails';
import {
  defaultLimit,
  episodesCharacter
} from '../../../shared/utils/CharacterDetailsEpisodes.utils';

const characterExtended: CharacterExtended = {
  character: {
    id: 7,
    name: 'Abradolf Lincler',
    status: 'unknown',
    species: 'Human',
    type: 'Genetic experiment',
    gender: 'Male',
    origin: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20'
    },
    location: {
      name: 'Testicle Monster Dimension',
      url: 'https://rickandmortyapi.com/api/location/21'
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/10',
      'https://rickandmortyapi.com/api/episode/11'
    ],
    url: 'https://rickandmortyapi.com/api/character/7',
    created: '2017-11-04T19:59:20.523Z'
  },
  origin: {
    id: 20,
    name: 'Earth (Replacement Dimension)',
    type: 'Planet',
    dimension: 'Replacement Dimension',
    residents: [
      'https://rickandmortyapi.com/api/character/3',
      'https://rickandmortyapi.com/api/character/4',
      'https://rickandmortyapi.com/api/character/5',
      'https://rickandmortyapi.com/api/character/9',
      'https://rickandmortyapi.com/api/character/11',
      'https://rickandmortyapi.com/api/character/13',
      'https://rickandmortyapi.com/api/character/16',
      'https://rickandmortyapi.com/api/character/31',
      'https://rickandmortyapi.com/api/character/32',
      'https://rickandmortyapi.com/api/character/50',
      'https://rickandmortyapi.com/api/character/58',
      'https://rickandmortyapi.com/api/character/59',
      'https://rickandmortyapi.com/api/character/64',
      'https://rickandmortyapi.com/api/character/66',
      'https://rickandmortyapi.com/api/character/76',
      'https://rickandmortyapi.com/api/character/88',
      'https://rickandmortyapi.com/api/character/103',
      'https://rickandmortyapi.com/api/character/107',
      'https://rickandmortyapi.com/api/character/109',
      'https://rickandmortyapi.com/api/character/113',
      'https://rickandmortyapi.com/api/character/115',
      'https://rickandmortyapi.com/api/character/124',
      'https://rickandmortyapi.com/api/character/128',
      'https://rickandmortyapi.com/api/character/137',
      'https://rickandmortyapi.com/api/character/138',
      'https://rickandmortyapi.com/api/character/141',
      'https://rickandmortyapi.com/api/character/147',
      'https://rickandmortyapi.com/api/character/149',
      'https://rickandmortyapi.com/api/character/151',
      'https://rickandmortyapi.com/api/character/154',
      'https://rickandmortyapi.com/api/character/166',
      'https://rickandmortyapi.com/api/character/167',
      'https://rickandmortyapi.com/api/character/170',
      'https://rickandmortyapi.com/api/character/171',
      'https://rickandmortyapi.com/api/character/172',
      'https://rickandmortyapi.com/api/character/180',
      'https://rickandmortyapi.com/api/character/181',
      'https://rickandmortyapi.com/api/character/182',
      'https://rickandmortyapi.com/api/character/185',
      'https://rickandmortyapi.com/api/character/189',
      'https://rickandmortyapi.com/api/character/190',
      'https://rickandmortyapi.com/api/character/210',
      'https://rickandmortyapi.com/api/character/217',
      'https://rickandmortyapi.com/api/character/218',
      'https://rickandmortyapi.com/api/character/219',
      'https://rickandmortyapi.com/api/character/227',
      'https://rickandmortyapi.com/api/character/230',
      'https://rickandmortyapi.com/api/character/233',
      'https://rickandmortyapi.com/api/character/234',
      'https://rickandmortyapi.com/api/character/236',
      'https://rickandmortyapi.com/api/character/237',
      'https://rickandmortyapi.com/api/character/240',
      'https://rickandmortyapi.com/api/character/241',
      'https://rickandmortyapi.com/api/character/243',
      'https://rickandmortyapi.com/api/character/244',
      'https://rickandmortyapi.com/api/character/245',
      'https://rickandmortyapi.com/api/character/248',
      'https://rickandmortyapi.com/api/character/251',
      'https://rickandmortyapi.com/api/character/255',
      'https://rickandmortyapi.com/api/character/259',
      'https://rickandmortyapi.com/api/character/262',
      'https://rickandmortyapi.com/api/character/265',
      'https://rickandmortyapi.com/api/character/272',
      'https://rickandmortyapi.com/api/character/276',
      'https://rickandmortyapi.com/api/character/280',
      'https://rickandmortyapi.com/api/character/292',
      'https://rickandmortyapi.com/api/character/293',
      'https://rickandmortyapi.com/api/character/324',
      'https://rickandmortyapi.com/api/character/326',
      'https://rickandmortyapi.com/api/character/327',
      'https://rickandmortyapi.com/api/character/332',
      'https://rickandmortyapi.com/api/character/335',
      'https://rickandmortyapi.com/api/character/341',
      'https://rickandmortyapi.com/api/character/346',
      'https://rickandmortyapi.com/api/character/347',
      'https://rickandmortyapi.com/api/character/352',
      'https://rickandmortyapi.com/api/character/353',
      'https://rickandmortyapi.com/api/character/354',
      'https://rickandmortyapi.com/api/character/357',
      'https://rickandmortyapi.com/api/character/360',
      'https://rickandmortyapi.com/api/character/361',
      'https://rickandmortyapi.com/api/character/363',
      'https://rickandmortyapi.com/api/character/365',
      'https://rickandmortyapi.com/api/character/374',
      'https://rickandmortyapi.com/api/character/377',
      'https://rickandmortyapi.com/api/character/390',
      'https://rickandmortyapi.com/api/character/391',
      'https://rickandmortyapi.com/api/character/401',
      'https://rickandmortyapi.com/api/character/402',
      'https://rickandmortyapi.com/api/character/405',
      'https://rickandmortyapi.com/api/character/423',
      'https://rickandmortyapi.com/api/character/435',
      'https://rickandmortyapi.com/api/character/437',
      'https://rickandmortyapi.com/api/character/438',
      'https://rickandmortyapi.com/api/character/439',
      'https://rickandmortyapi.com/api/character/440',
      'https://rickandmortyapi.com/api/character/452',
      'https://rickandmortyapi.com/api/character/453',
      'https://rickandmortyapi.com/api/character/467',
      'https://rickandmortyapi.com/api/character/468',
      'https://rickandmortyapi.com/api/character/469',
      'https://rickandmortyapi.com/api/character/471',
      'https://rickandmortyapi.com/api/character/492',
      'https://rickandmortyapi.com/api/character/493',
      'https://rickandmortyapi.com/api/character/497',
      'https://rickandmortyapi.com/api/character/509',
      'https://rickandmortyapi.com/api/character/510',
      'https://rickandmortyapi.com/api/character/511',
      'https://rickandmortyapi.com/api/character/512',
      'https://rickandmortyapi.com/api/character/513',
      'https://rickandmortyapi.com/api/character/514',
      'https://rickandmortyapi.com/api/character/516',
      'https://rickandmortyapi.com/api/character/517',
      'https://rickandmortyapi.com/api/character/523',
      'https://rickandmortyapi.com/api/character/524',
      'https://rickandmortyapi.com/api/character/526',
      'https://rickandmortyapi.com/api/character/534',
      'https://rickandmortyapi.com/api/character/535',
      'https://rickandmortyapi.com/api/character/536',
      'https://rickandmortyapi.com/api/character/537',
      'https://rickandmortyapi.com/api/character/538',
      'https://rickandmortyapi.com/api/character/539',
      'https://rickandmortyapi.com/api/character/540',
      'https://rickandmortyapi.com/api/character/541',
      'https://rickandmortyapi.com/api/character/561',
      'https://rickandmortyapi.com/api/character/562',
      'https://rickandmortyapi.com/api/character/564',
      'https://rickandmortyapi.com/api/character/570',
      'https://rickandmortyapi.com/api/character/575',
      'https://rickandmortyapi.com/api/character/584',
      'https://rickandmortyapi.com/api/character/585',
      'https://rickandmortyapi.com/api/character/586',
      'https://rickandmortyapi.com/api/character/588',
      'https://rickandmortyapi.com/api/character/590',
      'https://rickandmortyapi.com/api/character/591',
      'https://rickandmortyapi.com/api/character/592',
      'https://rickandmortyapi.com/api/character/667',
      'https://rickandmortyapi.com/api/character/672',
      'https://rickandmortyapi.com/api/character/680',
      'https://rickandmortyapi.com/api/character/684',
      'https://rickandmortyapi.com/api/character/686',
      'https://rickandmortyapi.com/api/character/687',
      'https://rickandmortyapi.com/api/character/688',
      'https://rickandmortyapi.com/api/character/689',
      'https://rickandmortyapi.com/api/character/690',
      'https://rickandmortyapi.com/api/character/691',
      'https://rickandmortyapi.com/api/character/692',
      'https://rickandmortyapi.com/api/character/693',
      'https://rickandmortyapi.com/api/character/694',
      'https://rickandmortyapi.com/api/character/695',
      'https://rickandmortyapi.com/api/character/696',
      'https://rickandmortyapi.com/api/character/697',
      'https://rickandmortyapi.com/api/character/698',
      'https://rickandmortyapi.com/api/character/699',
      'https://rickandmortyapi.com/api/character/700',
      'https://rickandmortyapi.com/api/character/701',
      'https://rickandmortyapi.com/api/character/702',
      'https://rickandmortyapi.com/api/character/703',
      'https://rickandmortyapi.com/api/character/704',
      'https://rickandmortyapi.com/api/character/705',
      'https://rickandmortyapi.com/api/character/706',
      'https://rickandmortyapi.com/api/character/707',
      'https://rickandmortyapi.com/api/character/708',
      'https://rickandmortyapi.com/api/character/710',
      'https://rickandmortyapi.com/api/character/712',
      'https://rickandmortyapi.com/api/character/713',
      'https://rickandmortyapi.com/api/character/714',
      'https://rickandmortyapi.com/api/character/715',
      'https://rickandmortyapi.com/api/character/716',
      'https://rickandmortyapi.com/api/character/717',
      'https://rickandmortyapi.com/api/character/719',
      'https://rickandmortyapi.com/api/character/720',
      'https://rickandmortyapi.com/api/character/721',
      'https://rickandmortyapi.com/api/character/722',
      'https://rickandmortyapi.com/api/character/723',
      'https://rickandmortyapi.com/api/character/724',
      'https://rickandmortyapi.com/api/character/725',
      'https://rickandmortyapi.com/api/character/726',
      'https://rickandmortyapi.com/api/character/727',
      'https://rickandmortyapi.com/api/character/728',
      'https://rickandmortyapi.com/api/character/729',
      'https://rickandmortyapi.com/api/character/730',
      'https://rickandmortyapi.com/api/character/732',
      'https://rickandmortyapi.com/api/character/733',
      'https://rickandmortyapi.com/api/character/734',
      'https://rickandmortyapi.com/api/character/735',
      'https://rickandmortyapi.com/api/character/737',
      'https://rickandmortyapi.com/api/character/738',
      'https://rickandmortyapi.com/api/character/739',
      'https://rickandmortyapi.com/api/character/740',
      'https://rickandmortyapi.com/api/character/741',
      'https://rickandmortyapi.com/api/character/742',
      'https://rickandmortyapi.com/api/character/753',
      'https://rickandmortyapi.com/api/character/754',
      'https://rickandmortyapi.com/api/character/755',
      'https://rickandmortyapi.com/api/character/756',
      'https://rickandmortyapi.com/api/character/757',
      'https://rickandmortyapi.com/api/character/758',
      'https://rickandmortyapi.com/api/character/759',
      'https://rickandmortyapi.com/api/character/760',
      'https://rickandmortyapi.com/api/character/761',
      'https://rickandmortyapi.com/api/character/762',
      'https://rickandmortyapi.com/api/character/763',
      'https://rickandmortyapi.com/api/character/764',
      'https://rickandmortyapi.com/api/character/765',
      'https://rickandmortyapi.com/api/character/766',
      'https://rickandmortyapi.com/api/character/767',
      'https://rickandmortyapi.com/api/character/768',
      'https://rickandmortyapi.com/api/character/769',
      'https://rickandmortyapi.com/api/character/770',
      'https://rickandmortyapi.com/api/character/771',
      'https://rickandmortyapi.com/api/character/772',
      'https://rickandmortyapi.com/api/character/773',
      'https://rickandmortyapi.com/api/character/774',
      'https://rickandmortyapi.com/api/character/775',
      'https://rickandmortyapi.com/api/character/776',
      'https://rickandmortyapi.com/api/character/777',
      'https://rickandmortyapi.com/api/character/778',
      'https://rickandmortyapi.com/api/character/781',
      'https://rickandmortyapi.com/api/character/786',
      'https://rickandmortyapi.com/api/character/788',
      'https://rickandmortyapi.com/api/character/789',
      'https://rickandmortyapi.com/api/character/790',
      'https://rickandmortyapi.com/api/character/791',
      'https://rickandmortyapi.com/api/character/203',
      'https://rickandmortyapi.com/api/character/794',
      'https://rickandmortyapi.com/api/character/800',
      'https://rickandmortyapi.com/api/character/813',
      'https://rickandmortyapi.com/api/character/821',
      'https://rickandmortyapi.com/api/character/826'
    ],
    url: 'https://rickandmortyapi.com/api/location/20',
    created: '2017-11-18T19:33:01.173Z'
  },
  location: {
    id: 21,
    name: 'Testicle Monster Dimension',
    type: 'Dimension',
    dimension: 'Testicle Monster Dimension',
    residents: [
      'https://rickandmortyapi.com/api/character/7',
      'https://rickandmortyapi.com/api/character/436'
    ],
    url: 'https://rickandmortyapi.com/api/location/21',
    created: '2017-11-18T19:41:01.605Z'
  },
  episodes: [
    {
      id: 10,
      name: 'Close Rick-counters of the Rick Kind',
      air_date: 'April 7, 2014',
      episode: 'S01E10',
      characters: [
        'https://rickandmortyapi.com/api/character/1',
        'https://rickandmortyapi.com/api/character/2',
        'https://rickandmortyapi.com/api/character/3',
        'https://rickandmortyapi.com/api/character/4',
        'https://rickandmortyapi.com/api/character/5',
        'https://rickandmortyapi.com/api/character/7',
        'https://rickandmortyapi.com/api/character/14',
        'https://rickandmortyapi.com/api/character/15',
        'https://rickandmortyapi.com/api/character/18',
        'https://rickandmortyapi.com/api/character/19',
        'https://rickandmortyapi.com/api/character/21',
        'https://rickandmortyapi.com/api/character/22',
        'https://rickandmortyapi.com/api/character/27',
        'https://rickandmortyapi.com/api/character/39',
        'https://rickandmortyapi.com/api/character/53',
        'https://rickandmortyapi.com/api/character/77',
        'https://rickandmortyapi.com/api/character/78',
        'https://rickandmortyapi.com/api/character/79',
        'https://rickandmortyapi.com/api/character/82',
        'https://rickandmortyapi.com/api/character/83',
        'https://rickandmortyapi.com/api/character/84',
        'https://rickandmortyapi.com/api/character/85',
        'https://rickandmortyapi.com/api/character/86',
        'https://rickandmortyapi.com/api/character/103',
        'https://rickandmortyapi.com/api/character/113',
        'https://rickandmortyapi.com/api/character/118',
        'https://rickandmortyapi.com/api/character/119',
        'https://rickandmortyapi.com/api/character/152',
        'https://rickandmortyapi.com/api/character/164',
        'https://rickandmortyapi.com/api/character/177',
        'https://rickandmortyapi.com/api/character/209',
        'https://rickandmortyapi.com/api/character/215',
        'https://rickandmortyapi.com/api/character/232',
        'https://rickandmortyapi.com/api/character/242',
        'https://rickandmortyapi.com/api/character/274',
        'https://rickandmortyapi.com/api/character/290',
        'https://rickandmortyapi.com/api/character/294',
        'https://rickandmortyapi.com/api/character/295',
        'https://rickandmortyapi.com/api/character/298',
        'https://rickandmortyapi.com/api/character/299',
        'https://rickandmortyapi.com/api/character/329',
        'https://rickandmortyapi.com/api/character/330',
        'https://rickandmortyapi.com/api/character/339',
        'https://rickandmortyapi.com/api/character/349',
        'https://rickandmortyapi.com/api/character/359',
        'https://rickandmortyapi.com/api/character/381',
        'https://rickandmortyapi.com/api/character/389',
        'https://rickandmortyapi.com/api/character/405',
        'https://rickandmortyapi.com/api/character/424',
        'https://rickandmortyapi.com/api/character/425',
        'https://rickandmortyapi.com/api/character/426',
        'https://rickandmortyapi.com/api/character/427',
        'https://rickandmortyapi.com/api/character/428',
        'https://rickandmortyapi.com/api/character/429',
        'https://rickandmortyapi.com/api/character/430',
        'https://rickandmortyapi.com/api/character/431',
        'https://rickandmortyapi.com/api/character/432',
        'https://rickandmortyapi.com/api/character/433',
        'https://rickandmortyapi.com/api/character/434',
        'https://rickandmortyapi.com/api/character/663'
      ],
      url: 'https://rickandmortyapi.com/api/episode/10',
      created: '2017-11-10T12:56:34.747Z'
    },
    {
      id: 11,
      name: 'Ricksy Business',
      air_date: 'April 14, 2014',
      episode: 'S01E11',
      characters: [
        'https://rickandmortyapi.com/api/character/1',
        'https://rickandmortyapi.com/api/character/2',
        'https://rickandmortyapi.com/api/character/3',
        'https://rickandmortyapi.com/api/character/4',
        'https://rickandmortyapi.com/api/character/5',
        'https://rickandmortyapi.com/api/character/7',
        'https://rickandmortyapi.com/api/character/35',
        'https://rickandmortyapi.com/api/character/47',
        'https://rickandmortyapi.com/api/character/58',
        'https://rickandmortyapi.com/api/character/88',
        'https://rickandmortyapi.com/api/character/180',
        'https://rickandmortyapi.com/api/character/181',
        'https://rickandmortyapi.com/api/character/210',
        'https://rickandmortyapi.com/api/character/216',
        'https://rickandmortyapi.com/api/character/251',
        'https://rickandmortyapi.com/api/character/282',
        'https://rickandmortyapi.com/api/character/295',
        'https://rickandmortyapi.com/api/character/308',
        'https://rickandmortyapi.com/api/character/326',
        'https://rickandmortyapi.com/api/character/327',
        'https://rickandmortyapi.com/api/character/331',
        'https://rickandmortyapi.com/api/character/333',
        'https://rickandmortyapi.com/api/character/344',
        'https://rickandmortyapi.com/api/character/362',
        'https://rickandmortyapi.com/api/character/389',
        'https://rickandmortyapi.com/api/character/395',
        'https://rickandmortyapi.com/api/character/405',
        'https://rickandmortyapi.com/api/character/423',
        'https://rickandmortyapi.com/api/character/435',
        'https://rickandmortyapi.com/api/character/436'
      ],
      url: 'https://rickandmortyapi.com/api/episode/11',
      created: '2017-11-10T12:56:34.850Z'
    }
  ]
};

test('CharacterDetails contains name', async () => {
  render(<CharacterDetails {...characterExtended} />);
  const item = screen.getByTestId('characterdetails-name');

  expect(item.textContent).toBe(characterExtended.character.name);
});

test('CharacterDetails contains status-species', async () => {
  render(<CharacterDetails {...characterExtended} />);
  const item = screen.getByTestId('characterdetails-status-species');

  expect(item.textContent).toBe(
    `${characterExtended.character.status} - ${characterExtended.character.species}`
  );
});

test('CharacterDetails contains gender', async () => {
  render(<CharacterDetails {...characterExtended} />);
  const item = screen.getByTestId('characteritem-gender');

  expect(item.textContent).toBe(`${characterExtended.character.gender.toLowerCase()}.svg`);
  expect(item).toBeVisible();
});

test('CharacterDetails contains location and origin', async () => {
  render(<CharacterDetails {...characterExtended} />);
  const items = screen.getAllByTestId('characterdetails-location-abstract');
  expect(items.length).toBeGreaterThan(0);
  items.map((item) => expect(item).toBeVisible());
});

test('CharacterDetails has right value of location and origin', async () => {
  render(<CharacterDetails {...characterExtended} />);
  const items = screen.getAllByTestId('characterdetails-location-abstract');
  expect(items.length).toBe(2);

  items.forEach((item, index) =>
    expect(item.textContent).toContain(
      index === 0 ? characterExtended.origin?.name : characterExtended.location?.name
    )
  );
});

test('CharacterDetails contains only origin', async () => {
  render(
    <CharacterDetails
      {...{
        character: characterExtended.character,
        origin: characterExtended.origin,
        location: undefined
      }}
    />
  );
  const item = screen.getByTestId('characterdetails-location-abstract');

  expect(item).toBeVisible();
});

test('CharacterDetails has right value origin', async () => {
  render(
    <CharacterDetails
      {...{
        character: characterExtended.character,
        origin: characterExtended.origin,
        location: undefined
      }}
    />
  );
  const item = screen.getByTestId('characterdetails-location-abstract');

  expect(item.textContent).toContain(characterExtended.origin?.name);
});

test('CharacterDetails contains only location', async () => {
  render(
    <CharacterDetails
      {...{
        character: characterExtended.character,
        location: characterExtended.location,
        origin: undefined
      }}
    />
  );
  const item = screen.getByTestId('characterdetails-location-abstract');

  expect(item).toBeVisible();
});

test('CharacterDetails has right value location', async () => {
  render(
    <CharacterDetails
      {...{
        character: characterExtended.character,
        location: characterExtended.location,
        origin: undefined
      }}
    />
  );
  const item = screen.getByTestId('characterdetails-location-abstract');

  expect(item.textContent).toContain(characterExtended.location?.name);
});

test('CharacterDetails contains image', async () => {
  render(<CharacterDetails {...characterExtended} />);
  const item = screen.getByTestId('characterdetails-image');

  expect(item.nodeName).toBe('IMG');
  expect(item).toBeVisible();
});

test('CharacterDetails contains episodes', async () => {
  render(<CharacterDetails {...characterExtended} />);
  const item = screen.getByTestId('characterdetails-episodes');

  expect(item.textContent).toContain(episodesCharacter(characterExtended.episodes, defaultLimit));
  expect(item).toBeVisible();
});
