import { isInIframe } from '@dynamic-labs/utils';

import { SolanaWalletConnector, SolanaWalletConnectors } from './index.js';

jest.mock('@dynamic-labs/utils');

const isInIframeMock = isInIframe as jest.Mock;

describe('DefinitiveSolanaWalletConnector', () => {
  it('should return an empty array if not in an iframe', () => {
    isInIframeMock.mockReturnValue(false);
    expect(SolanaWalletConnectors({})).toEqual([]);
  });

  it('should return the DefinitiveSolanaWalletConnector if in an iframe', () => {
    isInIframeMock.mockReturnValue(true);
    expect(SolanaWalletConnectors({})).toEqual([SolanaWalletConnector]);
  });
});
