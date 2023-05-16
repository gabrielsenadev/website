interface AnimatedTextProps extends React.ComponentPropsWithoutRef<'p'> {
  text: string;
  highlightClassName: string;
  as: string;
}

export function HighlightText({ text, as: Component, highlightClassName, ...rest }: AnimatedTextProps) {
  return (
    <Component {...rest}>
      {text.split(' ').map((char, index) => {
        return <span key={index} className={`${highlightClassName} transition ease-in duration-1000 hover:duration-75`}> {char}</span>
      })}
    </Component>
  )
}

HighlightText.defaultProps = {
  as: 'p',
}