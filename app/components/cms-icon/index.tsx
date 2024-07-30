const addStyleToSvg = (
  svgString: string,
  styles: React.CSSProperties
): string => {
  // Verificação do Ambiente de Execução:
  if (typeof document === "undefined") {
    return svgString;
  }

  const div = document.createElement("div");
  div.innerHTML = svgString.trim();

  const svg = div.querySelector("svg");

  if (!svg) {
    throw new Error("Invalid SVG string");
  }

  // Adiciona os estilos ao elemento SVG
  Object.keys(styles).forEach((key) => {
    svg.style[key as any] = styles[key as keyof React.CSSProperties] as string;
  });

  return div.innerHTML;
};

type CMSIconProps = {
  icon: string;
  style?: React.CSSProperties;
};

export const CMSIcon = ({ icon, style }: CMSIconProps) => {
  // Verifica se estamos no navegador
  if (typeof document === "undefined") {
    return <div dangerouslySetInnerHTML={{ __html: icon }} />;
  }

  const styledIcon = addStyleToSvg(icon, style || {});

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: styledIcon,
      }}
    />
  );
};
