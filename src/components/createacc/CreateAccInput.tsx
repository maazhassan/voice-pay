type myProps = {
    inputType: string,
    placeholder: string,
}


export default function CreateAccountInput(props : myProps) {
    return(
        <>
          <div>
            <input type={props.inputType} placeholder={props.placeholder}></input>
          </div>
        </>
    );
}