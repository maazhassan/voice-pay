type myProps = {
    inputType: string,
    placeholder: string,
    onChange : (event: React.ChangeEvent<HTMLInputElement>) => void;
    style : string
}


export default function CreateAccountInput(props : myProps) {
    return(
        <>
          <div>
            <input type={props.inputType} placeholder={props.placeholder} onChange={props.onChange} className={props.style}></input>
          </div>
        </>
    );
}