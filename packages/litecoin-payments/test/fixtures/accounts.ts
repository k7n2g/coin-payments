import { AddressType, SinglesigAddressType } from '../../src'
import { ROOT_XPRV } from './bip44'

// Values calculated using https://iancoleman.io/bip39/

export type AccountFixture = {
  derivationPath: string,
  xprv: string,
  xpub: string,
  addresses: {
    [i: number]: string,
  }
}

export const legacyAccount: AccountFixture = {
  derivationPath: "m/44'/2'/0'",
  xprv: ROOT_XPRV,
  xpub:
    'xpub6Bvk7TZL7RXk6vMPS3aTszwr57mYGEnWwS1gnoNiE3R7CxvRV6Nq9NChJwoztJG3rwNfyi1G368cfbgjpHyTYQWHqJSMZH4Nb7x7b92oeUF',

  addresses: {
    '0': 'Lf657ADsEVi2bcUoMPiQpApGMVPL9PuLuA',
    '1': 'LXFn2Tmksj3GHZaGFgMoetZB18Bti5joLR',
    '2': 'LV9K1TrD2hKAynvSj5FJfce2DY2D7yHRgt',
    '5': 'LSDwZhsHHZb2GB9MGovSLZkpnvwasnfbxj',
    '6': 'LVEGmNsEtPh8stjEejWx1W6tfg3KwfKDg7',
    '10': 'LZrvk4KcQGTeAFAYCkm7QdMS2DW43opA1f',
    '10000': 'LYwubr1yu18FRp5RzDsMfowe7fKmLB5tJH',
    '20000': 'LRGxpNdnakyagUhJu3pDy9iK6Z79Grnags'
  },
}

export const p2shSegwitAccount: AccountFixture = {
  derivationPath: "m/49'/2'/0'",
  xprv: ROOT_XPRV,
  xpub:
    'xpub6Cn2FkCfvpJ4FTLGNyWwDTWhhgEpyF3fh3MXcH5uqrtSuHDKJHbkoJ5cCLD2uHQrHpCj7oL3eevz2hQoWuBMk3PvSXop7cimc6RbG8aKiCE',

  addresses: {
    0: 'LgXA2LGKuhTAysvxVwWJeahQzeBrfENjKK',
    1: 'LM7xwtna6t7cxjpc2gxMCx2yCAyJBJJ4MF',
    2: 'LiAXu6X6M4FnM8tY8ZQ4a6pziwhVVkPurh',
    5: 'LgLxyQC4GdG95gv1nhKZbvEF8zdUTv3663',
    6: 'LhF6s8dMciWbNQDPiRq6H74LvmPjHLuiw1',
    10: 'LhzowTqM5iid2uWAPtNa6rFQKZkG9bCxzu',
    10000: 'LTcxZhnYwroiK8HVmtpnfrnFWXLLBBzcDX',
    20000: 'LMUJ5zTmeEoj8HkFQye2czvuWZdS4L1yM1',
  },
}

export const nativeSegwitAccount: AccountFixture = {
  derivationPath: "m/84'/2'/0'",
  xprv: ROOT_XPRV,
  xpub:
    'xpub6BrXLvkCQFCuJVqbEyhdduV1E2yoEch3WDcioqExPPQwt6v6CWAvj5RkyRPx6cQr9ABoT21J3bJzZnJuKZwpzS2qSvieggedQ3f7JcjwKPx',

  addresses: {
    0: 'LS34DjRN2KoQAcxTyNkYhTjsZGhpWqoEH7',
    1: 'LLatRUmz2nD1QxSFXFgYpZXr4NcfQiVJ7q',
    2: 'LS1CuGkPGz7fMVNfxBBdoAbHWDWuLTowzg',
    5: 'LeL4ZMCda5Akv5egKVzKF4KKp2igwqfjgm',
    6: 'LTNSFQGs3zfHN3y4sfAaQVt91RX7LQoRWQ',
    10: 'LKfhatcCp4zjitVpw6VHYhjMK5K6SxFh9V',
    10000: 'LMTSo6x6MzaWZumbtFbfYQhGaTMtaNkakq',
    20000: 'LfeVdNzHXzi1gGvq3i4euf8gKh5MVid2Fh',
  },
}

export const accountsByAddressType: { [type in SinglesigAddressType]: AccountFixture } = {
  [AddressType.Legacy]: legacyAccount,
  [AddressType.SegwitP2SH]: p2shSegwitAccount,
  [AddressType.SegwitNative]: nativeSegwitAccount,
}