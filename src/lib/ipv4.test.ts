import { describe, expect, it } from 'vitest';
import { contains, parseIpv4, prefixForHosts, prefixToMask, formatIpv4, subnetInfo } from './ipv4';

describe('ipv4', () => {
  it('analyse et formate', () => {
    expect(parseIpv4('192.168.10.77')).toBe(3232238157);
    expect(formatIpv4(3232238157)).toBe('192.168.10.77');
    expect(parseIpv4('256.1.1.1')).toBeNull();
    expect(parseIpv4('01.1.1.1')).toBeNull();
    expect(parseIpv4('1.1.1')).toBeNull();
    expect(parseIpv4('a.b.c.d')).toBeNull();
  });
  it('masques', () => {
    expect(formatIpv4(prefixToMask(20))).toBe('255.255.240.0');
    expect(formatIpv4(prefixToMask(0))).toBe('0.0.0.0');
    expect(formatIpv4(prefixToMask(32))).toBe('255.255.255.255');
    expect(() => prefixToMask(33)).toThrow();
  });
  it('calcule les sous-réseaux de la leçon', () => {
    const a = subnetInfo('192.168.10.77', 26)!;
    expect([a.network, a.broadcast, a.firstHost, a.lastHost, a.usableHosts]).toEqual([
      '192.168.10.64', '192.168.10.127', '192.168.10.65', '192.168.10.126', 62,
    ]);
    const b = subnetInfo('172.16.45.200', 21)!;
    expect([b.network, b.broadcast, b.usableHosts]).toEqual(['172.16.40.0', '172.16.47.255', 2046]);
    expect(subnetInfo('10.0.0.0', 22)!.wildcard).toBe('0.0.3.255');
    expect(subnetInfo('10.0.0.0', 31)!.usableHosts).toBe(2);
    expect(subnetInfo('10.0.0.5', 32)!.usableHosts).toBe(1);
    expect(subnetInfo('172.32.0.1', 24)!.category).toBe('Publique');
    expect(subnetInfo('172.31.0.1', 24)!.category).toContain('RFC 1918');
  });
  it('dimensionne un sous-réseau', () => {
    expect(prefixForHosts(500)).toBe(23);
    expect(prefixForHosts(30)).toBe(27);
    expect(prefixForHosts(31)).toBe(26);
    expect(prefixForHosts(2)).toBe(30);
  });
  it('appartenance', () => {
    expect(contains('10.10.0.0', 22, '10.10.3.200')).toBe(true);
    expect(contains('10.10.0.0', 22, '10.10.4.1')).toBe(false);
  });
});
