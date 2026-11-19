import logoUrl from '../assets/logo.png';

/** Logo CyberAcadémie (écusson « CA »). Décoratif : le nom du site est toujours rendu à côté en texte. */
export function Logo({ size = 28 }: { size?: number }) {
  return <img src={logoUrl} width={size} height={size} alt="" aria-hidden="true" decoding="async" className="logo" />;
}
