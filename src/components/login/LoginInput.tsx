export default function LoginInput(props: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  className?: string,
  type: string,
  placeholder: string,
}) {

  return (
    <input 
      type={props.type} 
      placeholder={props.placeholder} 
      onChange={props.onChange}
      className={`${props.className} border border-black border-solid rounded-md w-72 h-10`}
    />
  );
}