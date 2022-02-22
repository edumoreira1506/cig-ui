const centsToBrazilianFormat = (cents: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cents / 100);

export default centsToBrazilianFormat;
