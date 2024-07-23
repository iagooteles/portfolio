type FormattedDurationProps = {
    years: number;
    months: number;
    monthsRemaining: number;
}

export const formattedDuration = ({ ...props }: FormattedDurationProps): string => {
    const dateDuration =  props.years > 0
    ? `${props.years} ano${props.years > 1 ? 's' : ''}${
        props.monthsRemaining > 0
            ? ` e ${props.monthsRemaining} mes${props.monthsRemaining > 1 ? 'es' : ''}`
            : ''
        }`
    : `${props.months} mes${props.months > 1 ? 'es' : ''}`

    return dateDuration;

}