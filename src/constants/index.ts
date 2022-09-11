export * from './device';
export * from './styles';

export const LinkIdentifiers = {
  BREEDER_LINK: 'breeder-link' as const,
  VIEW_ADVERTISING: 'view-advertising'  as const,
  VIEW_ALL: 'view-all' as const
};

export type LinkIdentifiersType = typeof LinkIdentifiers[keyof typeof LinkIdentifiers]
